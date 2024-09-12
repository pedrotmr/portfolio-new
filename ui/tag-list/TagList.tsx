import { cn } from '@/utils';

const TagList = ({ tags, className }: { tags: string[]; className?: string }) => {
  return (
    <ul className={cn('flex flex-wrap gap-3', className)}>
      {tags.map((tag, i) => (
        <li
          key={i}
          className="flex items-center rounded-full bg-slate-400/10 px-3 py-1.5 text-sm font-medium leading-5 text-slate-300"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
