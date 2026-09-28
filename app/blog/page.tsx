import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-config'
import { BlogIndexPage } from '@/components/seo/editorial-pages'

export const metadata = createPageMetadata({
  title: `Tattoo Guides in ${siteConfig.city} | Rathnam Tattoos Blog`,
  description: 'Read practical tattoo cost, cover-up, piercing aftercare and Telugu script guides from Rathnam Tattoos Studio.',
  path: '/blog',
})

export default function BlogPage() {
  return <BlogIndexPage />
}

