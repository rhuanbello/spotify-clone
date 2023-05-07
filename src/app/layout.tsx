'use client';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-400">
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
