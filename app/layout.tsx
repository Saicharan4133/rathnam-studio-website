import type { Metadata, Viewport } from 'next'
import { Anton, Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import './globals.css'
import { siteConfig } from '@/lib/site-config'
import { baseMetadata } from '@/lib/metadata'
import { SmoothScrollProvider } from '@/components/layout/smooth-scroll-provider'
import { Navbar } from '@/components/layout/navbar'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingActions } from '@/components/layout/floating-actions'
import { RouteTransition } from '@/components/layout/route-transition'
import { RoutePreloader } from '@/components/layout/route-preloader'
import { MotionProvider } from '@/components/layout/motion-provider'
import { SiteEventTracker } from '@/components/analytics/site-event-tracker'

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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: 'en-IN',
      publisher: { '@id': `${siteConfig.url}/studios/${siteConfig.locations[0].slug}#tattoo-parlor` },
    },
    ...siteConfig.locations.map((location) => ({
      '@type': 'TattooParlor',
      '@id': `${siteConfig.url}/studios/${location.slug}#tattoo-parlor`,
      name: siteConfig.name,
      url: `${siteConfig.url}/studios/${location.slug}`,
      image: `${siteConfig.url}${siteConfig.shareImage}`,
      logo: `${siteConfig.url}${siteConfig.movedLogoImage}`,
      description: siteConfig.description,
      sameAs: [siteConfig.instagramUrl, location.googleBusinessProfileUrl].filter(Boolean),
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${location.line1}, ${location.line2}`,
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.state,
        postalCode: location.postalCode,
        addressCountry: siteConfig.countryCode,
      },
      geo: location.geo
        ? { '@type': 'GeoCoordinates', latitude: location.geo.latitude, longitude: location.geo.longitude }
        : undefined,
      openingHoursSpecification: location.openingHoursSpecification ?? undefined,
      hasMap: location.mapsDirectionsUrl,
      areaServed: siteConfig.areaServed,
    })),
  ],
}

export const metadata: Metadata = baseMetadata

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  userScalable: true,
}

const gtmId = siteConfig.analytics.googleTagManagerId
const isGtmId = /^GTM-[A-Z0-9]+$/.test(gtmId)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className="dark" style={{ backgroundColor: '#0a0a0a' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${anton.variable} ${inter.variable} antialiased bg-background text-foreground`}
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {isGtmId && (
          <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
          }} />
        )}
        <SiteEventTracker />
        <MotionProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <Navbar />
            <RoutePreloader />
            <RouteTransition>
              {children}
              <SiteFooter />
            </RouteTransition>
            <FloatingActions />
            <div className="film-grain" aria-hidden="true" />
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  )
}

