import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap'
});
const _inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'VoyageTemporel Agence | Voyagez a travers le Temps',
  description: 'Vivez l&apos;extraordinaire. Voyagez a travers le temps pour etre temoin de l&apos;histoire se derouler sous vos yeux. Experiences de voyage temporel premium vers Paris 1889, la periode Cretace et la Renaissance florentine.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${_playfair.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
