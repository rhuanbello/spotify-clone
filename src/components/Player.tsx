import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSpotify } from '@/hooks/useSpotify';
import clsx from 'clsx';
import {
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Maximize2,
  Volume1,
  PauseIcon
} from 'lucide-react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

import { PlayerBar } from './PlayerBar';

export const Player = async () => {
  const session = await getServerSession(authOptions);

  const { getPlayer } = useSpotify(session);

  const player = await getPlayer();

  return (
    <footer className="bg-black p-5 grid grid-cols-3 gap-2 justify-between">
      <div className="flex items-center gap-3">
        <Image
          width={56}
          height={56}
          src={player.item.url}
          alt={player.item.name || 'Cover'}
        />
        <div className="flex flex-col">
          <strong className="font-normal">{player.item.name}</strong>
          <span className="text-xs text-zinc-400">
            {player.item.artistName}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex items-center gap-4 w-full justify-center">
          <Shuffle
            size={18}
            className={clsx('hover:brightness-125', {
              'text-green-500': player.shuffleState,
              'text-zinc-300': !player.shuffleState
            })}
          />

          <SkipBack
            size={18}
            className={'fill-zinc-300 hover:brightness-125'}
          />

          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform cursor-default">
            {player.isPlaying ? (
              <PauseIcon className="fill-black" size={18} />
            ) : (
              <Play className="fill-black pl-0.5" size={18} />
            )}
          </button>

          <SkipForward
            size={20}
            className={'fill-zinc-300 hover:brightness-125'}
          />

          <Repeat
            size={18}
            className={clsx('hover:brightness-125', {
              'text-green-500': player.repeatState !== 'off',
              'text-zinc-300': player.repeatState === 'off'
            })}
          />
        </div>

        <PlayerBar player={player} />
      </div>

      <div className="flex items-center gap-4 w-full justify-end">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume1 size={20} />

          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-12 h-1 rounded-full" />
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
};
