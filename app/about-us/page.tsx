import type { Metadata } from 'next'
import { AboutUs } from '@/components/home/about-us'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld'
import { siteConfig } from '@/lib/site-config'

const description = `Meet ${siteConfig.name}'s founder and lead artist in Vijayawada, and see what our clients say.`

export const metadata: Metadata = {
  title: 'About Us',
  description,
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description,
    url: '/about-us',
    type: 'website',
    images: ['/images/hero/100-optimized.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Us | ${siteConfig.name}`,
    description,
    images: ['/images/hero/100-optimized.webp'],
  },
}

export default function AboutUsPage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about-us' }]} />
      <AboutUs />
    </main>
  )
}
