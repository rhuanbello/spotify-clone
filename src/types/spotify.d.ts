import {
  Album,
  Artist,
  Image,
  Playlist,
  PublicUser,
  AccessToken,
  CurrentlyPlayingContext
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

export type PlayerResponseProps = Omit<CurrentlyPlayingContext, 'item'> & {
  item: {
    id: string;
    name: string;
    album: Album;
    artists: Artist[];
    duration_ms: number;
    preview_url: string;
  };
};

export type PlayerProps = {
  isPlaying: boolean;
  progressMs: number | null;
  repeatState: RepeatState;
  volumePercent: number | undefined;
  shuffleState: 'off' | 'on';
  item: {
    id: string;
    name: string;
    url: string;
    artistName: string;
    albumName: string;
    duration: number;
    previewUrl: string;
  };
};
