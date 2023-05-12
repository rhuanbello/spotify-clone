import './globals.css';
import { NextAuthProvider, ReactQueryProvider } from './providers';

export const metadata = {
  title: 'Spotify - Music for everyone',
  description: 'Spotify is all the music you’ll ever need.'
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 overflow-y-hidden">
        <ReactQueryProvider>
          <NextAuthProvider>{props.children}</NextAuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
