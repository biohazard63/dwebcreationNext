import Link from 'next/link'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/shared/Reveal'
import { siteConfig } from '@/lib/site'
import { faq, offers, steps } from '@/lib/data/offers'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  dark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  align?: 'left' | 'center'
  dark?: boolean
}) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className={cn('eyebrow', dark && 'text-copper-light')}>{eyebrow}</p>
      <h2 className={cn('heading-lg mt-4', dark ? 'text-paper-50' : 'text-ink')}>{title}</h2>
      {intro && <p className={cn('lead mt-5', dark && 'text-stone-light')}>{intro}</p>}
    </Reveal>
  )
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: React.ReactNode
  intro: string
}) {
  return (
    <section className="bg-ink pb-20 pt-20 text-paper-50 sm:pb-24 sm:pt-28">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow text-copper-light">{eyebrow}</p>
          <h1 className="heading-xl mt-5">{title}</h1>
          <p className="lead mt-6 max-w-2xl text-stone-light">{intro}</p>
        </div>
      </div>
    </section>
  )
}

export function OffersGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
      {offers.map((offer, i) => (
        <Reveal key={offer.id} delay={i * 90} className="flex flex-col bg-paper-50 p-8 sm:p-10" as="article">
          <div id={offer.id} className="scroll-mt-28" />
          <p className="text-sm text-stone">{offer.forWho}</p>
          <h3 className="heading-md mt-3">{offer.name}</h3>
          <p className="mt-4 text-ink-600">{offer.pitch}</p>
          <ul className="mt-8 space-y-3 border-t border-line pt-8 text-[0.95rem]">
            {offer.includes.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 flex-none text-copper" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center justify-between pt-10">
            <span className="text-sm text-stone">Sur devis</span>
            <Link
              href={`/contact?projet=${offer.id}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-copper-dark"
            >
              En parler
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function MethodSection() {
  return (
    <section className="section bg-ink text-paper-50">
      <div className="container">
        <SectionHeading
          dark
          eyebrow="Comment ça se passe"
          title="Une méthode simple, sans jargon."
          intro="Vous êtes expert de votre métier, je m’occupe du reste. À chaque étape, vous savez où on en est et ce qui vient ensuite."
        />
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="border-t border-line-dark pt-6">
              <span className="font-display text-4xl text-copper-light">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-light">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section className="section">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="Ce que l’on me demande souvent."
            intro="Une autre question ? Le plus simple est de m’appeler ou de m’écrire."
          />
          <Reveal className="mt-8">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 font-medium text-copper-dark hover:underline"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </Reveal>
        </div>
        <Reveal className="divide-y divide-line border-y border-line">
          {faq.map((item) => (
            <details key={item.question} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium">
                {item.question}
                <span
                  className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-ink/20 text-sm transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-600">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function FinalCta({
  title = 'Parlons de votre projet.',
  text = 'Un appel de quelques minutes suffit pour savoir ce dont vous avez besoin. Devis gratuit, sans engagement.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-paper-50 sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-copper/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="heading-lg mx-auto max-w-2xl">{title}</h2>
            <p className="lead mx-auto mt-6 max-w-xl text-stone-light">{text}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <a href={siteConfig.phoneHref}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-stone-light">{siteConfig.responseTime}</p>
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
