'use client';
import { callbackUrl } from '@/lib/spotify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const LoginButton = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        signIn('spotify', {
          callbackUrl
        });
      }}
      className="py-2 px-10 rounded-full bg-green-500 text-zinc-900 justify-self-center my-auto"
    >
      Login com Spotify
    </button>
  );
};

export const ContinueButton = ({ username }: { username: string }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/home');
      }}
      className="py-2 px-10 rounded-full bg-zinc-200 text-zinc-900 justify-self-center my-auto"
    >
      Continuar como {username}
    </button>
  );
};
