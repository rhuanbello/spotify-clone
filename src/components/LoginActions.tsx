'use client';

import { signIn } from 'next-auth/react';

export const LoginButton = ({ callbackUrl }: { callbackUrl: string }) => {
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

export const ContinueButton = ({
  callbackUrl,
  username
}: {
  callbackUrl: string;
  username: string;
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        signIn('spotify', {
          callbackUrl
        });
      }}
      className="py-2 px-10 rounded-full bg-zinc-200 text-zinc-900 justify-self-center my-auto"
    >
      Continuar como {username}
    </button>
  );
};
