import { GradientText } from '@/ui';
import { ReactNode } from 'react';

type Statement = (lineBreak: ReactNode) => ReactNode;

export const statements: Statement[] = [
  (br) => (
    <>
      I'm a<GradientText color="purple">software developer</GradientText> {br}
      from Brazil with solid
      {br}
      <GradientText color="orange">design skills.</GradientText>
    </>
  ),
  (br) => (
    <>
      I blend UI/UX with the
      {br}
      <GradientText color="purple">technical skills</GradientText> of a {br}
      <GradientText color="orange">software engineer.</GradientText>
    </>
  ),
  (br) => (
    <>
      Creating solutions that {br}
      are <GradientText color="purple">clean, polished</GradientText> and {br}
      <GradientText color="orange">robust under the hood.</GradientText>
    </>
  ),
];

export const portrait = {
  src: '/images/pedro.webp',
  alt: 'Portrait of Pedro Ramos in an office',
  width: 1024,
  height: 1365,
};
