import type { Metadata } from 'next'
import { absoluteUrl, siteConfig } from '@/lib/site-config'

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.shareImage,
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const canonical = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_IN',
      images: [{ url: imageUrl, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export const seoMetadata = {
  home: {
    title: `Tattoo Studio in ${siteConfig.city} | ${siteConfig.seoName}`,
    description: `Custom tattoo, piercing, scar cover-up and removal studio in ${siteConfig.city}. Meet artist ${siteConfig.founder.name} and explore the ${siteConfig.name} portfolio.`,
  },
  services: {
    title: `Tattoo, Piercing & Removal Services in ${siteConfig.city}`,
    description: `Explore custom tattoo, piercing, scar cover-up and tattoo removal enquiries at ${siteConfig.name} in ${siteConfig.city}.`,
  },
  gallery: {
    title: `Tattoo Designs & Ideas | ${siteConfig.city} Portfolio`,
    description: `Browse tattoo designs, piercing work and portfolio images from ${siteConfig.name} in ${siteConfig.city}.`,
  },
  about: {
    title: `About ${siteConfig.founder.name}, Tattoo Artist in ${siteConfig.city}`,
    description: `Meet ${siteConfig.founder.name}, founder and lead artist at ${siteConfig.name}, with ${siteConfig.founder.experience} of experience and ${siteConfig.founder.projects}.`,
  },
  contact: {
    title: `Book a Tattoo in ${siteConfig.city} | ${siteConfig.seoName}`,
    description: `Enquire about tattoos, piercing, scar cover-up or removal at ${siteConfig.name}. Call or WhatsApp either ${siteConfig.city} studio.`,
  },
} as const

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.seoName, template: '%s' },
  description: siteConfig.description,
  robots: { index: true, follow: true },
}

export const defaultMetadata = createPageMetadata({
  ...seoMetadata.home,
  path: '/',
})

