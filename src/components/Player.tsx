'use client';

import { useSpotifyOnClient } from '@/hooks/useSpotify';
import { SessionProps } from '@/types/next-auth';
import { useQuery } from '@tanstack/react-query';
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
import Image from 'next/image';

import { PlayerBar } from './PlayerBar';

export const Player = ({ session }: { session: SessionProps }) => {
  const { getPlayer } = useSpotifyOnClient(session!);

  const {
    data: player = {
      item: {
        url: '',
        name: '',
        artistName: '',
        albumName: '',
        duration: 0,
        progress: 0,
        id: '',
        previewUrl: ''
      },
      progressMs: 0,
      volumePercent: 0,
      shuffleState: 'off',
      repeatState: 'off',
      isPlaying: false
    },
    refetch,
    isLoading,
    isError
  } = useQuery(['player'], getPlayer);

  if (isLoading || isError) return <></>;

  return (
    <footer className="bg-black p-5 grid grid-cols-3 gap-3 justify-between">
      <div className="flex items-center gap-3">
        {player.item.url && (
          <Image
            width={56}
            height={56}
            src={player.item.url}
            alt={player.item.name || 'Cover'}
          />
        )}
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
              'text-green-500': player.shuffleState === 'on',
              'text-zinc-300': player.shuffleState !== 'on',
              'text-zinc-500': !player.isPlaying
            })}
          />

          <SkipBack
            size={18}
            className={clsx(`hover:brightness-125`, {
              'fill-zinc-300 text-zinc-300': player.isPlaying,
              'fill-zinc-500 text-zinc-500': !player.isPlaying
            })}
          />

          <button
            className={clsx(
              `w-8 h-8 flex items-center justify-center rounded-full  text-black hover:scale-110 transition-transform cursor-default`,
              {
                'bg-zinc-500': !player.isPlaying,
                'bg-white': player.isPlaying
              }
            )}
          >
            {player.isPlaying ? (
              <PauseIcon className="fill-black" size={18} />
            ) : (
              <Play className="fill-black pl-0.5" size={18} />
            )}
          </button>

          <SkipForward
            size={20}
            className={clsx(`hover:brightness-125`, {
              'fill-zinc-300 text-zinc-300': player.isPlaying,
              'fill-zinc-500 text-zinc-500': !player.isPlaying
            })}
          />

          <Repeat
            size={18}
            className={clsx('hover:brightness-125', {
              'text-green-500': player.repeatState !== 'off',
              'text-zinc-300': player.repeatState === 'off',
              'text-zinc-500': !player.isPlaying
            })}
          />
        </div>

        <PlayerBar player={player} refetch={refetch} />
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
