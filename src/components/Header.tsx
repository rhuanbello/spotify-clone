'use client';

import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Header = () => {
  return (
    <div
      className={clsx(
        `flex items-center gap-4 bg-transparent p-5 sticky top-0 z-20`
      )}
    >
      <button className="rounded-full bg-black/40 p-1">
        <ChevronLeft />
      </button>
      <button className="rounded-full bg-black/40 p-1">
        <ChevronRight />
      </button>
    </div>
  );
};
