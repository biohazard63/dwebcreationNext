import { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import { faq } from '@/lib/data/offers'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Création de sites internet à ${siteConfig.city}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'création site internet Clermont-Ferrand',
    'développeur web Clermont-Ferrand',
    'site vitrine artisan',
    'site internet commerce',
    'référencement local',
    'Puy-de-Dôme',
    'Auvergne',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Création de sites internet à ${siteConfig.city}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }),
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  // Google coupe les titres au-delà de ~60 caractères : on retire alors le suffixe du site
  const fits = `${title} | ${siteConfig.name}`.length <= 60
  return {
    title: fits ? title : { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: 'fr_FR',
      type: 'website',
    },
  }
}

// Identifiant unique de l'entreprise, réutilisé par les services pour la désigner
function businessId() {
  return `${siteConfig.url}/#entreprise`
}

const areaServed = [
  { '@type': 'City', name: siteConfig.city },
  { '@type': 'AdministrativeArea', name: siteConfig.region },
]

// Une formule ou un service proposé, rattaché à l'entreprise
export function serviceJsonLd({ name, description, path, audience }: { name: string; description: string; path: string; audience?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: 'Création de site internet',
    description,
    url: `${siteConfig.url}${path}`,
    provider: { '@id': businessId() },
    areaServed,
    ...(audience && { audience: { '@type': 'Audience', audienceType: audience } }),
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': businessId(),
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    areaServed,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: siteConfig.hoursSpec.days,
      opens: siteConfig.hoursSpec.opens,
      closes: siteConfig.hoursSpec.closes,
    },
    sameAs: siteConfig.social.map((s) => s.href),
  }
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}
