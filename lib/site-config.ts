// Keep every business fact, contact channel, location, image caption, and route inventory here.
export const siteConfig = {
  name: 'RATHNAM TATTOOS STUDIO',
  seoName: 'Rathnam Tattoos Studio',
  shortName: 'RATHNAM',
  tagline: 'INK YOUR STORY',
  description: 'Custom tattoos, piercing and scar cover-up in Vijayawada, Andhra Pradesh.',
  url: 'https://rathnamstudio.in',
  city: 'Vijayawada',
  state: 'Andhra Pradesh',
  country: 'India',
  countryCode: 'IN',
  areaServed: ['Vijayawada', 'Guntur', 'Krishna district'],
  phone: '+91 97004 77001',
  phoneHref: 'tel:+919700477001',
  phone2: '+91 99124 38123',
  phoneHref2: 'tel:+919912438123',
  whatsappNumber: '919700477001',
  whatsappMessage: "Hi, I'm interested in getting a tattoo. I'd like to discuss a design and booking.",
  instagramHandle: '@rathnamtattoos',
  instagramUrl: 'https://instagram.com/rathnamtattoos',
  googleBusinessProfileUrl: '',
  founder: {
    name: 'Raja',
    role: 'Founder & lead artist',
    mainImage: '/images/about/owner-1.webp',
    secondaryImage: '/images/about/owner-2.webp',
  },
  logoImage: '/images/logo.jpeg',
  movedLogoImage: '/images/gallery/source-06.webp',
  shareImage: '/images/hero/100-optimized.webp',
  heroImages: {
    home: '/images/hero/100-optimized.webp',
    services: '/images/hero/101.webp',
    gallery: '/images/hero/102.webp',
    about: '/images/hero/103.webp',
    contact: '/images/hero/104.webp',
  },
  heroImageDimensions: {
    home: { width: 640, height: 853 },
    services: { width: 960, height: 1280 },
    gallery: { width: 726, height: 1290 },
    about: { width: 960, height: 1280 },
    contact: { width: 720, height: 1280 },
  },
  homeSupportLine: 'Custom tattoo, piercing and scar cover-up studio in Vijayawada, Andhra Pradesh.',
  contact: {
    emailjs: {
      serviceId: 'service_ooj39wj',
      templateId: 'template_p02awel',
      publicKey: '7qC3ByXVcUzh-Edwy',
    },
  },
  analytics: {
    googleTagManagerId: '',
  },
  locations: [
    {
      slug: 'guru-nanak-colony',
      label: 'GURU NANAK COLONY STUDIO',
      name: 'Rathnam Tattoos Studio — Guru Nanak Colony',
      neighborhood: 'Guru Nanak Colony',
      landmark: 'Crem Stone, beside Partha Dental',
      line1: 'Crem Stone, beside Partha Dental',
      line2: "Teacher's Colony, Guru Nanak Colony",
      line3: 'Vijayawada, Andhra Pradesh 520008',
      line4: 'India',
      postalCode: '520008',
      fullAddress: "Crem Stone, beside Partha Dental, Teacher's Colony, Guru Nanak Colony, Vijayawada, Andhra Pradesh 520008, India",
      mapsEmbedUrl: 'https://maps.google.com/maps?q=Rathnam%20Tattoos%20Studio%20Crem%20Stone%20beside%20Partha%20Dental%20Teacher%27s%20Colony%20Guru%20Nanak%20Colony%20Vijayawada%20Andhra%20Pradesh%20520008&t=&z=15&ie=UTF8&iwloc=&output=embed',
      mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rathnam+Tattoos+Studio+Crem+Stone+beside+Partha+Dental+Teacher%27s+Colony+Guru+Nanak+Colony+Vijayawada+Andhra+Pradesh+520008',
      geo: null as { latitude: number; longitude: number } | null,
      hours: null as string | null,
      openingHoursSpecification: null as { '@type': 'OpeningHoursSpecification'; dayOfWeek: string[]; opens: string; closes: string }[] | null,
      googleBusinessProfileUrl: null as string | null,
    },
    {
      slug: 'krishnalanka',
      label: 'KRISHNALANKA STUDIO',
      name: 'Rathnam Tattoos Studio — Krishnalanka',
      neighborhood: 'Krishnalanka',
      landmark: 'PNB, Bus Stand, opposite E3 Food Court and APSRTC Bus Stand',
      line1: 'PNB, Bus Stand, opposite E3 Food Court',
      line2: 'Opposite APSRTC Bus Stand, Krishnalanka',
      line3: 'Vijayawada, Andhra Pradesh 520013',
      line4: 'India',
      postalCode: '520013',
      fullAddress: 'PNB, Bus Stand, opposite E3 Food Court, opposite APSRTC Bus Stand, Krishnalanka, Vijayawada, Andhra Pradesh 520013, India',
      mapsEmbedUrl: 'https://maps.google.com/maps?q=PNB%20Bus%20Stand%20opposite%20E3%20Food%20Court%20Opp%20APSRTC%20Bus%20Stand%20Krishnalanka%20Vijayawada%20Andhra%20Pradesh%20520013&t=&z=15&ie=UTF8&iwloc=&output=embed',
      mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=PNB+Bus+Stand+opposite+E3+Food+Court+Opp+APSRTC+Bus+Stand+Krishnalanka+Vijayawada+Andhra+Pradesh+520013',
      geo: null as { latitude: number; longitude: number } | null,
      hours: null as string | null,
      openingHoursSpecification: null as { '@type': 'OpeningHoursSpecification'; dayOfWeek: string[]; opens: string; closes: string }[] | null,
      googleBusinessProfileUrl: null as string | null,
    },
  ],
  services: [
    {
      number: '01',
      slug: 'permanent-tattoo',
      title: 'PERMANENT TATTOO',
      displayTitle: 'Permanent Tattoo',
      seoTitle: 'Tattoo Artist in Vijayawada | Custom Tattoo Designs',
      seoDescription: 'Plan a custom tattoo in Vijayawada, from minimalist and fine-line ideas to Telugu script, portraits and black-and-grey work.',
      description: 'Custom tattoo designs created around your idea, preferred style and placement.',
      extra: null,
      image: '/images/services/permanent-tattoo/permanent-tattoo-1.webp',
      gallery: Array.from({ length: 10 }, (_, i) => `/images/services/permanent-tattoo/permanent-tattoo-${i + 1}.webp`),
      galleryThumbnails: Array.from({ length: 10 }, (_, i) => `/images/services/thumbnails/permanent-tattoo-${String(i + 1).padStart(2, '0')}.webp`),
    },
    {
      number: '02',
      slug: 'piercing',
      title: 'PIERCING',
      displayTitle: 'Piercing',
      seoTitle: 'Piercing in Vijayawada | Rathnam Tattoos Studio',
      seoDescription: 'Explore piercing enquiries in Vijayawada, with appointment questions, placement planning and clear aftercare discussions.',
      description: 'Piercing enquiries and placement discussions at Rathnam Tattoos Studio in Vijayawada.',
      extra: null,
      image: '/images/services/piercing/piercing-1.webp',
      gallery: Array.from({ length: 9 }, (_, i) => `/images/services/piercing/piercing-${i + 1}.webp`),
      galleryThumbnails: Array.from({ length: 9 }, (_, i) => `/images/services/thumbnails/piercing-${String(i + 1).padStart(2, '0')}.webp`),
    },
    {
      number: '03',
      slug: 'scar-coverup',
      title: 'SCAR COVER-UP',
      displayTitle: 'Scar Cover-Up',
      seoTitle: 'Scar Cover Up Tattoo in Vijayawada | Rathnam Tattoos',
      seoDescription: 'Discuss scar and old tattoo cover-up ideas in Vijayawada. Suitability, design choices and expectations need individual review.',
      description: 'Thoughtfully designed tattoo work that incorporates existing scars into a new visual composition.',
      extra: 'Every scar is different. Cover-up possibilities are discussed individually during consultation.',
      image: '/images/services/scar-coverup/scar-coverup-1.webp',
      gallery: Array.from({ length: 6 }, (_, i) => `/images/services/scar-coverup/scar-coverup-${i + 1}.webp`),
      galleryThumbnails: Array.from({ length: 6 }, (_, i) => `/images/services/thumbnails/scar-coverup-${String(i + 1).padStart(2, '0')}.webp`),
    },
  ],
  nav: [
    { label: 'HOME', href: '/', number: '100' },
    { label: 'SERVICES', href: '/services', number: '101' },
    { label: 'GALLERY', href: '/gallery', number: '102' },
    { label: 'ABOUT US', href: '/about-us', number: '103' },
    { label: 'CONTACT', href: '/contact', number: '104' },
  ],
  footerLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Permanent tattoo', href: '/services/permanent-tattoo' },
    { label: 'Piercing', href: '/services/piercing' },
    { label: 'Scar cover-up', href: '/services/scar-coverup' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About Raja', href: '/about-us' },
    { label: 'Guru Nanak Colony studio', href: '/studios/guru-nanak-colony' },
    { label: 'Krishnalanka studio', href: '/studios/krishnalanka' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Tattoo aftercare', href: '/tattoo-aftercare' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tattoo cost guide', href: '/blog/tattoo-cost-vijayawada' },
    { label: 'Piercing aftercare guide', href: '/blog/piercing-aftercare-guide' },
    { label: 'Telugu script tattoo guide', href: '/blog/telugu-name-script-tattoo-ideas' },
    { label: 'Contact', href: '/contact' },
  ],
  fixedSitemapDate: '2026-09-28',
} as const

