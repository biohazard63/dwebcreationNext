import { Hero } from '@/components/home/Hero'
import {
  CommitmentsSection,
  ProblemSection,
  ProjectsSection,
  SectorsSection,
  TestimonialsSection,
} from '@/components/home/sections'
import { FaqSection, FinalCta, JsonLd, MethodSection, OffersGrid, SectionHeading } from '@/components/shared/blocks'
import { faqJsonLd } from '@/lib/seo'

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <ProblemSection />
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Formules"
            title="Trois façons de vous rendre visible."
            intro="Chaque formule est adaptée à votre activité et chiffrée précisément après un premier échange gratuit."
          />
          <div className="mt-16">
            <OffersGrid />
          </div>
        </div>
      </section>
      <SectorsSection />
      <MethodSection />
      <ProjectsSection />
      <CommitmentsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  )
}
