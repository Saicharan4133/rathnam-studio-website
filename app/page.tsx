import dynamic from 'next/dynamic'
import { Hero } from '@/components/home/hero'
import { createPageMetadata, seoMetadata } from '@/lib/metadata'

const WhatWeDo = dynamic(() => import('@/components/home/what-we-do').then((mod) => mod.WhatWeDo))
const FeaturedGallery = dynamic(() =>
  import('@/components/home/featured-gallery').then((mod) => mod.FeaturedGallery)
)
const StudioStatement = dynamic(() =>
  import('@/components/home/studio-statement').then((mod) => mod.StudioStatement)
)
const FinalCta = dynamic(() => import('@/components/home/final-cta').then((mod) => mod.FinalCta))

export const metadata = createPageMetadata({ ...seoMetadata.home, path: '/' })

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <FeaturedGallery />
      <StudioStatement />
      <FinalCta />
    </main>
  )
}
