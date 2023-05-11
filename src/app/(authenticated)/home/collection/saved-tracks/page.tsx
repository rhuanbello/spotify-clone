import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSpotify } from '@/hooks/useSpotify';
import { Clock, Heart } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export const metadata = {
  title: {
    default: 'Músicas Curtidas'
  }
};

export default async function SavedTracks() {
  const session = await getServerSession(authOptions);
  const { user } = session;

  const { getSavedTracks } = useSpotify(session);

  const { savedTracks, total } = await getSavedTracks();

  return (
    <div>
      <div className="relative flex gap-6 items-center h-56 pl-5">
        <Image
          src="/icons/liked-songs.svg"
          alt="Músicas Curtidas"
          width={230}
          height={230}
          className="shadow-2xl rounded-md"
        />
        <div className="h-full flex flex-col justify-center">
          <div className="mt-auto">
            <strong>Playlist</strong>
            <h1 className="text-7xl font-bold text-white">Músicas Curtidas</h1>
          </div>

          <div className="flex gap-2 mt-auto text-sm items-center">
            <Image
              width={25}
              height={25}
              src={user.image}
              alt={user.name}
              className="rounded-full"
            />
            <strong>{user.name}</strong>
            <span>•</span>
            <span>{total} músicas</span>
          </div>
        </div>
      </div>

      <div className="mt-10 pl-5">
        <table className="w-full">
          <thead className="text-zinc-400 text-sm text-left border-b border-zinc-800 after:leading-none after:block after:content-['-'] after:invisible">
            <tr>
              <th className="pl-4 text-base">#</th>
              <th>Título</th>
              <th>Álbum</th>
              <th>Adicionada em</th>
              <th>
                <Clock size={20} className="ml-auto mr-8" />
              </th>
            </tr>
          </thead>

          <tbody className="before:leading-5 before:block before:content-['-'] before:invisible">
            {savedTracks.map(
              (
                { id, url, name, addedAt, albumName, artistName, duration },
                index
              ) => (
                <tr
                  key={id}
                  className="text-sm text-zinc-400 hover:bg-zinc-800"
                >
                  <td className="pl-4 text-base">{index + 1}</td>
                  <td className="flex items-center gap-3 p-2">
                    <Image src={url} alt={name} width={40} height={40} />

                    <div className="flex flex-col gap-1">
                      <strong className="text-base text-white font-medium whitespace-nowrap">
                        {name}
                      </strong>

                      <span>{artistName}</span>
                    </div>
                  </td>
                  <td>{albumName}</td>
                  <td>{addedAt}</td>
                  <td>
                    <div className="flex justify-around">
                      <Heart
                        size={20}
                        className="hover:fill-green-500 hover:text-green-500"
                      />
                      <span>{duration}</span>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
