import { Hero } from '@/components/home/Hero'
import { Demos } from '@/components/home/Demos'
import { BeforeAfter } from '@/components/home/BeforeAfter'
import { Bento, Cta, Faq, Marquee, Method, Projects, Testimonials } from '@/components/home/sections'
import { JsonLd } from '@/components/shared/blocks'
import { faqJsonLd } from '@/lib/seo'

export default function HomePage() {
  return (
    <div className="overflow-x-clip bg-night text-white">
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <Marquee />
      <Demos />
      <Bento />
      <BeforeAfter />
      <Method />
      <Projects />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  )
}
