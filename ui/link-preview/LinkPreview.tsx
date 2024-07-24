'use client';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { encode } from 'qss';
import React, { useEffect, useState } from 'react';
import { previewAnimation, useAnimations } from './animations';

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
} & ({ isStatic: true; imageSrc: string } | { isStatic?: false; imageSrc?: never });

const LinkPreview = ({
  children,
  url,
  width = 300,
  height = 168,
  isStatic = false,
  imageSrc = '',
}: LinkPreviewProps) => {
  let src;

  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: 'screenshot.url',
      colorScheme: 'dark',
      'viewport.isMobile': true,
      'viewport.deviceScaleFactor': 1,
      'viewport.width': width * 3,
      'viewport.height': height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { translateX, handleMouseMove } = useAnimations();

  return (
    <>
      {' '}
      {isMounted ? (
        <div className="hidden">
          <Image src={src} width={width} height={height} priority={true} alt="hidden image" />
        </div>
      ) : null}
      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => setOpen(open)}
      >
        <HoverCardPrimitive.Trigger
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
        >
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={previewAnimation.initial}
                animate={previewAnimation.animate}
                exit={previewAnimation.exit}
                style={{ x: translateX }}
                className="rounded-xl shadow-xl"
              >
                <Link
                  href={url}
                  className="block rounded-xl border-2 border-transparent bg-white p-1 shadow hover:border-neutral-800"
                  style={{ fontSize: 0 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    priority={true}
                    className="rounded-lg"
                    alt="preview image"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};

export default LinkPreview;
