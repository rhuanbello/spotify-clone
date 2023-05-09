import {
  Album,
  Artist,
  Image,
  Playlist,
  PublicUser,
  AccessToken
} from 'spotify-types';

export type SpotifyToken = AccessToken & {
  refresh_token: string;
};

export type PlaylistProps = Pick<Playlist, 'id' | 'name'> &
  Pick<Image, 'url'> & {
    owner: PublicUser['display_name'];
  };

export type RecentlyPlayedProps = Pick<Artist, 'id' | 'name'> &
  Pick<Image, 'url'>;

export type TopArtistsProps = Pick<Artist, 'id' | 'name'> & Pick<Image, 'url'>;

export type TopAlbumsProps = Pick<Album, 'id' | 'name'> &
  Pick<Image, 'url'> & {
    artistName: Artist['name'];
  };
