import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-config'
import { servicePageContent } from '@/lib/seo-content'
import { ServiceDetailPage } from '@/components/seo/editorial-pages'

export const dynamicParams = false

export function generateStaticParams() {
  return siteConfig.services.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = siteConfig.services.find((item) => item.slug === slug)
  if (!service) return {}
  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  })
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!servicePageContent[slug]) notFound()
  return <ServiceDetailPage slug={slug} />
}

