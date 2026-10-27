import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, MapPin, MessageCircle, Phone, Search, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { SpotlightCard } from '@/components/home/Spotlight'
import { faq, offers, sectors, steps } from '@/lib/data/offers'
import { projects } from '@/lib/data/projects'
import { testimonials } from '@/lib/data/testimonials'
import { siteConfig } from '@/lib/site'

function Heading({ chip, title, intro, center }: { chip: string; title: React.ReactNode; intro?: string; center?: boolean }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="chip">{chip}</p>
      <h2 className="heading-2 mt-6">{title}</h2>
      {intro && <p className="mt-6 text-lg leading-relaxed text-mist">{intro}</p>}
    </Reveal>
  )
}

export function Marquee() {
  const items = [...sectors.map((s) => s.name), 'Indépendants', 'Commerçants', 'Artisans']
  const row = (hidden?: boolean) => (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-10 whitespace-nowrap font-grotesk text-3xl font-semibold tracking-tight sm:text-5xl">
          <span className={i % 2 ? 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)]' : 'text-white/90'}>{item}</span>
          <span className="text-gradient text-2xl">✦</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-7 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee flex w-max">
        {row()}
        {row(true)}
      </div>
    </div>
  )
}

export function Bento() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <Heading
          chip="Ce que vous obtenez"
          title={<>Tout pour être <span className="text-gradient">trouvé</span> et <span className="text-gradient">choisi</span>.</>}
          intro="Chaque formule est adaptée à votre activité et chiffrée précisément après un premier échange gratuit."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {/* Formules */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <SpotlightCard className="flex h-full flex-col p-7 sm:p-9">
              <p className="text-sm text-mist">Les formules</p>
              <ul className="mt-6 flex-1 divide-y divide-white/10">
                {offers.map((offer) => (
                  <li key={offer.id}>
                    <Link href={`/services#${offer.id}`} className="group flex items-center justify-between gap-6 py-6">
                      <span>
                        <span className="block font-grotesk text-2xl font-semibold tracking-tight sm:text-3xl">{offer.name}</span>
                        <span className="mt-1 block text-mist">{offer.pitch}</span>
                      </span>
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-flame group-hover:to-blush">
                        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-mist">Sur devis · gratuit et sans engagement</p>
            </SpotlightCard>
          </Reveal>

          {/* Référencement local */}
          <Reveal className="md:col-span-2" delay={80}>
            <SpotlightCard className="h-full p-7">
              <Search className="h-5 w-5 text-flame" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">Visible sur Google</h3>
              <div className="mt-5 space-y-2 rounded-2xl border border-white/10 bg-night/60 p-4 text-xs" aria-hidden="true">
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-mist">
                  <Search className="h-3 w-3" /> menuisier {siteConfig.city.toLowerCase()}
                </div>
                <div className="rounded-xl border border-flame/40 bg-flame/10 p-2.5">
                  <p className="font-medium text-white">Votre entreprise</p>
                  <p className="text-mist">votre-entreprise.fr · Ouvert</p>
                </div>
                <div className="space-y-1.5 p-1 opacity-40">
                  <span className="block h-1.5 w-3/4 rounded-full bg-white/40" />
                  <span className="block h-1.5 w-1/2 rounded-full bg-white/30" />
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Mobile */}
          <Reveal className="md:col-span-2" delay={160}>
            <SpotlightCard className="flex h-full items-center gap-5 p-7">
              <div className="flex h-24 w-14 flex-none flex-col gap-1.5 rounded-xl border-2 border-white/20 p-1.5" aria-hidden="true">
                <span className="h-6 rounded-md bg-gradient-to-br from-flame to-blush" />
                <span className="h-1.5 w-3/4 rounded-full bg-white/30" />
                <span className="h-1.5 w-1/2 rounded-full bg-white/20" />
                <span className="mt-auto h-3 rounded-full bg-white/80" />
              </div>
              <div>
                <Smartphone className="h-5 w-5 text-blush" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold">Pensé pour le mobile</h3>
                <p className="mt-1 text-sm text-mist">Là où vos clients vous cherchent.</p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Interlocuteur */}
          <Reveal className="md:col-span-2">
            <SpotlightCard className="h-full p-7">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-flame to-blush font-grotesk text-lg font-semibold ring-4 ring-night">
                  {siteConfig.owner.charAt(0)}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-4 ring-night">
                  <MessageCircle className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">Un seul interlocuteur</h3>
              <p className="mt-1 text-sm text-mist">Vous parlez directement à la personne qui crée votre site.</p>
            </SpotlightCard>
          </Reveal>

          {/* Local */}
          <Reveal className="md:col-span-2" delay={80}>
            <SpotlightCard className="relative h-full overflow-hidden p-7">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(circle_at_75%_40%,black,transparent_65%)]"
                aria-hidden="true"
              />
              <span className="absolute right-10 top-8 flex h-4 w-4" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-60" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-flame" />
              </span>
              <MapPin className="relative h-5 w-5 text-flame" aria-hidden="true" />
              <h3 className="relative mt-4 text-lg font-semibold">Basé à {siteConfig.city}</h3>
              <p className="relative mt-1 text-sm text-mist">Un partenaire local, joignable après la mise en ligne.</p>
              <p className="relative mt-4 font-mono text-xs text-mist-dark">45.7772° N · 3.0870° E</p>
            </SpotlightCard>
          </Reveal>

          {/* Devis */}
          <Reveal className="md:col-span-2" delay={160}>
            <Link href="/contact" className="group block h-full">
              <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-flame via-blush to-violet p-7 transition-transform duration-300 group-hover:scale-[1.02]">
                <p className="text-sm text-white/80">{siteConfig.responseTime}</p>
                <div className="mt-8 flex items-end justify-between">
                  <h3 className="font-grotesk text-3xl font-semibold leading-none tracking-tight">
                    Devis
                    <br />
                    gratuit
                  </h3>
                  <ArrowUpRight className="h-7 w-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
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

// Affichées uniquement lorsque de vrais projets / avis sont renseignés
export function Projects() {
  if (projects.length === 0) return null
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <Heading chip="Réalisations" title="Projets récents." />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <Reveal key={project.title}>
              <SpotlightCard className="h-full p-8">
                <p className="text-sm text-mist">{project.sector}</p>
                <h3 className="mt-2 font-grotesk text-3xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-4 text-mist">{project.description}</p>
                {project.results && <p className="text-gradient mt-4 font-semibold">{project.results}</p>}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <Heading chip="Avis clients" title="Ils m’ont fait confiance." />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <SpotlightCard className="flex h-full flex-col p-8">
                <blockquote className="text-lg leading-relaxed">“{t.content}”</blockquote>
                <p className="mt-auto pt-8 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-mist"> — {t.role ? `${t.role}, ` : ''}{t.company}</span>
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
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
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/15 text-lg transition-all group-open:rotate-45 group-open:border-transparent group-open:bg-gradient-to-br group-open:from-flame group-open:to-blush"
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

export function Cta() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-20 text-center sm:px-16 sm:py-28">
          <div className="grad-animate absolute inset-0 bg-gradient-to-br from-flame/40 via-blush/30 to-violet/40" aria-hidden="true" />
          <div className="absolute inset-0 bg-night/40" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-grotesk text-5xl font-semibold leading-[0.95] tracking-[-0.035em] sm:text-7xl">
              Prêt à être trouvé ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Un appel de quelques minutes suffit pour savoir ce dont vous avez besoin.
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
