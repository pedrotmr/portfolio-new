'use client';

import { GradientText, HoverArrow, LinkPreview } from '@/ui';
import { avantGarde } from '@/utils';
import { motion, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import { useAnimations } from './animation';

const ClipTextExperience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { textStyle, clip1, clip2, clip3, clip4 } = useAnimations(scrollRef);

  return (
    <motion.section
      ref={scrollRef}
      className={`${avantGarde.className} mx-auto -mb-[22rem] h-[280dvh] bg-slate-900`}
    >
      <motion.div
        style={textStyle}
        className="top-1/2 z-20 mx-auto flex justify-center text-left text-[clamp(2rem,3.8vw,4rem)] font-normal leading-normal
          text-beige will-change-transform"
      >
        <div className="relative z-20">
          <motion.div style={{ clipPath: useMotionTemplate`inset(-280px ${clip1}% 0 -150px)` }}>
            Throughout my career, I've had the privilege
          </motion.div>

          <motion.div
            className="relative"
            style={{ clipPath: useMotionTemplate`inset(-280px ${clip2}% 0 -150px)` }}
          >
            of building software for a{' '}
            <LinkPreview
              url="https://app.gonnamakeit.com/"
              isStatic
              imageSrc="/images/sites/gonna-make-it.jpeg"
            >
              <GradientText color="green" underline>
                NFT marketplace,
              </GradientText>
            </LinkPreview>
            <HoverArrow className="right-5 top-5" />
          </motion.div>

          <motion.div style={{ clipPath: useMotionTemplate`inset(-280px ${clip3}% 0 -150px)` }}>
            an{' '}
            <LinkPreview url="https://www.getvendo.com/" isStatic imageSrc="/images/sites/vendo.jpeg">
              <GradientText color="lightGreen" underline>
                e-commerce startup
              </GradientText>
            </LinkPreview>
            , a{' '}
            <LinkPreview
              url="https://hellooutbound.com/"
              isStatic
              imageSrc="/images/sites/hello-outbound.jpeg"
            >
              <GradientText color="sky" underline>
                sales agency,
              </GradientText>
            </LinkPreview>
          </motion.div>

          <motion.div style={{ clipPath: useMotionTemplate`inset(-280px ${clip4}% 0 -150px)` }}>
            and an{' '}
            <LinkPreview
              url="https://www.gmgvegas.com"
              isStatic
              imageSrc="/images/sites/greenspun-media.jpeg"
            >
              <GradientText color="yellow" underline>
                award-winning news media
              </GradientText>
            </LinkPreview>{' '}
            company.
          </motion.div>
        </div>

        <div className="absolute top-0 opacity-20">
          <p>Throughout my career, I've had the privilege</p>
          <p>of building software for a NFT marketplace,</p>
          <p>an e-commerce startup, a sales agency,</p>
          <p>and an award-winning news media company.</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ClipTextExperience;
