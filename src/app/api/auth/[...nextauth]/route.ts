import { LOGIN_URL, spotifyApi } from '@/lib/spotify';
import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.access_token);
    spotifyApi.setRefreshToken(token.refresh_token);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken
    };
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAcessTokenError'
    };
  }
}

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
      authorization: LOGIN_URL
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: 'http://localhost:3000/'
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at && account.expires_at * 1000
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user.acessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
