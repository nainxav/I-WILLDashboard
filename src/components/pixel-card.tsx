import clsx from "clsx";

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function PixelCard({ children, className, title }: PixelCardProps) {
  return (
    <div
      className={clsx(
        "bg-white dark:bg-zinc-900 border-4 border-black dark:border-white shadow-pixel",
        className
      )}
    >
      {title && (
        <div className="bg-black dark:bg-white text-white dark:text-black p-2 font-pixel text-xs md:text-sm uppercase tracking-widest text-center mb-4">
          {title}
        </div>
      )}
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}
