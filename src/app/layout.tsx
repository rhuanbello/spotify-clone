import './globals.css';
import { NextAuthProvider } from './providers';

export const metadata = {
  title: 'Home',
}

export default function RootLayout(props: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-400">
        <NextAuthProvider>
          {props.children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
