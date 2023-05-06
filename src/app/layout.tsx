import './globals.css';

export const metadata = {
  title: 'Spotify',
  description: 'Listen to your favorite music and podcasts on Spotify!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-400">{children}</body>
    </html>
  );
}
