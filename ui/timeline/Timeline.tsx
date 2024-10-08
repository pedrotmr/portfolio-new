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
    <section className="bg-slate-900">
      <motion.div ref={containerRef} className="relative z-20 mx-auto grid w-full max-w-6xl text-beige">
        <MagneticWrapper>
          <p
            ref={textRef}
            className={`glitch ${thunderFont.className} mb-20 cursor-none whitespace-nowrap font-bold leading-none`}
            data-text="Professional Experience"
          >
            <span>Professional Experience</span>
            {inView && <TracingBeam containerRef={textRef} isHorizontal />}
          </p>
        </MagneticWrapper>

        <motion.div ref={timeLineRef} className="relative">
          {timelineData.map((item, index) => (
            <div key={index} className="mt-2 flex pb-28 md:gap-10">
              <div className="sticky top-40 z-30 flex w-full max-w-md flex-row items-center self-start">
                <div className="absolute left-0 flex size-8 items-center justify-center rounded-full bg-neutral-600">
                  <div className="size-4 rounded-full border bg-neutral-500" />
                </div>
                <Link
                  href={item.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-2 md:pl-20"
                >
                  <GradientText color={item.color} className="hidden text-4xl font-bold md:block">
                    <div className={`flex items-end gap-1 font-normal ${avantGarde.className}`}>
                      {item.company_name}
                      <ArrowUpRight
                        className="size-5 -translate-y-0.5 text-neutral-400 duration-300 group-hover:size-6 group-hover:-translate-y-2
                          group-hover:translate-x-1 group-hover:text-beige md:block"
                      />
                    </div>
                  </GradientText>
                  <h4 className="hidden text-2xl font-semibold text-neutral-200 md:block">{item.position}</h4>
                  <p className="hidden text-xl font-semibold text-neutral-400 md:block">{item.date}</p>
                </Link>
              </div>
              <div className="relative grid w-full gap-4 pl-20 pr-4 md:pl-4">
                <h3 className="text-xl md:hidden">{item.company_name}</h3>
                <h4 className="text-xl text-neutral-500 md:hidden">{item.position}</h4>
                <p className="text-xl text-neutral-500 md:hidden">{item.date}</p>
                <div>
                  <p className="mb-6">{item.description}</p>
                  <ul className="mb-8 space-y-2">
                    {item.bulletPoints?.map((item, i) => (
                      <li key={i} className="ml-5 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <TagList tags={item.tags} className="mb-8" />
                  <div className="grid grid-cols-2 gap-4">
                    {item?.imageUrls?.map((url, i) => (
                      <Image
                        key={i}
                        src={url}
                        alt={`${item.company_name} screenshot`}
                        width={500}
                        height={500}
                        className="aspect-[4/3] w-full rounded-lg object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {inView && <TracingBeam containerRef={timeLineRef} />}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Timeline;
