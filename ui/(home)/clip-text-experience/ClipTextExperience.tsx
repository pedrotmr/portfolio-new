'use client';

import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useAnimations } from './animation';

const text =
  'I have built software for an e-commerce startup, a crypto wallet, a lead generation agency, a NFT marketplace and a media conglomerate, with websites attracting 1M monthly visitors.';

const ClipTextExperience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { textStyle, clip1, clip2, clip3, clip4 } = useAnimations(scrollRef);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    console.log(value);
  });

  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section ref={scrollRef} className="mx-auto h-[150dvh] md:h-[300dvh] max-w-7xl px-6 md:px-16">
      <motion.div
        style={textStyle}
        className={`
          sticky top-1/2 z-20 mx-auto flex justify-center text-center text-[clamp(2rem,3.6vw,3rem)]
          font-bold leading-normal text-beige will-change-transform md:text-left
        `}
      >
        <p className="absolute top-0 -translate-y-1/2">
          {text.split(' ').map((word, wordIndex) => {
            console.log(word);

            const baseGradientStyle = 'bg-gradient-to-r text-transparent bg-clip-text';

            const wordMap = {
              'e-commerce': `${baseGradientStyle} from-[#e5fa95] to-[#f3ffcc]`,
              'startup,': `${baseGradientStyle} from-[#e5fa95] to-[#f3ffcc]`,
              crypto: `${baseGradientStyle} from-[#e5fa95] to-[#f3ffcc]`,
              'wallet,': `${baseGradientStyle} from-pink-500 to-pink-200`,
              lead: `${baseGradientStyle} from-sky-500 to-sky-200`,
              generation: `${baseGradientStyle} from-sky-500 to-sky-200`,
              'agency,': `${baseGradientStyle} from-sky-500 to-sky-200`,
              NFT: `${baseGradientStyle} from-green-500 to-green-200`,
              marketplace: `${baseGradientStyle} from-green-500 to-green-200`,
              media: `${baseGradientStyle} from-yellow-500 to-yellow-200`,
              'conglomerate,': `${baseGradientStyle} from-yellow-500 to-yellow-200`,
            };

            return (
              <>
                <span key={wordIndex} className="inline-block">
                  {word.split('').map((char, charIndex) => {
                    const startOffset = 0.1;
                    const endOffset = 0.7;
                    const totalRange = endOffset - startOffset;

                    const charGlobalIndex =
                      text.split(' ').slice(0, wordIndex).join(' ').length + wordIndex + charIndex;
                    const totalChars = text.length;

                    const charStart = startOffset + (charGlobalIndex / totalChars) * totalRange;
                    const charEnd = startOffset + ((charGlobalIndex + 1) / totalChars) * totalRange;

                    const opacity = useTransform(scrollYProgress, [charStart, charEnd], [0, 1]);

                    return (
                      <span key={charIndex} className="relative inline-block">
                        <span className="absolute opacity-10">{char}</span>
                        <motion.span
                          style={{ opacity }}
                          className={wordMap[word as keyof typeof wordMap]}
                        >
                          {char}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>{' '}
              </>
            );
          })}
        </p>

        {/* <div className="relative z-20">
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
            with websites attracting 1M monthly visitors.
          </motion.div>
        </div>

        <div className="absolute top-0 opacity-20">
          <p>I have built software for an e-commerce startup</p>
          <p>a crypto wallet, a lead generation agency</p>
          <p>a NFT marketplace and a media conglomerate</p>
          <p>with websites attracting 1M monthly visitors.</p>
        </div>*/}
      </motion.div>
    </motion.section>
  );
};

export default ClipTextExperience;
