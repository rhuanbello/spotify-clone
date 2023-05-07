import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-email',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'app-remote-control',
  'streaming',
  'user-read-playback-position',
  'user-top-read',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing'
].join(',');

const params = {
  scope: scopes
};

const queryParamString = new URLSearchParams(params);
const LOGIN_URL =
  `https://accounts.spotify.com/authorize?` + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback/'
});

export { spotifyApi, LOGIN_URL };
