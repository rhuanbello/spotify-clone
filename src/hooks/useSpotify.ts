import { SessionProps } from '@/types/next-auth.d';
import {
  PlaylistProps,
  RecentlyPlayedProps,
  TopAlbumsProps,
  TopArtistsProps
} from '@/types/spotify';
import { Playlist, RecentlyPlayed, Artist, Track } from 'spotify-types';

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

    const { items }: { items: Playlist[] } = await response.json();

    const playlists = items.map(
      ({ id, name, owner, images }): PlaylistProps => {
        const [image] = images;

        return {
          id,
          name,
          owner: owner.display_name,
          url: image.url
        };
      }
    );

    return playlists;
  };

  const getRecentlyPlayed = async () => {
    const response = await fetch(
      spotifyApi + '/me/player/recently-played?limit=50',
      { headers }
    );

    const data: RecentlyPlayed = await response.json();

    const lastPlayedArtists = data.items.reduce<RecentlyPlayedProps[]>(
      (acc, { track }) => {
        const [artist] = track.artists;
        const [image] = track.album.images;

        const hasArtist = acc.findIndex((x) => x.id === artist.id) !== -1;

        if (!hasArtist) {
          acc.push({
            id: artist.id,
            name: artist.name,
            url: image.url
          });
        }

        return acc;
      },
      []
    );

    return lastPlayedArtists.slice(0, 6);
  };

  const getTopArtists = async () => {
    const response = await fetch(
      spotifyApi + '/me/top/artists?time_range=medium_term&limit=8',
      { headers }
    );

    const { items }: { items: Artist[] } = await response.json();

    const topArtists = items.map(({ id, name, images }): TopArtistsProps => {
      const [image] = images;

      return {
        id,
        name,
        url: image.url
      };
    });

    return topArtists;
  };

  const getTopAlbums = async () => {
    const response = await fetch(
      spotifyApi + '/me/top/tracks?time_range=medium_term&limit=50',
      { headers }
    );

    const { items }: { items: Track[] } = await response.json();

    const topAlbums = items.reduce<TopAlbumsProps[]>(
      (acc, { album, artists }) => {
        const [artist] = artists;
        const [image] = album.images;

        const hasAlbum = acc.findIndex((x) => x.id === album.id);

        if (hasAlbum === -1) {
          acc.push({
            id: album.id,
            name: album.name,
            url: image.url,
            artistName: artist.name
          });
        }

        return acc;
      },
      []
    );

    return topAlbums.slice(0, 8);
  };

  return {
    getPlaylists,
    getRecentlyPlayed,
    getTopArtists,
    getTopAlbums
  };
};
