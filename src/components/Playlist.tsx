'use client';

export const Playlist = ({ name }: { name: string }) => {
  return (
    <a href="" className="text-sm text-zinc 400 hover:text-zinc-100">
      {name}
    </a>
  );
};
