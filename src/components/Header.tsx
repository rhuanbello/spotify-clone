'use client';
import * as React from 'react';

import { SessionProps } from '@/types/next-auth';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = ({ user }: { user: SessionProps['user'] }) => {
  return (
    <header className="z-20 sticky top-0 flex items-center justify-between bg-transparent hover:bg-violet-950/40 transition-colors">
      <div className={clsx(`flex items-center gap-4 bg-transparent p-5`)}>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="flex items-center gap-2 bg-black/40 rounded-xl pr-3">
            <Image
              width={25}
              height={25}
              src={user.image}
              alt={user.name}
              className="rounded-full"
            />
            <span className="text-sm text-zinc-200 font-medium">
              {user.name}
            </span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            sideOffset={5}
            align="end"
            className="bg-zinc-950 w-56 rounded-lg py-3 flex flex-col gap-2 items-start text-sm z-30 shadow-sm"
          >
            <Link
              href="https://github.com/rhuanbello"
              target="_blank"
              className="px-3 py-1 w-full text-start hover:bg-zinc-800 cursor-pointer font-medium"
            >
              Made with 💜 by @rhuanbello
            </Link>
            <button
              className="px-3 py-1 w-full text-start hover:bg-zinc-800 cursor-pointer font-medium"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Sair
            </button>
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </header>
  );
};
