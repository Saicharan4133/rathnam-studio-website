import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-[#0a0a0a] px-5 py-28 text-bone md:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <p className="micro-label mb-5 text-gold">404 · {siteConfig.city}</p>
        <h1 className="font-display text-5xl tracking-tight md:text-7xl">THIS PAGE ISN&apos;T HERE.</h1>
        <p className="mt-6 max-w-xl leading-7 text-bone/65">The address may have changed. Browse the studio services or contact Rathnam Tattoos Studio for help finding the right information.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/services" className="micro-label rounded-full border border-gold bg-gold px-7 py-4 text-[#0a0a0a]">Explore services</Link>
          <Link href="/contact" className="micro-label rounded-full border border-bone/25 px-7 py-4 text-bone">Contact the studio</Link>
        </div>
      </div>
    </main>
  )
}

