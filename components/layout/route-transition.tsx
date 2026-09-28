'use client'

import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useRef, type ReactNode } from 'react'

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const previousPathname = useRef(pathname)

  if (reduceMotion || previousPathname.current === pathname) {
    previousPathname.current = pathname
    return <>{children}</>
  }

  previousPathname.current = pathname

  return (
    <>
      <AnimatePresence mode="popLayout" initial={false}>
        <m.div
          key={pathname}
          className="pointer-events-none fixed inset-0 z-[80]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } }}
        >
          <m.div
            className="absolute inset-0 bg-[#0a0a0a]"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0, transition: { duration: 0.45, delay: 0.08, ease: [0.76, 0, 0.24, 1] } }}
            style={{ transformOrigin: 'bottom', willChange: 'transform' }}
          />
          <m.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0], transition: { duration: 0.5, delay: 0.08, times: [0, 0.4, 1] } }}
          >
            <m.span
              className="block h-10 w-10 rotate-45 border border-gold/80"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [0.3, 1, 1], opacity: [0, 1, 1], transition: { duration: 0.35, delay: 0.1 } }}
              style={{ willChange: 'transform, opacity' }}
            />
          </m.div>
          <m.div
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a24b, transparent)' }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { duration: 0.3, delay: 0.3 } }}
          />
        </m.div>
      </AnimatePresence>
      {children}
    </>
  )
}
