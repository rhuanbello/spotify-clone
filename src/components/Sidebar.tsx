import { Home as HomeIcon, Search, Library } from 'lucide-react'

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className='space-y-5'>
        <a href="" className="flex items-center gap-4 text-sm font-semibold text-zinc-200">
          <HomeIcon />
          Home
        </a>
        <a href="" className="flex items-center gap-4 text-sm font-semibold text-zinc-200">
          <Search />
          Search
        </a>
        <a href="" className="flex items-center gap-4 text-sm font-semibold text-zinc-200">
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-zinc-700 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc 400 hover:text-zinc-100">New Albums Playlist</a>
        <a href="" className="text-sm text-zinc 400 hover:text-zinc-100">Blueszeira</a>
        <a href="" className="text-sm text-zinc 400 hover:text-zinc-100">Disco</a>
        <a href="" className="text-sm text-zinc 400 hover:text-zinc-100">Radiohead</a>
        <a href="" className="text-sm text-zinc 400 hover:text-zinc-100">Tame Impala</a>
        <a href="" className="text-sm text-zinc 400 hover:text-zinc-100">New Wave</a>
        <a href="" className="text-sm text-zinc 400 hover:text-zinc-100">Roadtrip Songs</a>
        <a href="" className="text-sm text-zinc 400 hover:text-zinc-100">The Beatles</a>
      </nav>
    </aside>
  )
}