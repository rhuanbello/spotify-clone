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
export const LOGIN_URL =
  `https://accounts.spotify.com/authorize?` + queryParamString.toString();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

export const basic = Buffer.from(`${clientId}:${clientSecret}`).toString(
  'base64'
);

export const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
