import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-config'
import { studioPageContent } from '@/lib/seo-content'
import { StudioDetailPage } from '@/components/seo/editorial-pages'

export const dynamicParams = false

export function generateStaticParams() {
  return siteConfig.locations.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const studio = studioPageContent[slug as keyof typeof studioPageContent]
  if (!studio) return {}
  return createPageMetadata({
    title: studio.title,
    description: studio.description,
    path: `/studios/${slug}`,
  })
}

export default async function StudioPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!siteConfig.locations.some((location) => location.slug === slug)) notFound()
  return <StudioDetailPage slug={slug} />
}

