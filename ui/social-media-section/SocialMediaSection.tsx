import { thunderFont } from '@/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ElementType, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';

const SocialMediaSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'start start'],
  });

  const wrapperY = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);
  const circleScale = useTransform(scrollYProgress, [0, 1], [3, 1.8]);

  return (
    <motion.section ref={scrollRef} className="relative z-20 snap-both overflow-hidden bg-beige">
      <motion.div
        className="relative flex flex-col justify-evenly p-6 py-40"
        style={{ y: wrapperY, minHeight: 'calc(100dvh - 44px)' }}
      >
        <div className="grid-full place-items-center">
          <motion.div
            style={{ scale: circleScale, x: '-50%' }}
            className="absolute left-1/2 top-0 size-[clamp(30rem,30dvw,60rem)] rounded-full bg-sky-900 opacity-20
              will-change-transform"
          />
          <div className="overflow-hidden">
            <motion.h4
              className={`${thunderFont.className} text-[clamp(12px,10dvw,30rem)] font-bold leading-none text-slate-600`}
            >
              Feel free to drop me a line!
            </motion.h4>
          </div>
        </div>

        <div className="mx-auto mb-48 mt-16 max-w-2xl text-center text-xl font-medium text-slate-600">
          <div className="overflow-hidden">
            <motion.p>I'd love to hear from you! Checkout my Github for more work, connect</motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p>with me on LinkedIn, or shoot me an email at peedrotr@gmail.com.</motion.p>
          </div>
        </div>

        <ul className="mx-auto flex w-full max-w-5xl">
          <Button3D icon={FaGithub} label="Github" link="https://github.com/pedrotmr" />
          <Button3D icon={FaLinkedin} label="LinkedIn" link="https://www.linkedin.com/in/pedrotmr/" />
          <Button3D icon={FiAtSign} label="Email" link="mailto:peedrotr@gmail.com" />
        </ul>
      </motion.div>
    </motion.section>
  );
};

const Button3D = ({ icon: Icon, label, link }: { icon: ElementType; label: string; link: string }) => {
  return (
    <li className="mx-auto text-beige hover:text-white">
      <a className="button-3d" href={link} target="_blank" rel="noopener noreferrer">
        <Icon className="size-10" />
        <span className="text-lg tracking-widest">{label}</span>
      </a>
    </li>
  );
};

export default SocialMediaSection;
