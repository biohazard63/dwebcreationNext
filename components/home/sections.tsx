import Link from 'next/link'
import { ArrowUpRight, MapPin, MessageCircle, Search, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Heading } from '@/components/shared/blocks'
import { SpotlightCard } from '@/components/home/Spotlight'
import { offers, sectors } from '@/lib/data/offers'
import { metiers } from '@/lib/data/metiers'
import { articles } from '@/lib/data/articles'
import { projects } from '@/lib/data/projects'
import { testimonials } from '@/lib/data/testimonials'
import { siteConfig } from '@/lib/site'

export function Marquee() {
  const items = [...sectors.map((s) => s.name), 'Indépendants', 'Commerçants', 'Artisans']
  const row = (hidden?: boolean) => (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-10 whitespace-nowrap font-grotesk text-3xl font-semibold tracking-tight sm:text-5xl">
          <span className={i % 2 ? 'text-transparent [-webkit-text-stroke:1px_rgb(var(--fg)/0.35)]' : 'text-white/90'}>{item}</span>
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
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-flame group-hover:to-blush group-hover:text-snow">
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
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-flame to-blush font-grotesk text-lg font-semibold text-snow ring-4 ring-night">
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
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(var(--fg)/0.18)_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(circle_at_75%_40%,black,transparent_65%)]"
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
              <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-flame via-blush to-violet p-7 text-snow transition-transform duration-300 group-hover:scale-[1.02]">
                <p className="text-sm text-snow/80">{siteConfig.responseTime}</p>
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

export function SimulatorTeaser() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <Reveal>
          <Link
            href="/simulateur"
            className="group relative flex flex-col gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-white/25 sm:p-12 md:flex-row md:items-center md:justify-between"
          >
            <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-flame/20 blur-[90px]" aria-hidden="true" />
            <div className="relative">
              <p className="chip">Simulateur · 1 minute</p>
              <h2 className="mt-5 font-grotesk text-3xl font-semibold tracking-tight sm:text-5xl">
                Quel site pour <span className="text-gradient">votre activité</span> ?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-mist">
                6 questions, et vous savez quelle formule vous correspond. Sans inscription.
              </p>
            </div>
            <span className="relative inline-flex h-14 flex-none items-center gap-2 self-start rounded-full bg-white px-8 font-medium text-night transition-transform group-hover:scale-[1.04] md:self-auto">
              Lancer le simulateur
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

// Liens vers les pages métier et les conseils : utile aux visiteurs et au référencement
export function ExploreLinks() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="chip">Par métier</p>
          <h2 className="mt-5 font-grotesk text-3xl font-semibold tracking-tight">Un site pensé pour votre activité</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {metiers.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/site-internet/${m.slug}`}
                  className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm transition-colors hover:border-flame/60 hover:text-flame"
                >
                  Site pour {m.plural}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={90}>
          <p className="chip">Conseils</p>
          <h2 className="mt-5 font-grotesk text-3xl font-semibold tracking-tight">À lire avant de vous lancer</h2>
          <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {articles.slice(0, 3).map((a) => (
              <li key={a.slug}>
                <Link href={`/conseils/${a.slug}`} className="group flex items-center justify-between gap-4 py-4 font-medium hover:text-flame">
                  {a.title}
                  <ArrowUpRight className="h-4 w-4 flex-none text-mist group-hover:text-flame" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
