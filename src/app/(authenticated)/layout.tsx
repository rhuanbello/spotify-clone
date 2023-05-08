import { ReactNode } from 'react'

interface HomeLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: {
    default: 'Spotify',
    template: 'Spotify - %s',
  },
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      {children}
    </>
  )
}
