'use client';

import { GradientText, LinkPreview } from '@/ui';
import { motion, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import { useAnimations } from './animation';

const ClipTextExperience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { wrapperStyle, textStyle, clip1, clip2, clip3, clip4 } = useAnimations(scrollRef);

  return (
    <section className="h-full bg-beige">
      <motion.div ref={scrollRef} style={wrapperStyle} className="-mt-60 h-[220dvh] bg-slate-900">
        <motion.div
          style={textStyle}
          className="sticky top-1/2 z-20 mx-auto flex justify-center text-5xl font-bold leading-normal text-beige"
        >
          <div className="relative z-20">
            <motion.div style={{ clipPath: useMotionTemplate`inset(-280px ${clip1}% 0 -150px)` }}>
              I have built software for an
              <LinkPreview
                url="https://www.getvendo.com/"
                isStatic
                imageSrc="/images/sites/vendo.jpeg"
              >
                <GradientText color="lightGreen" underline>
                  e-commerce startup
                </GradientText>
              </LinkPreview>
            </motion.div>

            <motion.div style={{ clipPath: useMotionTemplate`inset(-280px ${clip2}% 0 -150px)` }}>
              a
              <LinkPreview
                url="https://www.joinclutch.xyz/"
                isStatic
                imageSrc="/images/sites/clutch-wallet.jpeg"
              >
                <GradientText color="pink" underline>
                  crypto wallet
                </GradientText>
                ,
              </LinkPreview>{' '}
              a
              <LinkPreview
                url="https://hellooutbound.com/"
                isStatic
                imageSrc="/images/sites/hello-outbound.jpeg"
              >
                <GradientText color="sky" underline>
                  lead generation agency
                </GradientText>
              </LinkPreview>
            </motion.div>

            <motion.div style={{ clipPath: useMotionTemplate`inset(-280px ${clip3}% 0 -150px)` }}>
              a
              <LinkPreview
                url="https://app.gonnamakeit.com/"
                isStatic
                imageSrc="/images/sites/gonna-make-it.jpeg"
              >
                <GradientText color="green" underline>
                  NFT marketplace
                </GradientText>
              </LinkPreview>{' '}
              and a
              <LinkPreview
                url="https://www.gmgvegas.com"
                isStatic
                imageSrc="/images/sites/greenspun-media.jpeg"
              >
                <GradientText color="yellow" underline>
                  media conglomerate
                </GradientText>
              </LinkPreview>
            </motion.div>

            <motion.div style={{ clipPath: useMotionTemplate`inset(-280px ${clip4}% 0 -150px)` }}>
              with websites{' '}
              <GradientText color="silver" glow>
                attracting 700K monthly visitors.
              </GradientText>
            </motion.div>
          </div>

          <div className="absolute top-0 z-10 opacity-20">
            <p>I have built software for an e-commerce startup</p>
            <p>a crypto wallet, a lead generation agency</p>
            <p>a NFT marketplace and a media conglomerate</p>
            <p>with websites attracting 700K monthly visitors.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClipTextExperience;
