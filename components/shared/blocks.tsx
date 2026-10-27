import Link from 'next/link'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { SpotlightCard } from '@/components/home/Spotlight'
import { faq, offers, steps } from '@/lib/data/offers'
import { siteConfig } from '@/lib/site'

export function Heading({ chip, title, intro, center }: { chip: string; title: React.ReactNode; intro?: string; center?: boolean }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="chip">{chip}</p>
      <h2 className="heading-2 mt-6">{title}</h2>
      {intro && <p className="mt-6 text-lg leading-relaxed text-mist">{intro}</p>}
    </Reveal>
  )
}


export type Crumb = { name: string; href: string }

// Fil d'Ariane visible + données structurées BreadcrumbList pour Google
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: 'Accueil', href: '/' }, ...items]
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href === '/' ? '' : item.href}`,
    })),
  }
  return (
    <>
      <JsonLd data={data} />
      <nav aria-label="Fil d’Ariane" className="text-sm text-mist">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">›</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-white">{item.name}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export function PageHeader({
  chip,
  title,
  intro,
  breadcrumbs,
}: {
  chip: string
  title: React.ReactNode
  intro: string
  breadcrumbs?: Crumb[]
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-48 h-[32rem] w-[32rem] rounded-full bg-violet/20 blur-[140px]" />
        <div className="absolute -right-40 -top-20 h-[26rem] w-[26rem] rounded-full bg-flame/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--fg)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--fg)/0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      </div>
      <div className="container relative pb-16 pt-10 sm:pb-20 sm:pt-14">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="mt-10 max-w-4xl sm:mt-12">
          <p className="chip">{chip}</p>
          <h1 className="heading-hero mt-7">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">{intro}</p>
        </div>
      </div>
    </section>
  )
}

export function OffersDetailed() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {offers.map((offer, i) => (
        <Reveal key={offer.id} delay={i * 90} className="h-full">
          <SpotlightCard className="flex h-full flex-col p-8">
            <div id={offer.id} className="scroll-mt-28" />
            <p className="text-sm text-mist">{offer.forWho}</p>
            <h3 className="mt-3 font-grotesk text-3xl font-semibold tracking-tight">{offer.name}</h3>
            <p className="mt-4 text-mist">{offer.pitch}</p>
            <ul className="mt-8 space-y-3 border-t border-white/10 pt-8 text-[0.95rem]">
              {offer.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-flame" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pt-10">
              <span className="text-sm text-mist">Sur devis</span>
              <Link href={`/contact?projet=${offer.id}`} className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-flame">
                En parler
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  )
}

export function Method() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <Heading
          chip="Comment ça se passe"
          title={<>Simple, clair, <span className="text-gradient">sans jargon</span>.</>}
          intro="Vous êtes expert de votre métier, je m’occupe du reste. À chaque étape, vous savez où on en est."
        />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative">
              <div className="h-px w-full bg-white/10">
                <div className="step-line h-px w-full bg-gradient-to-r from-flame via-blush to-violet" style={{ transitionDelay: `${i * 150 + 200}ms` }} />
              </div>
              <span className="text-gradient mt-8 block font-grotesk text-6xl font-semibold tracking-tight">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <Heading chip="Questions fréquentes" title="Vos questions, mes réponses." />
          <Reveal className="mt-8">
            <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 font-medium text-white hover:text-flame">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </Reveal>
        </div>
        <Reveal className="space-y-3">
          {faq.map((item) => (
            <details key={item.question} className="group glass rounded-2xl px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                {item.question}
                <span
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/15 text-lg transition-all group-open:rotate-45 group-open:border-transparent group-open:bg-gradient-to-br group-open:from-flame group-open:to-blush group-open:text-snow"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-mist">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Cta({
  title = 'Prêt à être trouvé ?',
  text = 'Un appel de quelques minutes suffit pour savoir ce dont vous avez besoin.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-20 text-center sm:px-16 sm:py-28">
          <div className="grad-animate absolute inset-0 bg-gradient-to-br from-flame/40 via-blush/30 to-violet/40" aria-hidden="true" />
          <div className="absolute inset-0 bg-night/40" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-grotesk text-5xl font-semibold leading-[0.95] tracking-[-0.035em] sm:text-7xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              {text}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 font-medium text-night transition-transform hover:scale-[1.03]"
              >
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-14 items-center gap-2 rounded-full border border-white/30 px-8 font-medium text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-white/80">
              {['Devis gratuit', 'Sans engagement', siteConfig.responseTime].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
