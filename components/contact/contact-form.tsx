'use client'

import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Loader2 } from 'lucide-react'
import { siteConfig, whatsappHref } from '@/lib/site-config'

type Status = 'idle' | 'loading' | 'success' | 'error'
type Errors = Partial<Record<'name' | 'phone' | 'email' | 'message' | 'service' | 'studio', string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+\d][\d\s-]{6,16}$/

function enquiryMessage(data: FormData) {
  return [
    `Hi, I would like to enquire about ${String(data.get('service') || 'a studio service')}.`,
    `Name: ${String(data.get('from_name') || '').trim()}`,
    `Phone: ${String(data.get('phone') || '').trim()}`,
    `Email: ${String(data.get('from_email') || '').trim()}`,
    `Preferred studio: ${String(data.get('preferred_studio') || 'Not specified').trim()}`,
    `Details: ${String(data.get('message') || '').trim()}`,
  ].join('\n')
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [fallbackHref, setFallbackHref] = useState('')

  function validate(data: FormData): Errors {
    const next: Errors = {}
    const name = String(data.get('from_name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const email = String(data.get('from_email') || '').trim()
    const message = String(data.get('message') || '').trim()
    const service = String(data.get('service') || '').trim()
    const studio = String(data.get('preferred_studio') || '').trim()

    if (!name) next.name = 'Please enter your name.'
    if (!phone) next.phone = 'Please enter your phone number.'
    else if (!phonePattern.test(phone)) next.phone = 'Please enter a valid phone number.'
    if (!email) next.email = 'Please enter your email.'
    else if (!emailPattern.test(email)) next.email = 'Please enter a valid email address.'
    if (!message) next.message = 'Please tell us a little about your idea.'
    if (!service) next.service = 'Please choose a service.'
    if (!studio) next.studio = 'Please choose a preferred studio.'

    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'loading') return

    const form = event.currentTarget
    const data = new FormData(form)
    if (String(data.get('company_website') || '').trim()) {
      setStatus('success')
      form.reset()
      return
    }

    const nextErrors = validate(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')
    setFallbackHref(whatsappHref(enquiryMessage(data)))
    try {
      const emailjsConfig = siteConfig.contact.emailjs
      if (emailjsConfig.publicKey.startsWith('YOUR_')) throw new Error('EmailJS is not configured')
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: String(data.get('from_name') || '').trim(),
          from_email: String(data.get('from_email') || '').trim(),
          phone: String(data.get('phone') || '').trim(),
          message: enquiryMessage(data),
        },
        emailjsConfig.publicKey
      )
      setStatus('success')
      form.reset()
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full border-b border-bone/25 bg-transparent py-3 text-bone outline-none transition-colors focus:border-gold'
  const labelClass = 'micro-label mb-2 block text-bone/70'

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate data-track-event="submit_enquiry" className="flex flex-col gap-6">
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="from_name" className={labelClass}>Name</label>
        <input id="from_name" name="from_name" type="text" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'from_name-error' : undefined} className={inputClass} />
        {errors.name && <p id="from_name-error" className="mt-1 text-sm text-destructive">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} className={inputClass} />
        {errors.phone && <p id="phone-error" className="mt-1 text-sm text-destructive">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="from_email" className={labelClass}>Email</label>
        <input id="from_email" name="from_email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'from_email-error' : undefined} className={inputClass} />
        {errors.email && <p id="from_email-error" className="mt-1 text-sm text-destructive">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>Service</label>
        <select id="service" name="service" defaultValue="" required aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? 'service-error' : undefined} className={`${inputClass} contact-form-select`}>
          <option value="" disabled>Select a service</option>
          {siteConfig.services.map((service) => <option key={service.slug} value={service.displayTitle}>{service.displayTitle}</option>)}
        </select>
        {errors.service && <p id="service-error" className="mt-1 text-sm text-destructive">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="preferred_studio" className={labelClass}>Preferred studio</label>
        <select id="preferred_studio" name="preferred_studio" defaultValue="" required aria-invalid={Boolean(errors.studio)} aria-describedby={errors.studio ? 'studio-error' : undefined} className={`${inputClass} contact-form-select`}>
          <option value="" disabled>Select a Vijayawada studio</option>
          {siteConfig.locations.map((location) => <option key={location.slug} value={location.neighborhood}>{location.neighborhood}</option>)}
        </select>
        {errors.studio && <p id="studio-error" className="mt-1 text-sm text-destructive">{errors.studio}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us about your idea</label>
        <textarea id="message" name="message" rows={4} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} className={`${inputClass} resize-none`} />
        {errors.message && <p id="message-error" className="mt-1 text-sm text-destructive">{errors.message}</p>}
      </div>

      <button type="submit" disabled={status === 'loading'} className="micro-label mt-2 flex items-center justify-center gap-2 rounded-full border border-gold bg-gold px-8 py-4 text-[#0a0a0a] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
        SEND ENQUIRY
      </button>

      <div role="status" aria-live="polite">
        {status === 'success' && <p className="text-sm text-gold">Thank you. Your enquiry has been sent successfully.</p>}
        {status === 'error' && (
          <div className="flex flex-col gap-3 text-sm text-destructive">
            <p>We could not send the form just now. You can continue the enquiry directly on WhatsApp.</p>
            <a href={fallbackHref} target="_blank" rel="noopener noreferrer" data-track-event="click_whatsapp" className="micro-label w-fit rounded-full border border-gold px-6 py-3 text-gold">Continue on WhatsApp</a>
          </div>
        )}
      </div>
    </form>
  )
}
