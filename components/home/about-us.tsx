'use client'

import Image from 'next/image'
import { m } from 'framer-motion'
import { about } from '@/lib/site-config'
import { CutReveal } from '@/components/shared/cut-reveal'
import { InkBackdrop } from '@/components/realm/ink-backdrop'

export function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="relative flex min-h-[46vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[54vh]">
        <InkBackdrop mood="about" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <p className="micro-label mb-4 text-gold">103 / 104</p>
          <h1 className="font-display text-5xl leading-none tracking-tight text-bone md:text-7xl">THE ARTIST BEHIND THE INK</h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-36">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">
          <m.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-md md:mx-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image src={about.mainImage} alt={`${about.name}, ${about.role.toLowerCase()}`} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 90vw, 45vw" />
            </div>
            <div className="absolute -bottom-8 -left-6 h-32 w-28 overflow-hidden rounded-sm border-2 border-[#0a0a0a] shadow-2xl md:-bottom-10 md:-left-10 md:h-44 md:w-36">
              <Image src={about.secondaryImage} alt={`${about.name} at work`} fill loading="lazy" className="object-cover" sizes="180px" />
            </div>
          </m.div>

          <m.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <p className="micro-label mb-3 text-gold">{about.role}</p>
            <h2 className="font-display text-6xl tracking-tight text-bone md:text-8xl">{about.name}</h2>
          </m.div>
        </div>
      </div>

      <div className="cv-auto pb-20 md:pb-28"><CutReveal /></div>
    </section>
  )
}
