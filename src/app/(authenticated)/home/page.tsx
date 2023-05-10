import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Explore } from '@/components/Explore';
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
    <>
      {/* @ts-expect-error Server Component */}
      <Explore />
    </>
  );
}
