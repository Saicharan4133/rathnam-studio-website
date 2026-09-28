import type { Metadata } from 'next'
import Link from 'next/link'
import { InkBackdrop } from '@/components/realm/ink-backdrop'
import { ServicesSections } from '@/components/services/services-sections'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld'
import { services, galleryImages, siteConfig } from '@/lib/site-config'
import { createPageMetadata, seoMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ ...seoMetadata.services, path: '/services' })

const bandDurations = [72, 60, 80, 66]

export default function ServicesPage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />
      <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-[#0a0a0a] pb-16 pt-32 md:min-h-[64vh]">
        <InkBackdrop mood="services" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <p className="micro-label mb-4 text-gold">101 / 104</p>
          <h1 className="font-display text-6xl leading-none tracking-tight text-bone md:text-8xl">SERVICES</h1>
        </div>
      </section>
      <div className="relative bg-[#0a0a0a]">
        <ServicesSections
          sections={services.map((service, i) => {
            const customGallery = service.gallery
            const band = customGallery.length
              ? Array.from({ length: 8 }, (_, j) => ({
                  id: j + 1,
                  src: service.galleryThumbnails[j % service.galleryThumbnails.length],
                  fullSrc: customGallery[j % customGallery.length],
                  alt: `${service.displayTitle} example — ${siteConfig.name}, ${siteConfig.city}`,
                }))
              : Array.from({ length: 8 }, (_, j) => galleryImages[(i * 4 + j) % galleryImages.length])
            return { service, bandImages: band, bandDuration: bandDurations[i] }
          })}
        />
        <nav aria-label="Explore each studio service" className="mx-auto grid max-w-[1600px] gap-5 px-5 pb-20 md:grid-cols-2 md:px-10">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group border-t border-bone/15 py-6">
              <p className="micro-label text-gold">{service.number} / {service.displayTitle}</p>
              <h2 className="mt-3 font-display text-2xl text-bone transition-colors group-hover:text-gold md:text-3xl">{service.displayTitle} in {siteConfig.city}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-bone/65">{service.description}</p>
              <span className="micro-label mt-5 inline-block text-gold">Read about {service.displayTitle.toLowerCase()} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  )
}