const verifiedGallery = [
  { src: '/images/gallery/source-01.webp', caption: 'Character tattoo before-and-after comparison on the neck — Rathnam Tattoos Studio, Vijayawada.' },
  { src: '/images/gallery/source-02.webp', caption: 'Multiple ear piercings with jewellery — Rathnam Tattoos Studio, Vijayawada.' },
  { src: '/images/gallery/source-03.webp', caption: 'Butterfly tattoo and earlier marks on the forearm — Rathnam Tattoos Studio, Vijayawada.' },
  { src: '/images/gallery/source-04.webp', caption: 'Geometric blackwork sleeve on the forearm — Rathnam Tattoos Studio, Vijayawada.' },
  { src: '/images/gallery/source-05.webp', caption: 'Black-and-grey character tattoo on the upper chest — Rathnam Tattoos Studio, Vijayawada.' },
]

const uncaptionedGallery = Array.from({ length: 39 }, (_, i) => ({
  src: `/images/gallery/img${i + 7}.webp`,
  caption: `Portfolio photo ${i + 6} from ${siteConfig.name}, ${siteConfig.city}.`,
}))

export const galleryImages = [...verifiedGallery, ...uncaptionedGallery].map((image, index) => ({
  id: index + 1,
  fullSrc: image.src,
  src: `/images/gallery/thumbnails/gallery-${String(index + 1).padStart(2, '0')}.webp`,
  alt: image.caption,
}))

export const services = siteConfig.services
export const about = {
  name: siteConfig.founder.name.toUpperCase(),
  role: siteConfig.founder.role.toUpperCase(),
  mainImage: siteConfig.founder.mainImage,
  secondaryImage: siteConfig.founder.secondaryImage,
} as const

export const whatsappHref = (message: string = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString()
export const studioEntityId = (slug: string) => `${siteConfig.url}/studios/${slug}#tattoo-parlor`
export const primaryStudioEntityId = studioEntityId(siteConfig.locations[0].slug)
export const fixedSitemapDate = new Date(`${siteConfig.fixedSitemapDate}T00:00:00.000Z`)

export const serviceSelectOptions = siteConfig.services.map(({ displayTitle, slug }) => ({
  label: displayTitle,
  value: slug,
}))
