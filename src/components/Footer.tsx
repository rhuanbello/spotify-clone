import { Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'


export const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image width={56} height={56} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
        <div className="flex flex-col">
          <strong className="font-normal">Rope</strong>
          <span className='text-xs text-zinc-400'>Fred</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full" />
          </div>
          <span className="text-xs text-zinc-500">2:14</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-18 h-1 rounded-full" />
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}