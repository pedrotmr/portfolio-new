import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ProjectLinkProps {
  href: string;
  children: ReactNode;
}

export default function ProjectLink({ href, children }: ProjectLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-11 items-center gap-1 underline underline-offset-4 hover:text-beige"
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-5 duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:text-beige"
      />
    </Link>
  );
}
