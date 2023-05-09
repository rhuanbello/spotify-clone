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
    <aside className="w-80 pl-2 flex flex-col gap-2">
      <nav className="space-y-5 bg-box p-6 rounded-lg">
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

      <nav className="flex flex-col gap-3 bg-box p-6 rounded-lg max-h-[calc(90vh-168px)] overflow-y-auto scrollbar">
        <>
          {items.map((playlist) => (
            <Playlist key={playlist.id} {...playlist} />
          ))}
          {items.map((playlist) => (
            <Playlist key={playlist.id} {...playlist} />
          ))}
        </>
      </nav>
    </aside>
  );
};
