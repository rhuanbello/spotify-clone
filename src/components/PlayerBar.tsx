'use client';

import { useEffect, useState } from 'react';

import { PlayerProps } from '@/types/spotify';
import { msToTime } from '@/utils/msToTime';
import * as Progress from '@radix-ui/react-progress';

export const PlayerBar = ({ player }: { player: PlayerProps }) => {
  const [progressMs, setProgressMs] = useState(player.progressMs);
  const [durationMs, setDurationMs] = useState(
    player.item.duration - player.progressMs!
  );
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progressMs! >= player.item.duration) {
        clearTimeout(timer);

        setProgressMs(null);
        setDurationMs(player.item.duration);
        setProgressBar(0);
        return;
      }

      if (progressMs && progressMs < player.item.duration) {
        setProgressMs(progressMs! + 1000);
        setDurationMs(durationMs - 1000);
        setProgressBar(Math.floor((progressMs! / player.item.duration) * 100));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [progressMs, durationMs, progressBar, player.item.duration]);

  return (
    <div className="flex items-center gap-2 mt-2 w-full">
      <span className="text-xs text-zinc-400">{msToTime(progressMs)}</span>

      <Progress.Root
        className="h-1 rounded-full w-full  bg-zinc-200 relative overflow-hidden"
        value={progressBar}
      >
        <Progress.Indicator
          className={`bg-zinc-600 h-1 rounded-full w-full transition-transform`}
          style={{ transform: `translateX(${progressBar}%)` }}
        />
      </Progress.Root>

      <span className="text-xs text-zinc-400">-{msToTime(durationMs)}</span>
    </div>
  );
};
