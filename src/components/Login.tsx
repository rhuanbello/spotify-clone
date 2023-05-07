'use client';

import { signIn } from 'next-auth/react';

export const Login = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        signIn('spotify', {
          callbackUrl: 'http://localhost:3000/callback/'
        });
      }}
      className="py-2 px-10 rounded-full bg-green-500 text-zinc-900 justify-self-center my-auto"
    >
      Login
    </button>
  );
};
