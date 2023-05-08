import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSpotify } from '@/hooks/useSpotify';
import { Home as HomeIcon, Search, Library } from 'lucide-react';
import { getServerSession } from 'next-auth';

import { Playlist } from './Playlist';

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  const { getPlaylists } = useSpotify(session);

  const { items } = await getPlaylists();

  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className="space-y-5">
        <a
          href=""
          className="flex items-center gap-4 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-4 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-4 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-zinc-700 flex flex-col gap-3">
        {items.map((playlist) => (
          <Playlist key={playlist.id} {...playlist} />
        ))}
      </nav>
    </aside>
  );
};
