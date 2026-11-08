import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useMemo, useRef } from 'react';
import { canvasScale } from './constants';
import type { ImageRipplePortraitProps } from './types';

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
  uniform vec2 uImageSize;
  varying vec2 vUv;

  void main() {
    vec2 imageUv = (vUv - 0.5) * ${canvasScale} + 0.5;
    float distanceToPointer = distance(imageUv, uPointer);
    float ring = sin(distanceToPointer * 56.0 - uTime * 10.0)
      * exp(-distanceToPointer * 7.0);
    float centerFade = smoothstep(0.0, 0.035, distanceToPointer);
    vec2 direction = normalize(imageUv - uPointer + vec2(0.00001));
    vec2 distortedUv = imageUv + direction * ring * centerFade * uRippleStrength * 0.03;

    // Warp the rounded image boundary too, instead of clamping it to a fixed frame.
    vec2 corner = abs((distortedUv - 0.5) * uImageSize) - (uImageSize * 0.5 - 6.0);
    float edge = length(max(corner, 0.0)) + min(max(corner.x, corner.y), 0.0) - 6.0;
    float alpha = 1.0 - smoothstep(-0.75, 0.75, edge);
    gl_FragColor = vec4(texture2D(uTexture, clamp(distortedUv, 0.0, 1.0)).rgb, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

useLoader.preload(THREE.TextureLoader, '/images/pedro.webp');

export default function RipplePlane({
  src,
  active,
  frameRef,
  pointerPositionRef,
  onReady,
}: ImageRipplePortraitProps) {
  const texture = useLoader(THREE.TextureLoader, src);
  const rippleStrength = useRef(0);
  const movementStrength = useRef(0.9);
  const lastPointerActivity = useRef(0);

  const pointerInside = useRef(false);
  const pointerUv = useRef(new THREE.Vector2(0.5, 0.5));

  const { viewport, size, gl } = useThree();
  const renderedFrames = useRef(0);
  const onReadyRef = useRef(onReady);

  onReadyRef.current = onReady;

  useEffect(() => {
    const onContextLost = () => onReadyRef.current(false);

    const onContextRestored = () => {
      renderedFrames.current = 0;
    };

    const domElement = gl.domElement;

    domElement.addEventListener('webglcontextlost', onContextLost);
    domElement.addEventListener('webglcontextrestored', onContextRestored);

    return () => {
      domElement.removeEventListener('webglcontextlost', onContextLost);
      domElement.removeEventListener('webglcontextrestored', onContextRestored);
      onReadyRef.current(false);
    };
  }, [gl]);

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0 },
      uRippleStrength: { value: 0 },
      uImageSize: { value: new THREE.Vector2() },
    }),
    [texture],
  );

  useFrame((_, delta) => {
    if (++renderedFrames.current === 2) {
      onReadyRef.current(true);
    }

    uniforms.uImageSize.value.set(size.width / canvasScale, size.height / canvasScale);
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
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}
