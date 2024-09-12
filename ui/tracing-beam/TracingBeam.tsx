// import { motion, useScroll, useTransform } from 'framer-motion';
// import { RefObject, useEffect, useState } from 'react';

// interface TracingBeamProps {
//   containerRef: RefObject<HTMLElement>;
//   isHorizontal?: boolean;
// }

// const TracingBeam = ({ containerRef, isHorizontal = false }: TracingBeamProps) => {
//   const [size, setSize] = useState(0);

//   const { scrollYProgress, scrollXProgress } = useScroll({
//     target: containerRef,
//     offset: isHorizontal ? ['start 0.8', 'start 0.1'] : ['start center', 'end center'],
//   });

//   useEffect(() => {
//     if (containerRef.current) {
//       const { height, width } = containerRef.current.getBoundingClientRect();
//       setSize(isHorizontal ? width : height);
//     }
//   }, [containerRef, isHorizontal]);

//   const widthTransform = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
//   const lengthTransform = useTransform(scrollYProgress, [0, 1], [0, size]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0], [1, 1]);

//   return (
//     <>
//       <span
//         style={isHorizontal ? { width: size } : { height: size }}
//         className={`
//           absolute
//           ${isHorizontal ? '-bottom-2 right-0 h-[2px]' : 'left-0 top-0 w-[2px]'}
//           overflow-hidden bg-[linear-gradient(to_${isHorizontal ? `right` : `bottom`},var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_${
//             isHorizontal ? `right` : `bottom`
//           },transparent_0%,black_10%,black_90%,transparent_100%)]
//         `}
//       >
//         <motion.span
//           style={
//             isHorizontal
//               ? { width: widthTransform, opacity: opacityTransform }
//               : { height: lengthTransform, opacity: opacityTransform }
//           }
//           className={`
//             absolute
//             ${isHorizontal ? 'inset-y-0 right-0 h-[2px]' : `inset-x-0 top-0 w-[2px]`}
//             rounded-full bg-gradient-to-${isHorizontal ? `r` : `t`}
//             from-pink-500 from-[0%] via-blue-500 via-[10%] to-transparent to-[99%]
//             [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
//           `}
//         />
//       </span>
//     </>
//   );
// };

// export default TracingBeam;

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { RefObject, useEffect, useState } from 'react';

// const TracingBeam = ({ containerRef }: { containerRef: RefObject<HTMLElement> }) => {
//   const [height, setHeight] = useState(0);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start center', 'end center'],
//   });

//   useEffect(() => {
//     if (containerRef.current) {
//       const { height } = containerRef.current.getBoundingClientRect();
//       setHeight(height);
//     }
//   }, [containerRef]);

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div
//       style={{ height }}
//       className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
//     >
//       <motion.div
//         style={{ height: heightTransform, opacity: opacityTransform }}
//         className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
//       />
//     </div>
//   );
// };

// export default TracingBeam;

import { motion, useScroll, useTransform } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';

interface TracingBeamProps {
  containerRef: RefObject<HTMLElement>;
  isHorizontal?: boolean;
}

const TracingBeam = ({ containerRef, isHorizontal = false }: TracingBeamProps) => {
  const [size, setSize] = useState(0);

  const { scrollYProgress, scrollXProgress } = useScroll({
    target: containerRef,
    offset: isHorizontal ? ['start 0.8', 'start 0.1'] : ['start center', 'end center'],
  });

  useEffect(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      setSize(isHorizontal ? '100%' : height);
    }
  }, [containerRef, isHorizontal]);

  const widthTransform = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const lengthTransform = useTransform(scrollYProgress, [0, 1], [0, size]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0], [1, 1]);

  return (
    <>
      <span
        style={isHorizontal ? { width: '100%' } : { height: size }}
        className={`absolute ${isHorizontal ? '-bottom-2 right-0 h-[2px]' : 'left-5 top-0 w-[2px]'} overflow-hidden
          bg-[linear-gradient(to_${isHorizontal ? 'right' : 'bottom'},var(--tw-gradient-stops))]
          from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]
          [mask-image:linear-gradient(to_${isHorizontal ? 'right' : 'bottom'},transparent_0%,black_10%,black_90%,transparent_100%)] `}
      >
        <motion.span
          style={
            isHorizontal
              ? { width: widthTransform, opacity: opacityTransform }
              : { height: lengthTransform, opacity: opacityTransform }
          }
          className={`absolute ${isHorizontal ? 'inset-y-0 right-0 h-[2px]' : 'inset-x-0 top-0 w-[2px]'} rounded-full
            bg-gradient-to-${isHorizontal ? 'r' : 't'} from-pink-500 from-[0%] via-blue-500 via-[10%]
            to-transparent to-[99%]
            [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]`}
        />
      </span>
    </>
  );
};

export default TracingBeam;
