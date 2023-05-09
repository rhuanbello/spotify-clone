import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Explore } from '@/components/Explore';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { authError } from '@/utils/authError';
import { getServerSession } from 'next-auth';

export async function generateMetadata() {
  const session = await getServerSession(authOptions);

  return {
    title: session?.user?.name
  };
}

export default async function Home() {
  const session = await getServerSession();

  if (!session) authError();

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-1 gap-2">
        {/* @ts-expect-error Server Component */}
        <Sidebar />
        {/* @ts-expect-error Server Component */}
        <Explore />
      </section>

      <Footer />
    </div>
  );
}
