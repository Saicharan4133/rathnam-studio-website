import Image from 'next/image'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld'
import { JsonLd } from '@/components/seo/json-ld'
import { MapSection } from '@/components/contact/map-section'
import { siteConfig, galleryImages, whatsappHref, absoluteUrl, studioEntityId } from '@/lib/site-config'
import {
  aftercareStages,
  blogPosts,
  faqItems,
  servicePageContent,
  studioPageContent,
  type ContentSection,
  type QuestionAnswer,
} from '@/lib/seo-content'

type BreadcrumbItem = { name: string; path: string }

function PageFrame({
  breadcrumbs,
  title,
  intro,
  kicker,
  children,
}: {
  breadcrumbs: BreadcrumbItem[]
  title: string
  intro: string
  kicker?: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-[70vh] bg-[#0a0a0a] pb-24 text-bone">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <article className="mx-auto w-full max-w-[1600px] pb-12 pl-5 pr-24 pt-12 md:px-10 md:pt-16">
        <header className="max-w-4xl">
          {kicker && <p className="micro-label mb-4 text-gold">{kicker}</p>}
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-bone md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-bone/70 md:text-lg">{intro}</p>
        </header>
        <div className="mt-12 flex flex-col gap-12">{children}</div>
      </article>
    </main>
  )
}

function Sections({ sections }: { sections: readonly ContentSection[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {sections.map((section) => (
        <section key={section.heading} className="max-w-3xl border-t border-bone/10 pt-5">
          <h2 className="font-display text-2xl tracking-wide text-bone md:text-3xl">{section.heading}</h2>
          <div className="mt-4 flex flex-col gap-4 text-base leading-8 text-bone/70">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && (
              <ul className="list-disc pl-6">
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

function Questions({ items, heading = 'Frequently asked questions' }: { items: QuestionAnswer[]; heading?: string }) {
  return (
    <section className="border-t border-bone/10 pt-6">
      <h2 className="font-display text-2xl tracking-wide text-bone md:text-3xl">{heading}</h2>
      <dl className="mt-6 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.question} className="border-b border-bone/10 pb-5">
            <dt className="font-medium text-bone">{item.question}</dt>
            <dd className="mt-2 text-sm leading-7 text-bone/65">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function ContactActions({ message }: { message: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-y border-bone/10 py-7">
      <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" data-track-event="click_whatsapp" className="micro-label rounded-full border border-gold bg-gold px-7 py-4 text-[#0a0a0a] transition-transform hover:scale-[1.02] active:scale-95">Ask on WhatsApp</a>
      <Link href="/contact" className="micro-label rounded-full border border-bone/25 px-7 py-4 text-bone transition-colors hover:border-gold hover:text-gold">Send an enquiry</Link>
    </div>
  )
}

function RelatedGallery({ ids }: { ids: number[] }) {
  const images = ids.map((id) => galleryImages[id - 1]).filter(Boolean)
  return (
    <section aria-labelledby="related-work-title" className="border-t border-bone/10 pt-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 id="related-work-title" className="font-display text-2xl tracking-wide text-bone md:text-3xl">Related studio work</h2>
        <Link href="/gallery" className="micro-label text-gold underline-offset-4 hover:underline">Explore the full gallery</Link>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {images.map((image) => (
          <Link key={image.id} href="/gallery" className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#111111]">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 16vw, 45vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
          </Link>
        ))}
      </div>
    </section>
  )
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = siteConfig.services.find((item) => item.slug === slug)
  const content = servicePageContent[slug]
  if (!service || !content) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.displayTitle,
    serviceType: service.displayTitle,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: siteConfig.locations.map((location) => ({ '@id': studioEntityId(location.slug) })),
    areaServed: siteConfig.areaServed,
  }

  return (
    <>
      <JsonLd data={schema} />
      <PageFrame
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: service.displayTitle, path: `/services/${service.slug}` }]}
        title={`${service.displayTitle} in ${siteConfig.city}`}
        intro={content.intro}
        kicker={siteConfig.name}
      >
        <ContactActions message={`Hi, I would like to ask about ${service.displayTitle.toLowerCase()} in ${siteConfig.city}.`} />
        <Sections sections={content.sections} />
        <Questions items={content.faqs} />
        {content.galleryImageIds.length > 0 && <RelatedGallery ids={content.galleryImageIds} />}
        <section className="border-t border-bone/10 pt-6">
          <h2 className="font-display text-2xl text-bone">Explore related services</h2>
          <nav aria-label="Related services" className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {siteConfig.services.filter((item) => item.slug !== service.slug).map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="text-sm text-gold underline-offset-4 hover:underline">{item.displayTitle} in {siteConfig.city}</Link>
            ))}
          </nav>
        </section>
      </PageFrame>
    </>
  )
}

export function StudioDetailPage({ slug }: { slug: string }) {
  const location = siteConfig.locations.find((item) => item.slug === slug)
  const content = studioPageContent[slug as keyof typeof studioPageContent]
  if (!location || !content) return null

  return (
    <PageFrame
      breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }, { name: location.neighborhood, path: `/studios/${location.slug}` }]}
      title={content.title}
      intro={content.intro}
      kicker={siteConfig.name}
    >
      <section className="grid gap-8 border-y border-bone/10 py-7 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-bone">Studio location</h2>
          <address className="mt-4 not-italic leading-7 text-bone/70">
            {siteConfig.name}<br />{location.line1}<br />{location.line2}<br />{location.line3}<br />{location.line4}
          </address>
        </div>
        <MapSection location={location} />
      </section>
      <Sections sections={content.sections} />
      <ContactActions message={`Hi, I would like to ask about an appointment at the ${location.neighborhood} studio.`} />
      <nav aria-label="Other Vijayawada studio" className="flex flex-wrap gap-5">
        {siteConfig.locations.filter((item) => item.slug !== location.slug).map((item) => (
          <Link key={item.slug} href={`/studios/${item.slug}`} className="text-sm text-gold underline-offset-4 hover:underline">See the {item.neighborhood} studio location</Link>
        ))}
        <Link href="/contact" className="text-sm text-gold underline-offset-4 hover:underline">Contact the studio before travelling</Link>
      </nav>
    </PageFrame>
  )
}

export function FaqPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <PageFrame
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]}
        title={`Tattoo and piercing FAQs in ${siteConfig.city}`}
        intro={`Answers to common questions about tattoo pain, healing, bookings, prices and studio locations at ${siteConfig.name}.`}
      >
        <Questions items={faqItems} />
        <nav aria-label="Helpful studio pages" className="flex flex-wrap gap-x-6 gap-y-3 border-t border-bone/10 pt-6">
          <Link href="/tattoo-aftercare" className="text-sm text-gold underline-offset-4 hover:underline">Read the 30-day tattoo aftercare guide</Link>
          <Link href="/contact" className="text-sm text-gold underline-offset-4 hover:underline">Send a booking enquiry</Link>
        </nav>
      </PageFrame>
    </>
  )
}

