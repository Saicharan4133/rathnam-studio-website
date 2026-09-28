'use client'

import { useEffect } from 'react'

type TrackedEvent = 'click_call' | 'click_whatsapp' | 'click_directions' | 'submit_enquiry'

type EventWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>
}

function dispatchTrackedEvent(name: TrackedEvent, element: HTMLElement) {
  const details = {
    event: name,
    destination: element instanceof HTMLAnchorElement ? element.href : undefined,
    page_path: window.location.pathname,
  }
  const target = window as EventWindow
  target.dataLayer = target.dataLayer ?? []
  target.dataLayer.push(details)
  window.dispatchEvent(new CustomEvent('rathnam:analytics', { detail: details }))
}

export function SiteEventTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>('a[href], [data-track-event]')
        : null
      if (!target) return
      const explicitName = target.dataset.trackEvent as TrackedEvent | undefined
      const href = target instanceof HTMLAnchorElement ? target.href : ''
      const inferredName = href.startsWith('tel:')
        ? 'click_call'
        : href.includes('wa.me/')
          ? 'click_whatsapp'
          : href.includes('google.com/maps') || href.includes('maps.google.com')
            ? 'click_directions'
            : undefined
      const name = explicitName ?? inferredName
      if (name && ['click_call', 'click_whatsapp', 'click_directions'].includes(name)) {
        dispatchTrackedEvent(name, target)
      }
    }

    function onSubmit(event: SubmitEvent) {
      const form = event.target instanceof HTMLFormElement ? event.target : null
      if (form?.dataset.trackEvent === 'submit_enquiry') {
        dispatchTrackedEvent('submit_enquiry', form)
      }
    }

    document.addEventListener('click', onClick)
    document.addEventListener('submit', onSubmit)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('submit', onSubmit)
    }
  }, [])

  return null
}

