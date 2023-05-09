import { LoginButton, ContinueButton } from '@/components/LoginActions';
import { getServerSession } from 'next-auth';

import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full h-screen flex flex-col items-center p-4">
      {session ? (
        <ContinueButton username={session.user?.name} />
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
