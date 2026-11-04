import useFitTextToContainer from '@/hooks/use-fit-text-to-container';
import { GradientText, MagneticWrapper, TagList, TracingBeam } from '@/ui';
import { avantGarde, thunderFont } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { timelineData } from './timeline-data';

const Timeline = () => {
  const { containerRef, textRef } = useFitTextToContainer();

  const timeLineRef = useRef<HTMLDivElement>(null);

  const inView = useInView(timeLineRef);

  return (
    <section aria-labelledby="experience-title" className="bg-slate-900 px-5 sm:px-8 lg:px-0">
      <motion.div
        ref={containerRef}
        className="relative z-20 mx-auto grid w-full min-w-0 max-w-6xl text-beige [overflow-wrap:anywhere]"
      >
        <MagneticWrapper>
          <h2
            id="experience-title"
            ref={textRef}
            className={`glitch ${thunderFont.className} mb-14 cursor-none whitespace-nowrap font-bold leading-none md:mb-20`}
            data-text="Professional Experience"
          >
            <span>Professional Experience</span>
            {inView && <TracingBeam containerRef={textRef} isHorizontal />}
          </h2>
        </MagneticWrapper>

        <motion.div ref={timeLineRef} className="relative">
          {timelineData.map((item) => (
            <article key={item.company_name} className="mt-2 flex gap-4 pb-20 lg:gap-10 lg:pb-28">
              {/* Desktop keeps the sticky company column. On small screens only the dot stays in it. */}
              <div className="sticky top-40 z-30 flex w-8 shrink-0 flex-row items-center self-start lg:w-full lg:max-w-md lg:shrink">
                <div className="absolute left-0 flex size-8 items-center justify-center rounded-full bg-neutral-600">
                  <div className="size-4 rounded-full border bg-neutral-500" />
                </div>
                <Link
                  href={item.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hidden gap-2 lg:grid lg:pl-20"
                >
                  <h3 className={`flex items-end gap-1 text-4xl font-normal ${avantGarde.className}`}>
                    <GradientText color={item.color} className="min-w-0">
                      {item.company_name}
                    </GradientText>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 -translate-y-0.5 text-neutral-400 duration-300 group-hover:size-6 group-hover:-translate-y-2
                        group-hover:translate-x-1 group-hover:text-beige"
                    />
                  </h3>
                  <p className="text-2xl font-semibold text-neutral-200">{item.position}</p>
                  <p className="text-xl font-semibold text-neutral-400">{item.date}</p>
                </Link>
              </div>

              <div className="relative grid w-full min-w-0 gap-4 lg:pl-4 lg:pr-4">
                <Link
                  href={item.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mt-1 grid gap-1 lg:hidden"
                >
                  <h3 className={`flex items-end gap-1 text-[1.75rem] leading-tight ${avantGarde.className}`}>
                    <GradientText color={item.color} className="min-w-0">
                      {item.company_name}
                    </GradientText>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mb-1 size-5 shrink-0 text-neutral-400 transition-transform group-active:-translate-y-1
                        group-active:translate-x-1"
                    />
                  </h3>
                  <p className="text-lg font-semibold text-neutral-200">{item.position}</p>
                  <p className="text-base font-semibold text-neutral-400">{item.date}</p>
                </Link>
                <div>
                  <p className="mb-6">{item.description}</p>
                  <ul className="mb-8 space-y-2">
                    {item.bulletPoints?.map((point) => (
                      <li key={point} className="ml-5 list-disc">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <TagList tags={item.tags} className="mb-8 gap-2 sm:gap-3" />
                  <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
                    {item?.imageUrls?.map((url, i) => (
                      <Image
                        key={url}
                        src={url}
                        alt={`${item.company_name} screenshot ${i + 1}`}
                        width={500}
                        height={500}
                        sizes="(min-width: 1024px) 25vw, (min-width: 420px) 45vw, 90vw"
                        className="aspect-[4/3] w-full rounded-lg object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
          {inView && <TracingBeam containerRef={timeLineRef} />}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Timeline;
