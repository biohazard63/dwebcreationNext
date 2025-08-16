import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: "DWebCreation - Agence Web Moderne",
  description: "Agence web spécialisée dans la création de sites web modernes et performants. Développement sur mesure avec Next.js, React et TypeScript.",
  url: "https://dwebcreation.com",
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  )
}
