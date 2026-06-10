import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import FooterGate from '@/components/layout/FooterGate'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ShadowMonitor',
  description:
    'Investigating the systems behind the grey zone.',

  openGraph: {
    title: 'ShadowMonitor',
    description:
      'Investigating the systems behind the grey zone.',
    url: 'https://shadowmonitor.org',
    siteName: 'ShadowMonitor',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ShadowMonitor',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ShadowMonitor',
    description:
      'Investigating the systems behind the grey zone.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-black antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white m-0">
        <div className="flex-1">{children}</div>
        <FooterGate />
      </body>
    </html>
  )
}
