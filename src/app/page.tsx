import { Login } from '@/components/Login';
import { getProviders } from 'next-auth/react';

export default async function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center p-4">
      <h1 className="text-2xl">Home Page</h1>

      <Login />
    </div>
  );
}
