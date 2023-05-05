import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'

import { ChevronRight, ChevronLeft, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Vamos falar sobre música?</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a href="#" className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Fred again..</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a href="#" className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Vamos falar sobre música?</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Vamos falar sobre música?</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a href="#" className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Vamos falar sobre música?</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a href="#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Vamos falar sobre música?</strong>
              <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Rhuan Bello</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Daily Mix 1</strong>
              <span className='text-xm text-zinc-500'>Wallows, girl in red</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Daily Mix 1</strong>
              <span className='text-xm text-zinc-500'>Wallows, girl in red</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Daily Mix 1</strong>
              <span className='text-xm text-zinc-500'>Wallows, girl in red</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Daily Mix 1</strong>
              <span className='text-xm text-zinc-500'>Wallows, girl in red</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Daily Mix 1</strong>
              <span className='text-xm text-zinc-500'>Wallows, girl in red</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Daily Mix 1</strong>
              <span className='text-xm text-zinc-500'>Wallows, girl in red</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Daily Mix 1</strong>
              <span className='text-xm text-zinc-500'>Wallows, girl in red</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" width={104} height={104} src="https://i.scdn.co/image/ab67656300005f1f79ae316412efb2d1674a433e" alt="playlist" />
              <strong>Daily Mix 1</strong>
              <span className='text-xm text-zinc-500'>Wallows, girl in red</span>
            </a>
          </div>
        </main>
      </section>

      <Footer />
    </div>
  )
}
