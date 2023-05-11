'use client';

import clsx from 'clsx';
import { Disc, Heart, HomeIcon, Music, Search, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/home',
      icon: <HomeIcon size={25} />,
      label: 'Início'
    },
    {
      href: '/search',
      icon: <Search size={25} />,
      label: 'Buscar'
    },
    {
      href: '/home/collection/top-albums',
      icon: <Disc size={25} />,
      label: 'Álbuns mais Ouvidos'
    },
    {
      href: '/home/collection/top-artists',
      icon: <User size={25} />,
      label: 'Artistas mais Ouvidos'
    },
    {
      href: '/home/collection/top-tracks',
      icon: <Music size={25} />,
      label: 'Músicas mais Ouvidas'
    },
    {
      href: '/home/collection/saved-tracks',
      icon: <Heart size={25} />,
      label: 'Músicas Curtidas'
    }
  ];

  return (
    <nav className="space-y-5 bg-box p-6 rounded-lg">
      {navItems.map(({ href, icon, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            `flex items-center gap-5 font-bold hover:text-white`,
            {
              'text-white': pathname === href,
              'text-zinc-400': pathname !== href
            }
          )}
        >
          {icon}
          {label}
        </Link>
      ))}
    </nav>
  );
};
