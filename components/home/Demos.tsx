'use client'

import { useState } from 'react'
import { Hammer, Flower2, Scissors, UtensilsCrossed } from 'lucide-react'
import { Laptop, Phone } from '@/components/home/devices'
import { ConceptCoiffeur, ConceptFleuriste, ConceptMenuiserie, ConceptRestaurant } from '@/components/home/concepts'
import { Reveal } from '@/components/shared/Reveal'
import { cn } from '@/lib/utils'

const demos = [
  {
    id: 'menuiserie',
    label: 'Menuisier',
    icon: Hammer,
    feature: 'Galerie de réalisations filtrable et demande de devis.',
    Concept: ConceptMenuiserie,
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    icon: UtensilsCrossed,
    feature: 'Carte consultable par onglets et réservation de table.',
    Concept: ConceptRestaurant,
  },
  {
    id: 'coiffeur',
    label: 'Coiffeur',
    icon: Scissors,
    feature: 'Choix de la prestation et prise de rendez-vous en ligne.',
    Concept: ConceptCoiffeur,
  },
  {
    id: 'fleuriste',
    label: 'Fleuriste',
    icon: Flower2,
    feature: 'Boutique en ligne avec panier.',
    Concept: ConceptFleuriste,
  },
]

export function Demos() {
  const [active, setActive] = useState(demos[0].id)
  const demo = demos.find((d) => d.id === active) ?? demos[0]
  const { Concept } = demo

  return (
    <section id="demos" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet/10 blur-[160px]" aria-hidden="true" />
      <div className="container relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="chip">Démos interactives</p>
          <h2 className="heading-2 mt-6">
            Imaginez <span className="text-gradient">votre</span> site.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Choisissez un métier et essayez le site : cliquez, filtrez, réservez. Chaque concept a son propre
            style, parce que chaque entreprise est unique.
          </p>
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <div role="tablist" aria-label="Choisir un métier" className="glass flex flex-wrap justify-center gap-1 rounded-full p-1.5">
            {demos.map((d) => (
              <button
                key={d.id}
                type="button"
                role="tab"
                aria-selected={active === d.id}
                aria-controls="demo-panel"
                onClick={() => setActive(d.id)}
                className={cn(
                  'flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all sm:px-5',
                  active === d.id ? 'bg-white text-night shadow-lg' : 'text-mist hover:text-white'
                )}
              >
                <d.icon className="h-4 w-4" aria-hidden="true" />
                {d.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div id="demo-panel" role="tabpanel" className="mt-14">
          <div key={demo.id} className="build relative mx-auto max-w-5xl">
            <div className="hidden pr-[19%] md:block">
              <Laptop>
                <Concept />
              </Laptop>
            </div>
            <div className="mx-auto w-[min(78vw,300px)] md:absolute md:-bottom-10 md:right-0 md:w-[23%]">
              <Phone>
                <Concept mobile />
              </Phone>
            </div>
          </div>
          <p className="mt-16 text-center text-sm text-mist md:mt-20">
            <span className="mr-2 rounded-full border border-white/15 px-2.5 py-1 text-xs uppercase tracking-wider">
              Concept
            </span>
            Entreprise fictive · {demo.feature}
          </p>
        </div>
      </div>
    </section>
  )
}
