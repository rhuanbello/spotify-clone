'use client';

import { useEffect, useState } from 'react';

import { PlayerProps } from '@/types/spotify';
import { msToTime } from '@/utils/msToTime';
import * as Progress from '@radix-ui/react-progress';

export const PlayerBar = ({
  player,
  refetch
}: {
  player: PlayerProps;
  refetch: () => void;
}) => {
  const [playerSettings, setPlayerSettings] = useState({
    progressMs: player.progressMs,
    durationMs: player.item.duration - player.progressMs!,
    progressBar: Math.floor(
      ((player.progressMs! + 1000) / player.item.duration) * 100
    )
  });

  useEffect(() => {
    if (player.isPlaying) {
      setPlayerSettings({
        progressMs: player.progressMs,
        durationMs: player.item.duration - player.progressMs!,
        progressBar: Math.floor(
          ((player.progressMs! + 1000) / player.item.duration) * 100
        )
      });
    }
  }, [player]);

  useEffect(() => {
    if (player.isPlaying) {
      const timer = setTimeout(() => {
        if (playerSettings.progressMs! + 1000 >= player.item.duration) {
          clearTimeout(timer);

          setPlayerSettings({
            progressMs: null,
            durationMs: player.item.duration,
            progressBar: 0
          });

          return refetch();
        }

        setPlayerSettings(({ durationMs, progressMs }) => ({
          progressMs: progressMs! + 1000,
          durationMs: durationMs! - 1000,
          progressBar: Math.floor(
            ((progressMs! + 1000) / player.item.duration) * 100
          )
        }));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [playerSettings, player, refetch]);

  return (
    <div className="flex items-center gap-2 mt-2 w-[110%]">
      <span className="text-xs text-zinc-400">
        {player.isPlaying ? msToTime(playerSettings.progressMs) : '-:--'}
      </span>

      <Progress.Root
        className="h-1 rounded-full w-[90%] bg-zinc-200 relative overflow-hidden"
        value={playerSettings.progressBar}
      >
        <Progress.Indicator
          className={`bg-zinc-600 h-1 rounded-full w-full transition-transform`}
          style={{ transform: `translateX(${playerSettings.progressBar}%)` }}
        />
      </Progress.Root>

      <span className="text-xs text-zinc-400">
        {player.isPlaying ? `-${msToTime(playerSettings.durationMs)}` : '-:--'}
      </span>
    </div>
  );
};
