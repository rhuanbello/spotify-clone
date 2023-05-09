import './globals.css';
import { NextAuthProvider } from './providers';

export const metadata = {
  title: 'Spotify - Music for everyone',
  description: 'Spotify is all the music you’ll ever need.'
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 overflow-y-hidden">
        <NextAuthProvider>{props.children}</NextAuthProvider>
      </body>
    </html>
  );
}
