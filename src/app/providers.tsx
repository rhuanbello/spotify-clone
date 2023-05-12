'use client';

import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const ReactQueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
