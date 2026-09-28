import { AboutUs } from '@/components/home/about-us'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld'
import { createPageMetadata, seoMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({ ...seoMetadata.about, path: '/about-us' })

export default function AboutUsPage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About Raja', path: '/about-us' }]} />
      <AboutUs />
    </main>
  )
}

