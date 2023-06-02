import { Explore } from '@/components/Explore';
import { getServerSession } from '@/lib/next-auth';
import { authError } from '@/utils/authError';

export async function generateMetadata() {
  const session = await getServerSession();

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
