import Link from 'next/link'
import { ArrowRight, MousePointerClick, Search, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { SectionHeading } from '@/components/shared/blocks'
import { sectors } from '@/lib/data/offers'
import { projects } from '@/lib/data/projects'
import { testimonials } from '@/lib/data/testimonials'
import { siteConfig } from '@/lib/site'

const problems = [
  {
    icon: Search,
    title: 'Ils vous cherchent sur Google',
    text: `« Plombier ${siteConfig.city} », « restaurant près de moi »… Si vous n’apparaissez pas, c’est un concurrent qui reçoit l’appel.`,
  },
  {
    icon: Smartphone,
    title: 'Ils vous découvrent sur leur téléphone',
    text: 'La plupart des visites se font sur mobile. Un site lent ou illisible, et le visiteur repart aussitôt.',
  },
  {
    icon: MousePointerClick,
    title: 'Ils veulent vous joindre tout de suite',
    text: 'Numéro visible, bouton d’appel, demande de devis : chaque page est pensée pour transformer une visite en contact.',
  },
]

export function ProblemSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Pourquoi un site"
          title="Vos futurs clients vous cherchent déjà en ligne."
          intro="Le bouche-à-oreille reste précieux, mais aujourd’hui on vérifie presque toujours sur internet avant d’appeler. Votre site doit rassurer et donner envie de vous contacter."
        />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="border-t border-line pt-8">
              <item.icon className="h-6 w-6 text-copper" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-medium">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectorsSection() {
  return (
    <section className="section bg-paper">
      <div className="container">
        <SectionHeading
          eyebrow="Pour qui"
          title="Pensé pour les métiers de terrain."
          intro="Chaque activité a ses besoins. Votre site met en avant ce qui compte vraiment pour vos clients."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal key={sector.name} delay={(i % 3) * 90} className="bg-paper p-8">
              <h3 className="font-display text-2xl">{sector.name}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{sector.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const commitments = [
  {
    title: 'Un seul interlocuteur',
    text: 'Vous parlez directement à la personne qui crée votre site. Pas d’intermédiaire, pas de standard.',
  },
  {
    title: 'Un prix clair avant de commencer',
    text: 'Le devis détaille tout ce qui est inclus. Vous validez, puis on démarre.',
  },
  {
    title: 'Du sur-mesure, pas un modèle',
    text: 'Votre site est conçu pour votre métier et votre clientèle, pas copié d’un thème générique.',
  },
  {
    title: 'Un partenaire local',
    text: `Basé à ${siteConfig.city}, je connais le tissu local et reste joignable après la mise en ligne.`,
  },
]

export function CommitmentsSection() {
  return (
    <section className="section">
      <div className="container grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Mes engagements"
            title="Travailler avec un indépendant, c’est plus simple."
          />
          <Reveal className="mt-8">
            <Link href="/about" className="group inline-flex items-center gap-2 font-medium text-copper-dark">
              Mieux me connaître
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {commitments.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 90}>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Affichées uniquement lorsque de vrais projets / avis sont renseignés
export function ProjectsSection() {
  if (projects.length === 0) return null
  return (
    <section className="section bg-paper">
      <div className="container">
        <SectionHeading eyebrow="Réalisations" title="Quelques projets récents." />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <Reveal key={project.title} as="article" className="rounded-2xl border border-line bg-paper-50 p-8">
              <p className="text-sm text-stone">{project.sector}</p>
              <h3 className="heading-md mt-2">{project.title}</h3>
              <p className="mt-4 text-ink-600">{project.description}</p>
              {project.results && <p className="mt-4 font-medium text-copper-dark">{project.results}</p>}
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link href="/portfolio" className="group inline-flex items-center gap-2 font-medium text-copper-dark">
            Toutes les réalisations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  if (testimonials.length === 0) return null
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Avis clients" title="Ils m’ont fait confiance." />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.name} as="article" className="flex flex-col rounded-2xl border border-line p-8">
              <blockquote className="font-display text-xl leading-snug">“{t.content}”</blockquote>
              <p className="mt-auto pt-8 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="text-stone"> — {t.role ? `${t.role}, ` : ''}{t.company}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
