import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSpotify } from '@/hooks/useSpotify';
import { Home as HomeIcon, Search, Library } from 'lucide-react';
import { getServerSession } from 'next-auth';

import { Playlist } from './Playlist';

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  const { getPlaylists } = useSpotify(session);

  const playlists = await getPlaylists();

  return (
    <aside className="w-80 pl-2 flex flex-col gap-2 max-h-[90vh]">
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

      <nav className="flex flex-col bg-box py-6 rounded-lg overflow-y-auto scrollbar">
        {playlists.map((playlist) => (
          <Playlist key={playlist.id} {...playlist} />
        ))}
      </nav>
    </aside>
  );
};
