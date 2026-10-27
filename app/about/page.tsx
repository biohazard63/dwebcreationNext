import { Cta, Heading, PageHeader } from '@/components/shared/blocks'
import { Reveal } from '@/components/shared/Reveal'
import { SpotlightCard } from '@/components/home/Spotlight'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = pageMetadata({
  title: `À propos — Développeur web à ${siteConfig.city}`,
  description: `${siteConfig.owner}, développeur web indépendant à ${siteConfig.city}. Mon parcours, ma façon de travailler et ce qui compte pour moi dans chaque projet.`,
  path: '/about',
})

const timeline = [
  { year: '2019', title: 'Formation Référent Numérique', text: 'Début de mon parcours dans le développement web.' },
  { year: '2020', title: 'Première expérience en agence', text: 'Stage en agence web et découverte des projets clients.' },
  { year: '2020 – 2022', title: 'Premiers pas en freelance', text: 'Création de sites pour des clients aux besoins variés.' },
  { year: '2023 – 2024', title: 'Retour en agence', text: 'Approfondissement technique et formations spécialisées.' },
  { year: '2024', title: 'Indépendant à plein temps', text: `Lancement de ${siteConfig.name} à ${siteConfig.city}.` },
]

const values = [
  {
    title: 'La clarté avant tout',
    text: 'Pas de jargon technique : je vous explique les choix simplement, et vous décidez en connaissance de cause.',
  },
  {
    title: 'Des résultats concrets',
    text: 'Un beau site ne suffit pas. Il doit être trouvé, se charger vite et donner envie de vous contacter.',
  },
  {
    title: 'Une relation durable',
    text: 'Je reste disponible après la mise en ligne pour faire évoluer votre site avec votre activité.',
  },
]

const skills = ['Next.js & React', 'JavaScript / TypeScript', 'HTML & CSS', 'Tailwind CSS', 'WordPress', 'PHP', 'API REST', 'Bases de données']

export default function AboutPage() {
  return (
    <div className="overflow-x-clip">
      <PageHeader
        breadcrumbs={[{ name: 'À propos', href: '/about' }]}
        chip="À propos"
        title={<>Bonjour, moi c’est <span className="text-gradient">{siteConfig.owner}</span>.</>}
        intro={`Développeur web indépendant à ${siteConfig.city}, j’aide les artisans, commerçants et indépendants à exister en ligne avec des sites modernes, rapides et efficaces.`}
      />

      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Heading chip="Ma démarche" title={<>Un site doit <span className="text-gradient">travailler</span> pour vous.</>} />
          <Reveal className="space-y-6 text-lg leading-relaxed text-mist lg:pt-16">
            <p>
              Beaucoup de professionnels ont un site qui ne leur rapporte rien, ou n’en ont pas du tout faute
              de temps. Mon rôle est de vous décharger de cette partie : comprendre votre métier, vos clients,
              et construire un site qui vous ressemble et qui donne envie de vous appeler.
            </p>
            <p>
              Je travaille seul, directement avec vous. Vous avez toujours le même interlocuteur, qui connaît
              votre projet de A à Z.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container">
          <Heading chip="Ce qui compte pour moi" title="Trois principes, sur chaque projet." />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 90} className="h-full">
                <SpotlightCard className="h-full p-8">
                  <span className="text-gradient font-grotesk text-5xl font-semibold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{value.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <Heading chip="Parcours" title={<>Du code depuis <span className="text-gradient">2019</span>.</>} />
            <Reveal className="mt-10">
              <p className="text-sm font-medium">Outils et technologies</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="chip text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <ol className="relative border-l border-white/10">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.year} delay={i * 70} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-flame to-blush ring-4 ring-night" aria-hidden="true" />
                <p className="text-sm text-flame">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-mist">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Cta title="On en discute ?" />
    </div>
  )
}
