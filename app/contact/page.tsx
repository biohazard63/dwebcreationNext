import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact/ContactForm'
import { PageHeader } from '@/components/shared/blocks'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Contact & devis gratuit',
  description: `Parlez-moi de votre projet de site internet. Devis gratuit et sans engagement, ${siteConfig.responseTime.toLowerCase()}. Basé à ${siteConfig.city}.`,
  path: '/contact',
})

const details = [
  { icon: Phone, label: 'Téléphone', value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: 'Zone', value: `${siteConfig.city} et ${siteConfig.region}` },
  { icon: Clock, label: 'Horaires', value: siteConfig.hours },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet."
        intro="Décrivez votre activité en quelques lignes ou appelez-moi directement. Le devis est gratuit et sans engagement."
      />

      <section className="section bg-paper">
        <div className="container grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <ContactForm />

          <aside className="space-y-10">
            <div>
              <h2 className="heading-md">Vous préférez appeler ?</h2>
              <p className="mt-3 text-ink-600">
                C’est souvent le plus rapide. Si je suis indisponible, laissez un message : je vous rappelle.
              </p>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4 py-5">
                  <item.icon className="mt-0.5 h-5 w-5 flex-none text-copper" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-stone">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="break-all font-medium hover:text-copper-dark">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-stone">{siteConfig.responseTime}.</p>
          </aside>
        </div>
      </section>
    </>
  )
}
