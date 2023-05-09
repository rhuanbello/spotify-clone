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
