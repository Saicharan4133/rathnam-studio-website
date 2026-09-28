import Link from 'next/link'
import { siteConfig, whatsappHref } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-bone/10 bg-[#0a0a0a] py-14 pl-5 pr-24 text-bone md:px-10 md:py-16">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12">
        <div className="grid gap-10 md:grid-cols-2">
          {siteConfig.locations.map((location) => (
            <section key={location.slug} aria-labelledby={`${location.slug}-footer-title`}>
              <h2 id={`${location.slug}-footer-title`} className="micro-label mb-4 text-gold">
                {location.label}
              </h2>
              <p className="max-w-md leading-relaxed text-bone/75">
                {siteConfig.name}
                <br />
                {location.line1}
                <br />
                {location.line2}
                <br />
                {location.line3}, {location.line4}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {[{ label: siteConfig.phone, href: siteConfig.phoneHref }, { label: siteConfig.phone2, href: siteConfig.phoneHref2 }].map((phone) => (
                  <a key={phone.href} href={phone.href} data-track-event="click_call" className="text-sm text-bone/70 underline-offset-4 hover:text-gold hover:underline">
                    {phone.label}
                  </a>
                ))}
              </div>
              <Link href={`/studios/${location.slug}`} className="micro-label mt-4 inline-flex text-bone/60 underline-offset-4 hover:text-gold hover:underline">
                Studio details and map
              </Link>
            </section>
          ))}
        </div>

        <div className="grid gap-10 border-t border-bone/10 pt-8 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col items-start gap-4">
            <p className="font-display text-2xl tracking-wide">{siteConfig.name}</p>
            <p lang="te" className="text-sm text-bone/60">విజయవాడలో టాటూ స్టూడియో</p>
            <div className="flex flex-wrap gap-5 text-sm">
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" data-track-event="click_whatsapp" className="text-bone/75 underline-offset-4 hover:text-gold hover:underline">WhatsApp</a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-bone/75 underline-offset-4 hover:text-gold hover:underline">{siteConfig.instagramHandle}</a>
            </div>
          </div>
          <nav aria-label="All pages" className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {siteConfig.footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-bone/65 underline-offset-4 hover:text-gold hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

