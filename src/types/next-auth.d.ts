import NextAuth from 'next-auth';

export interface SessionProps {
  user: {
    name: string;
    email: string;
    image: string;
    accessToken: string;
    refreshToken: string;
    username: string;
  };
}

declare module 'next-auth' {
  interface Session {
    user: SessionProps['user'];
  }
}
