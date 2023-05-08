import { LoginButton, ContinueButton } from '@/components/LoginActions';
import { getServerSession } from 'next-auth';

const callbackUrl = process.env.SPOTIFY_REDIRECT_URI!;

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="w-full h-screen flex flex-col items-center p-4">
      {session ? (
        <ContinueButton
          username={session?.user?.name!}
          callbackUrl={callbackUrl}
        />
      ) : (
        <LoginButton callbackUrl={callbackUrl} />
      )}
    </div>
  );
}
