import { Metadata } from 'next'
import { generateMetadata } from '@/lib/utils'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutJourney } from '@/components/sections/about/AboutJourney'
import { AboutPhilosophy } from '@/components/sections/about/AboutPhilosophy'
import { AboutExpertise } from '@/components/sections/about/AboutExpertise'
import { AboutCTA } from '@/components/sections/about/AboutCTA'

export const metadata: Metadata = generateMetadata({
  title: 'À propos de moi - D Web Créations',
  description: 'Découvrez mon parcours, ma philosophie et les valeurs qui animent chacun de mes projets de développement web.',
})

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutJourney />
      <AboutPhilosophy />
      <AboutExpertise />
      <AboutCTA />
    </main>
  )
}
