import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-config'
import { FaqPage } from '@/components/seo/editorial-pages'

export const metadata = createPageMetadata({
  title: `Tattoo Studio FAQs in ${siteConfig.city} | Rathnam Tattoos`,
  description: `Answers about tattoo pain, healing, bookings, pricing factors, age policy and studio care in ${siteConfig.city}.`,
  path: '/faq',
})

export default function FrequentlyAskedQuestionsPage() {
  return <FaqPage />
}

