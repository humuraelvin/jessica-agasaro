import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jessica Agasaro - Professional Portfolio',
  description: 'Jessica Agasaro - Journalist at New Times Rwanda. Professional portfolio showcasing news articles, videos, and journalistic work.',
  keywords: 'Jessica Agasaro, Journalist, New Times Rwanda, News Reporter, Media Professional',
  authors: [{ name: 'Jessica Agasaro' }],
  openGraph: {
    title: 'Jessica Agasaro - Professional Portfolio',
    description: 'Journalist at New Times Rwanda - Professional portfolio showcasing news articles, videos, and journalistic work.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jessica Agasaro - Professional Portfolio',
    description: 'Journalist at New Times Rwanda - Professional portfolio showcasing news articles, videos, and journalistic work.',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
                                                                                                