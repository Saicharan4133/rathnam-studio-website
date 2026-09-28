import { siteConfig } from '@/lib/site-config'

type Location = (typeof siteConfig.locations)[number]

export function MapSection({ location }: { location: Location }) {
  return (
    <div>
      <p className="micro-label mb-3 text-gold">
        {location.label} · {siteConfig.city.toUpperCase()} · {siteConfig.state.toUpperCase()}
      </p>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-bone/10 md:aspect-[16/10]">
        <iframe
          title={`Map showing ${location.name}`}
          src={location.mapsEmbedUrl}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={location.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="interactive"
        data-track-event="click_directions"
        className="micro-label mt-4 inline-flex items-center gap-2 text-bone/80 transition-colors hover:text-gold"
      >
        GET DIRECTIONS <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}
