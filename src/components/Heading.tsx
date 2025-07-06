import type { HeadingProps } from './interface';

export default function Heading({ title, type, className }: HeadingProps) {
  return (
    <div className={`flex items-center justify-between ${className ?? ''}`}>
      {type === 'sub' ? (
        <h2 className="text-sm text-blue-800 font-medium dark:text-blue-400">
          {title}
        </h2>
      ) : type === 'article' ? (
        <h2 className="text-sm text-purple-800 font-medium dark:text-purple-400">
          {title}
        </h2>
      ) : (
        <h1 className="text-2xl font-semibold">{title}</h1>
      )}
    </div>
  );
}
