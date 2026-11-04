import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import { thunderFont } from '@/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ElementType, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';

const links = [
  { icon: FaGithub, label: 'Github', link: 'https://github.com/pedrotmr' },
  { icon: FaLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/pedrotmr/' },
  { icon: FiAtSign, label: 'Email', link: 'mailto:peedrotr@gmail.com' },
];

const SocialMediaSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { reduced, stage } = useMotionCapabilities();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'start start'],
  });

  const wrapperY = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);
  const circleScale = useTransform(scrollYProgress, [0, 1], [3, 1.8]);

  return (
    <motion.section
      ref={scrollRef}
      aria-labelledby="contact-title"
      className="contact-section relative z-20 snap-both overflow-hidden bg-beige"
    >
      <motion.div
        className="contact-body relative flex flex-col justify-evenly px-6 lg:p-6 lg:py-40"
        style={{ y: reduced || !stage ? 0 : wrapperY, minHeight: stage ? 'calc(100dvh - 44px)' : undefined }}
      >
        <div className="grid-full place-items-center">
          <motion.div
            aria-hidden="true"
            style={{ scale: reduced || !stage ? 1.8 : circleScale, x: '-50%' }}
            className="absolute left-1/2 top-0 size-[clamp(22rem,30dvw,60rem)] rounded-full bg-sky-900 opacity-20
              will-change-transform lg:size-[clamp(30rem,30dvw,60rem)]"
          />
          <div className="overflow-hidden">
            <h2
              id="contact-title"
              className={`${thunderFont.className} text-balance text-center text-[clamp(4.5rem,10dvw,30rem)] font-bold leading-[0.95]
                text-slate-600 lg:leading-none`}
            >
              Feel free to drop me a line!
            </h2>
          </div>
        </div>

        <div
          className="contact-description mx-auto max-w-2xl text-pretty text-center text-base font-medium text-slate-600 lg:mb-48
            lg:mt-16 lg:text-xl lg:[text-wrap:wrap]"
        >
          <p className="[overflow-wrap:anywhere]">
            I'd love to hear from you! Checkout my Github for more work, connect{' '}
            <br className="hidden lg:inline" />
            with me on LinkedIn, or shoot me an email at{' '}
            <a
              href="mailto:peedrotr@gmail.com"
              className="underline decoration-slate-400 underline-offset-4 lg:no-underline"
            >
              peedrotr@gmail.com
            </a>
            .
          </p>
        </div>

        <ul className="contact-links mx-auto flex w-full max-w-5xl flex-row items-center lg:pb-0">
          {links.map((item) => (
            <Button3D key={item.label} {...item} />
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

const Button3D = ({ icon: Icon, label, link }: { icon: ElementType; label: string; link: string }) => {
  const external = link.startsWith('http');

  return (
    <li className="mx-auto text-beige hover:text-white">
      <a
        className="button-3d"
        href={link}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <Icon aria-hidden="true" className="size-10" />
        <span className="text-lg tracking-widest">{label}</span>
      </a>
    </li>
  );
};

export default SocialMediaSection;
