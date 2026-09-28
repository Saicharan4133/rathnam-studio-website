import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import { siteConfig } from '@/lib/site-config'
import { SmoothScrollProvider } from '@/components/layout/smooth-scroll-provider'
import { Navbar } from '@/components/layout/navbar'
import { FloatingActions } from '@/components/layout/floating-actions'
import { RouteTransition } from '@/components/layout/route-transition'
import { RoutePreloader } from '@/components/layout/route-preloader'
import { MotionProvider } from '@/components/layout/motion-provider'

// Purely decorative and desktop-only; split out of the initial bundle so it
// never delays first paint or the main thread on first load.
const CustomCursor = dynamic(() =>
  import('@/components/layout/custom-cursor').then((mod) => mod.CustomCursor)
)

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

// Tells Google this is a tattoo studio with two locations in Vijayawada.
// Everything is read from lib/site-config.ts.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': siteConfig.locations.map((loc, i) => ({
    '@type': 'TattooParlor',
    '@id': `${siteConfig.url}/#studio-${i + 1}`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/logo.jpeg`,
    description: siteConfig.description,
    telephone: [siteConfig.phoneHref, siteConfig.phoneHref2].map((h) =>
      h.replace('tel:', '')
    ),
    sameAs: [siteConfig.instagramUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${loc.line1}, ${loc.line2}`,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: loc.line3.match(/\d{6}/)?.[0],
      addressCountry: 'IN',
    },
  })),
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Tattoo Studio in Vijayawada`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  generator: 'v0.app',
  keywords: [
    'tattoo studio Vijayawada',
    'custom tattoo Andhra Pradesh',
    'piercing Vijayawada',
    'scar cover-up tattoo',
    'tattoo removal Vijayawada',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} — Ink Your Story`,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/services/permanent-tattoo.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — custom tattoo work`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Ink Your Story`,
    description: siteConfig.description,
    images: ['/images/services/permanent-tattoo.jpg'],
  },
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

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#0a0a0a' }}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${anton.variable} ${inter.variable} antialiased bg-background text-foreground`}
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <MotionProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <Navbar />
            <RoutePreloader />
            <RouteTransition>{children}</RouteTransition>
            <FloatingActions />
            <div className="film-grain" aria-hidden="true" />
          </SmoothScrollProvider>
        </MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
