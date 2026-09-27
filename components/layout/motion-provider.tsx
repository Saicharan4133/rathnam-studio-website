'use client'

import { LazyMotion } from 'framer-motion'

// Animation features load in a separate chunk after hydration, so the
// initial bundle only carries the lightweight `m` component renderer.
const loadFeatures = () => import('./motion-features').then((mod) => mod.default)

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  )
}
