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
        chip="Contact"
        title={<>Parlons de <span className="text-gradient">votre projet</span>.</>}
        intro="Décrivez votre activité en quelques lignes ou appelez-moi directement. Le devis est gratuit et sans engagement."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <ContactForm />

          <aside className="space-y-10">
            <div>
              <h2 className="font-grotesk text-3xl font-semibold tracking-tight">Vous préférez appeler ?</h2>
              <p className="mt-3 text-mist">
                C’est souvent le plus rapide. Si je suis indisponible, laissez un message : je vous rappelle.
              </p>
            </div>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4 py-5">
                  <item.icon className="mt-0.5 h-5 w-5 flex-none text-flame" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-mist">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="break-all font-medium hover:text-flame">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-mist">{siteConfig.responseTime}.</p>
          </aside>
        </div>
      </section>
    </>
  )
}
