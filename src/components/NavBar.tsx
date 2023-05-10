'use client';

import clsx from 'clsx';
import { HomeIcon, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="space-y-5 bg-box p-6 rounded-lg">
      <Link
        href="/home"
        className={clsx(
          `flex items-center gap-5 font-bold text-zinc-400 hover:text-white`,
          {
            'text-white': pathname === '/home'
          }
        )}
      >
        <HomeIcon size={25} />
        Início
      </Link>
      <Link
        href="/home"
        className="flex items-center gap-5 font-bold text-zinc-400 hover:text-zinc-200"
      >
        <Search size={25} />
        Buscar
      </Link>
      <Link
        href="/home/collection/saved-tracks"
        className={clsx(
          `flex items-center gap-5 font-bold text-zinc-400 hover:text-white`,
          {
            'text-white': pathname === '/home/collection/saved-tracks'
          }
        )}
      >
        <Image
          src="/icons/liked-songs.svg"
          width={25}
          height={25}
          alt="Músicas curtidas"
        />
        Músicas Curtidas
      </Link>
    </nav>
  );
};
