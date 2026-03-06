import { type ReactNode } from "react";

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[280px] rounded-[2.5rem] border-4 border-zinc-800 bg-zinc-900 p-2 shadow-xl dark:border-zinc-700 ${className}`}
    >
      <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-zinc-900 dark:bg-zinc-800" />
      <div className="overflow-hidden rounded-[1.5rem] bg-background">
        {children ?? (
          <div className="flex aspect-[9/19] items-center justify-center text-sm text-zinc-500">
            App preview
          </div>
        )}
      </div>
    </div>
  );
}
