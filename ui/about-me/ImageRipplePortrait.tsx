'use client';

import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Component, Suspense, useMemo, useRef, type MutableRefObject, type ReactNode } from 'react';

type PointerPosition = { x: number; y: number } | null;

type ImageRipplePortraitProps = {
  src: string;
  active: boolean;
  frameRef: MutableRefObject<HTMLDivElement | null>;
  pointerPositionRef: MutableRefObject<PointerPosition>;
};

useLoader.preload(THREE.TextureLoader, '/images/pedro.webp');

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uPointer;
  uniform float uTime;
  uniform float uRippleStrength;
  varying vec2 vUv;

  void main() {
    float distanceToPointer = distance(vUv, uPointer);
    float ring = sin(distanceToPointer * 56.0 - uTime * 10.0)
      * exp(-distanceToPointer * 7.0);
    float centerFade = smoothstep(0.0, 0.035, distanceToPointer);
    vec2 direction = normalize(vUv - uPointer + vec2(0.00001));
    vec2 distortedUv = clamp(
      vUv + direction * ring * centerFade * uRippleStrength * 0.03,
      vec2(0.0),
      vec2(1.0)
    );
    gl_FragColor = texture2D(uTexture, distortedUv);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

const RipplePlane = ({ src, active, frameRef, pointerPositionRef }: ImageRipplePortraitProps) => {
  const texture = useLoader(THREE.TextureLoader, src);
  const rippleStrength = useRef(0);
  const movementStrength = useRef(0.9);
  const lastPointerActivity = useRef(0);
  const pointerInside = useRef(false);
  const pointerUv = useRef(new THREE.Vector2(0.5, 0.5));
  const { viewport } = useThree();

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0 },
      uRippleStrength: { value: 0 },
    }),
    [texture],
  );

  useFrame((_, delta) => {
    const now = performance.now() / 1000;
    const position = pointerPositionRef.current;
    const bounds = active ? frameRef.current?.getBoundingClientRect() : null;
    const inside = Boolean(
      position &&
        bounds &&
        bounds.width > 0 &&
        bounds.height > 0 &&
        position.x >= bounds.left &&
        position.x <= bounds.right &&
        position.y >= bounds.top &&
        position.y <= bounds.bottom,
    );

    if (inside && position && bounds) {
      pointerUv.current.set(
        (position.x - bounds.left) / bounds.width,
        1 - (position.y - bounds.top) / bounds.height,
      );
      const movement = uniforms.uPointer.value.distanceTo(pointerUv.current);
      if (!pointerInside.current || movement > 0.0001) {
        movementStrength.current = THREE.MathUtils.clamp(0.9 + movement * 5, 0.9, 1.25);
        rippleStrength.current = movementStrength.current;
        lastPointerActivity.current = now;
      }
      uniforms.uPointer.value.copy(pointerUv.current);
    }
    pointerInside.current = inside;

    const target = inside && now - lastPointerActivity.current < 2.25 ? movementStrength.current : 0;
    rippleStrength.current = active
      ? THREE.MathUtils.damp(rippleStrength.current, target, 7, Math.min(delta, 1 / 30))
      : 0;
    uniforms.uTime.value = now;
    uniforms.uRippleStrength.value = rippleStrength.current;
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
};

class RippleFallback extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const ImageRipplePortrait = (props: ImageRipplePortraitProps) => (
  <RippleFallback>
    <Canvas
      aria-hidden="true"
      className="pointer-events-none !absolute inset-0 !h-full !w-full"
      dpr={[1, 1.5]}
      fallback={null}
      frameloop={props.active ? 'always' : 'demand'}
      resize={{ scroll: false, offsetSize: true, debounce: 0 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
    >
      <Suspense fallback={null}>
        <RipplePlane {...props} />
      </Suspense>
    </Canvas>
  </RippleFallback>
);

export default ImageRipplePortrait;