export function TattooAftercarePage() {
  return (
    <PageFrame
      breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Tattoo aftercare', path: '/tattoo-aftercare' }]}
      title="Tattoo Aftercare: a 30-Day Guide"
      intro="A practical day-by-day framework for caring for a new tattoo. Follow the instructions given for your appointment; individual care can differ by placement and dressing. This guide is general information, not a medical diagnosis."
    >
      <Sections sections={aftercareStages} />
      <aside className="border-l-2 border-gold px-5 py-4 text-sm leading-7 text-bone/75">
        If you notice spreading redness, increasing warmth or pain, pus, fever, or feel unwell, contact a doctor or urgent medical service. Do not wait for a studio response when symptoms are urgent.
      </aside>
      <ContactActions message="Hi, I have a question about tattoo aftercare." />
    </PageFrame>
  )
}

export function BlogIndexPage() {
  return (
    <PageFrame
      breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]}
      title={`Tattoo guides from ${siteConfig.name}`}
      intro={`Practical guides for planning tattoo, piercing, aftercare and lettering questions in ${siteConfig.city}. Each article explains what to ask and where a direct studio or healthcare-professional answer is needed.`}
    >
      <section aria-label="Studio guides" className="grid gap-5 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="flex flex-col items-start border-t border-bone/10 py-6">
            <h2 className="mt-3 font-display text-2xl leading-tight text-bone md:text-3xl">{post.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-bone/65">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="micro-label mt-5 text-gold underline-offset-4 hover:underline">Read the full guide</Link>
          </article>
        ))}
      </section>
    </PageFrame>
  )
}

export function BlogArticlePage({ slug }: { slug: string }) {
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) return null

  const articleUrl = absoluteUrl(`/blog/${post.slug}`)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: absoluteUrl('/'),
      logo: { '@type': 'ImageObject', url: absoluteUrl(siteConfig.logoImage) },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    image: [absoluteUrl(siteConfig.shareImage)],
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <PageFrame
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]}
        title={post.title}
        intro={post.description}
      >
        <Sections sections={post.sections} />
        <ContactActions message={`Hi, I read “${post.title}” and would like to ask the studio a question.`} />
        <Link href="/blog" className="text-sm text-gold underline-offset-4 hover:underline">Browse all tattoo and piercing guides</Link>
      </PageFrame>
    </>
  )
}

