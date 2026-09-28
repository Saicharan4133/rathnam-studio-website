import { createPageMetadata } from '@/lib/metadata'
import { TattooAftercarePage } from '@/components/seo/editorial-pages'

export const metadata = createPageMetadata({
  title: 'Tattoo Aftercare: 30-Day Healing Guide',
  description: 'A 30-day tattoo aftercare guide with day-by-day care reminders and signs that need prompt medical attention.',
  path: '/tattoo-aftercare',
})

export default function AftercarePage() {
  return <TattooAftercarePage />
}

