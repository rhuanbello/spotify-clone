import { ReactNode } from 'react';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { getServerSession } from 'next-auth';

interface HomeLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: {
    default: 'Spotify',
    template: 'Spotify - %s'
  }
};

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <section className="flex flex-1 gap-2">
        {/* @ts-expect-error Server Component */}
        <Sidebar />

        <main className="flex-1 max-h-[90vh] overflow-y-auto pb-52 pr-5 scrollbar rounded-lg relative bg-box">
          <div className="bg-gradient-to-b to-box from-violet-950 h-80 w-full absolute top-0" />
          <Header user={session.user} />

          {children}
        </main>
      </section>
      <Footer />
    </div>
  );
}
