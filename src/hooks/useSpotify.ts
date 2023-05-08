import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export const useSpotify = (session) => {
  const getPlaylists = async () => {
    const response = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`
      }
    });

    return response.json();
  };

  return {
    getPlaylists
  };
};
