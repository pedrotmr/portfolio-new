import { cn } from '@/utils';
import { tv } from 'tailwind-variants';

const variants = tv({
  base: 'bg-gradient-to-r text-transparent bg-clip-text',
  variants: {
    color: {
      purple: 'from-purple-500 to-purple-200',
      orange: 'from-orangeLight to-orange-200',
      yellow: 'from-yellow-500 to-yellow-200',
      sky: 'from-sky-500 to-sky-200',
      green: 'from-green-500 to-green-200',
      lightGreen: 'from-[#e5fa95] to-[#f3ffcc]',
      pink: 'from-pink-500 to-pink-200',
      silver: 'bg-gradient-to-b from-neutral-800 via-white to-white ',
    },
  },
  defaultVariants: {
    color: 'purple',
  },
});

const colorToGradient = {
  purple: 'linear-gradient(to right, #a855f7, #e0aaff, #38029B00)',
  orange: 'linear-gradient(to right, #f97316, #ffedd5, #38029B00)',
  yellow: 'linear-gradient(to right, #eab308, #fef3c7, #38029B00)',
  sky: 'linear-gradient(to right, #0ea5e9, #e0f2fe, #38029B00)',
  green: 'linear-gradient(to right, #22c55e, #dcfce7, #38029B00)',
  lightGreen: 'linear-gradient(to right, #e5fa95, #f3ffcc, #38029B00)',
  pink: 'linear-gradient(to right, #ec4899, #fda4af, #38029B00)',
  silver: 'linear-gradient(to right, #38029B00, #38029B00, #38029B00)',
};

const GradientText = ({
  children,
  color,
  className,
  underline = false,
  glow = false,
}: {
  children: React.ReactNode;
  color: 'purple' | 'orange' | 'yellow' | 'sky' | 'green' | 'lightGreen' | 'pink' | 'silver';
  className?: string;
  underline?: boolean;
  glow?: boolean;
}) => {
  const gradient = colorToGradient[color];

  const style = {
    borderBottom: underline ? '1px solid transparent' : 'none',
    borderImage: gradient,
    borderImageSlice: 1,
    ...(color === 'silver' && glow && { textShadow: '0 0 1.5px #FFF' }),
  };

  return (
    <>
      {' '}
      <span style={style} className={cn(variants({ color }), className)}>
        {children}
      </span>
    </>
  );
};

export default GradientText;
