// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { Account, User } from 'next-auth';

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

export type AccountProps = Account;
export type UserProps = User;
export interface CallbackJWTProps {
  token: TokenProps;
  account: AccountProps;
  user: UserProps;
}

export interface CallbackSessionProps {
  session: SessionProps;
  token: TokenProps;
}

export interface TokenProps {
  name: string;
  email: string;
  picture: string;
  sub: string;
  accessToken: string;
  refreshToken: string;
  username: string;
  accessTokenExpires: number;
  iat: number;
  exp: number;
  jti: string;
}

declare module 'next-auth' {
  interface Session {
    user: SessionProps['user'];
  }
}
