import { PlaylistProps } from '@/types/spotify';
import Image from 'next/image';
import Link from 'next/link';

export const Playlist = ({ name, url, owner }: PlaylistProps) => {
  return (
    <Link
      href=""
      className="text-sm text-zinc 400 hover:text-zinc-100 flex items-center gap-3 hover:bg-zinc-800 transition-colors px-6 py-2"
    >
      <Image src={url} width={48} height={48} alt={name} />
      <div className="flex flex-col gap-1">
        <strong className="text-base font-medium whitespace-nowrap">
          {name.length > 23 ? `${name.slice(0, 23)}...` : name}
        </strong>

        <span className="text-zinc-400">{owner}</span>
      </div>
    </Link>
  );
};
