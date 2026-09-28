'use client'

import { LazyMotion, MotionConfig } from 'framer-motion'

// Animation features load in a separate chunk after hydration, so the
// initial bundle only carries the lightweight `m` component renderer.
const loadFeatures = () => import('./motion-features').then((mod) => mod.default)

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  )
}
