import { Metadata } from 'next'
import { HomeHero } from '@/components/sections/HomeHero'
import { HomeTrustBar } from '@/components/sections/HomeTrustBar'
import { HomeServices } from '@/components/sections/HomeServices'
import { HomePortfolio } from '@/components/sections/HomePortfolio'
import { HomeTestimonials } from '@/components/sections/HomeTestimonials'
import { HomeCTA } from '@/components/sections/HomeCTA'
import { StickyCTA } from '@/components/ui/sticky-cta'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: "DWebCreation - Agence Web Moderne",
  description: "Agence web spécialisée dans la création de sites web modernes et performants. Développement sur mesure avec Next.js, React et TypeScript.",
  url: "https://dwebcreation.com",
})

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustBar />
      <HomeServices />
      <HomePortfolio />
      <HomeTestimonials />
      <HomeCTA />
      <StickyCTA />
    </>
  )
}
