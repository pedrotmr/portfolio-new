import useFitTextToContainer from '@/hooks/use-fit-text-to-container';
import { GradientText, TracingBeam } from '@/ui';
import { thunderFont } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { useLenis } from 'lenis/react';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useEffect, useRef } from 'react';

type TimelineEntry = {
  company_name: string;
  position: string;
  company_url: string;
  date: string;
  color: 'purple' | 'orange' | 'yellow' | 'sky' | 'green' | 'lightGreen' | 'pink';
  description: string;
  bulletPoints?: string[];
  tags?: string[];
  imageUrls?: string[];
  content: ReactNode;
};

const data: TimelineEntry[] = [
  {
    company_name: 'Hello Outbound',
    position: 'Frontend Developer',
    company_url: 'https://www.hellooutbound.com/',
    date: '2023 - 2024',
    color: 'sky',
    description:
      'Hello Outbound is sales agency build by engineers, growth strategists, and copywriters.',
    bulletPoints: [
      'Led migration from Angular to React, boosting user experience and stability.',
      'Built performant, reusable React components aligned with Figma designs.',
      'Ensured cross-browser compatibility and optimized performance.',
      'Contributed to backend improvements with Node.',
    ],
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    company_name: 'Energi',
    position: 'Web3 Frontend Developer',
    company_url: 'https://energi.world/',
    date: '2022 - 2023',
    color: 'green',
    description:
      'Energi is the safest blockchain featuring innovative security protocols to prevent cybercrime.',
    bulletPoints: [
      'Worked with a team of 10 to manage full app life cycle using GitLab.',
      'Built user interfaces for decentralized apps with React, Next.js, and Material UI.',
      'Integrated smart contracts with Web3.js and Ether.js for seamless blockchain interactions.',
      'Collaborated with designers and backend to sync UI/UX with backend structures.',
      'Stayed at the forefront of blockchain and frontend development technologies.',
      'Participated in code reviews to maintain standards and best practices.',
    ],
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I usually run out of copy, but when I see content this big, I try to integrate lorem
          ipsum.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some
          more example of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    company_name: 'Vendo',
    position: 'Frontend Developer',
    company_url: 'https://www.getvendo.com/',
    color: 'lightGreen',
    date: 'Early 2022',
    description:
      'Vendo is an all-in-one SaaS solution to launch your e-commerce marketplace in days.',
    bulletPoints: [
      'Maintained codebase with Next.js and TailwindCSS for quality and performance.',
      'Built components for a multi-vendor platform with StrapiCMS.',
      'Authored test cases to improve reliability and reduce bugs.',
      'Worked with product management to understand needs and offer recommendations.',
      'Handled version control with GitHub and deployments via Vercel.',
    ],
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Deployed 5 new components on Aceternity today
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Card grid component
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Startup template Aceternity
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Random file upload lol
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60`}
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

const Timeline = () => {
  const { containerRef, textRef } = useFitTextToContainer();

  const timeLineRef = useRef<HTMLDivElement>(null);

  const inView = useInView(containerRef, { margin: '30%', once: false });
  const lenis = useLenis();

  useEffect(() => {
    if (inView && lenis) {
      lenis.scrollTo('#timeline', {
        offset: -100,
        duration: 1,
        lock: true,
      });
    }
  }, [inView, lenis]);

  return (
    <motion.section id="timeline" className="px-4 md:px-0">
      <motion.section
        ref={containerRef}
        className="relative z-20 mx-auto grid w-full max-w-6xl font-bold leading-none text-beige"
      >
        <motion.p
          ref={textRef}
          className={`
            glitch cursor-none whitespace-nowrap text-[9rem]
            ${thunderFont.className}
          `}
          data-text="Professional Experience"
        >
          <span>Professional Experience</span>
          <TracingBeam containerRef={textRef} isHorizontal />
        </motion.p>

        <div className="relative mx-auto max-w-6xl pb-20" ref={timeLineRef}>
          {data.map((item, index) => (
            <div key={index} className="mt-2 flex justify-start pt-10 md:gap-10 md:pt-40">
              <div
                className={`
                  sticky top-40 z-40 flex max-w-xs flex-col items-center self-start lg:max-w-sm
                  md:w-full md:flex-row
                `}
              >
                <div
                  className={`
                    absolute left-3 flex h-10 w-10 items-center justify-center rounded-full
                    bg-neutral-600 md:-left-[1.15rem]
                  `}
                >
                  <div className="h-4 w-4 rounded-full border border-neutral-00 bg-neutral-500 p-2" />
                </div>
                <Link
                  href={item.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-2 font-bold md:pl-20"
                >
                  <GradientText color={item.color} className="hidden text-4xl md:block">
                    {item.company_name}
                  </GradientText>
                  <h4 className="ttext-neutral-200 hidden text-2xl md:block">{item.position}</h4>
                  <p className="hidden text-xl text-neutral-400 md:block">{item.date}</p>
                </Link>
              </div>

              <div className="relative grid w-full gap-4 pl-20 pr-4 font-bold md:pl-4">
                <h3 className="text-xl text-beige md:hidden">{item.company_name}</h3>
                <h4 className="text-xl text-neutral-500 md:hidden">{item.position}</h4>
                <p className="text-xl text-neutral-500 md:hidden">{item.date}</p>

                <div>
                  <p className="mb-6 text-base text-beige">{item.description}</p>

                  <ul className="mb-8 space-y-2">
                    {item.bulletPoints?.map((item, i) => (
                      <li key={i} className="ml-5 list-disc text-beige">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {/* <div className="grid grid-cols-2 gap-4">
                    {imageUrls.map((url, i) => (
                      <Image
                        key={i}
                        src={url}
                        alt="template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover  md:h-44 lg:h-60"
                      />
                    ))}
                  </div> */}
                </div>
                {item.content}
              </div>
            </div>
          ))}

          <TracingBeam containerRef={timeLineRef} />
        </div>
      </motion.section>
    </motion.section>
  );
};

export default Timeline;
