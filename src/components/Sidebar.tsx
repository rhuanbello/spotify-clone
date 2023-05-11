import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSpotify } from '@/hooks/useSpotify';
import { getServerSession } from 'next-auth';

import { NavBar } from './NavBar';
import { Playlist } from './Playlist';

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  const { getPlaylists } = useSpotify(session);

  const playlists = await getPlaylists();

  return (
    <aside className="w-80 pl-2 flex flex-col gap-2 max-h-[calc(100vh-96px)]">
      <NavBar />

      <nav className="flex flex-col bg-box py-6 rounded-lg overflow-y-auto scrollbar">
        {playlists.map((playlist) => (
          <Playlist key={playlist.id} {...playlist} />
        ))}
      </nav>
    </aside>
  );
};
