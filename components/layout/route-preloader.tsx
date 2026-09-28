'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { preloadImagesIdle } from '@/lib/image-preload'
import { services, galleryImages, about } from '@/lib/site-config'

const homeImages = [
  ...services.map((service) => service.image),
  ...galleryImages.slice(0, 8).map((image) => image.src),
]
const serviceImages = [
  ...galleryImages.slice(0, 8).map((image) => image.src),
  about.mainImage,
  about.secondaryImage,
]

export function RoutePreloader() {
  const pathname = usePathname()
  const previousPathname = useRef<string | null>(null)

  useEffect(() => {
    if (previousPathname.current === null) {
      previousPathname.current = pathname
      return
    }
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname

    const nextImages = pathname === '/' ? homeImages : pathname.startsWith('/services') ? serviceImages : []
    if (nextImages.length) preloadImagesIdle(nextImages)
  }, [pathname])

  return null
}
