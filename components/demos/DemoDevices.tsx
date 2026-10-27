'use client'

import { Flower2, Hammer, Scissors, UtensilsCrossed } from 'lucide-react'
import { Laptop, Phone } from '@/components/home/devices'
import { ConceptCoiffeur, ConceptFleuriste, ConceptMenuiserie, ConceptRestaurant } from '@/components/home/concepts'

export const demoConcepts = {
  menuiserie: { Concept: ConceptMenuiserie, icon: Hammer },
  restaurant: { Concept: ConceptRestaurant, icon: UtensilsCrossed },
  coiffeur: { Concept: ConceptCoiffeur, icon: Scissors },
  fleuriste: { Concept: ConceptFleuriste, icon: Flower2 },
} as const

export type DemoId = keyof typeof demoConcepts

// Ordinateur + téléphone affichant la même démo
export function DemoDevices({ id }: { id: DemoId }) {
  const { Concept } = demoConcepts[id]
  return (
    <div className="relative mx-auto max-w-5xl">
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
  )
}
