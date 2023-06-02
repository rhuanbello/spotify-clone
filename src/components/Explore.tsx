import { useSpotify } from '@/hooks/useSpotify';
import { getServerSession } from '@/lib/next-auth';
import { Play } from 'lucide-react';
import Image from 'next/image';

export const Explore = async () => {
  const session = await getServerSession();

  const { getRecentlyPlayed, getTopArtists, getTopAlbums } =
    useSpotify(session);

  const [recentlyPlayedArtists, topArtists, topAlbums] = await Promise.all([
    getRecentlyPlayed(),
    getTopArtists(),
    getTopAlbums()
  ]);

  return (
    <div className="pt-0 pl-5 z-10 relative">
      <h1 className="text-3xl font-bold">Boa noite</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {recentlyPlayedArtists.map(({ id, name, url }) => (
          <a
            key={id}
            href="#"
            className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group"
          >
            <Image width={80} height={80} src={url} alt="playlist" />
            <strong>{name}</strong>
            <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </a>
        ))}
      </div>

      <h2 className="font-bold text-2xl mt-10">Seus artistas favoritos</h2>

      <div className="grid grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 mt-4">
        {topArtists.map(({ id, name, url }) => (
          <a
            key={id}
            href=""
            className="bg-white/5 px-4 pt-4 pb-8 rounded-md flex flex-col gap-3 hover:bg-white/10"
          >
            <Image
              width={500}
              height={500}
              src={url}
              alt="playlist"
              className="w-full rounded-full"
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <strong className="text-base">{name}</strong>
              <span className="text-sm text-zinc-400">Artista</span>
            </div>
          </a>
        ))}
      </div>

      <h2 className="font-bold text-2xl mt-10">Seus álbuns favoritos</h2>

      <div className="grid grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 mt-4">
        {topAlbums.map(({ id, name, url, artistName }) => (
          <a
            key={id}
            href=""
            className="bg-white/5 px-4 pt-4 pb-8 rounded-md flex flex-col gap-3 hover:bg-white/10"
          >
            <Image
              width={500}
              height={500}
              src={url}
              alt="playlist"
              className="w-full"
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <strong className="text-base text-ellipsis whitespace-nowrap overflow-hidden">
                {name}
              </strong>
              <span className="text-sm text-zinc-400">{artistName}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
