import { SessionProps } from '@/types/next-auth.d';

import { spotifyApi } from './../lib/spotify';

export const useSpotify = (session: SessionProps) => {
  const headers = {
    Authorization: `Bearer ${session?.user.accessToken}`
  };

  const getPlaylists = async () => {
    const response = await fetch(spotifyApi + '/me/playlists', {
      headers,
      next: {
        revalidate: 30
      }
    });

    const data = await response.json();

    const playlists = data.items.map(({ id, name, owner, images }) => {
      const [image] = images;

      return {
        id,
        name,
        owner: owner.display_name,
        url: image.url
      };
    });

    return playlists;
  };

  const getRecentlyPlayed = async () => {
    const response = await fetch(
      spotifyApi + '/me/player/recently-played?limit=50',
      { headers }
    );

    const data = await response.json();

    const lastPlayedArtists = data.items.reduce((acc, { track }) => {
      const [artist] = track.artists;
      const [image] = track.album.images;

      const hasArtist = acc.findIndex((x) => x.id === artist.id);

      if (hasArtist === -1) {
        acc.push({
          ...artist,
          ...image
        });
      }

      return acc;
    }, []);

    return lastPlayedArtists.slice(0, 6);
  };

  const getTopArtists = async () => {
    const response = await fetch(
      spotifyApi + '/me/top/artists?time_range=medium_term&limit=8',
      { headers }
    );

    const data = await response.json();

    const topArtists = data.items.map(({ id, name, images }) => {
      const [image] = images;

      return {
        id,
        name,
        ...image
      };
    });

    return topArtists;
  };

  const getTopAlbums = async () => {
    const response = await fetch(
      spotifyApi + '/me/top/tracks?time_range=medium_term&limit=50',
      { headers }
    );

    const data = await response.json();

    console.log(data);

    const topAlbums = data.items.reduce((acc, { album, artists }) => {
      const [artist] = artists;
      const [image] = album.images;

      console.log(artist);

      console.log(album);
      const hasAlbum = acc.findIndex((x) => x.id === album.id);

      console.log(hasAlbum, album);

      if (hasAlbum === -1) {
        acc.push({
          ...image,
          id: album.id,
          name: album.name,
          url: image.url,
          artistName: artist.name
        });
      }

      return acc;
    }, []);

    console.log(topAlbums);

    return topAlbums.slice(0, 8);
  };

  return {
    getPlaylists,
    getRecentlyPlayed,
    getTopArtists,
    getTopAlbums
  };
};
