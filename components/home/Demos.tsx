'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { DemoDevices, demoConcepts, type DemoId } from '@/components/demos/DemoDevices'
import { Reveal } from '@/components/shared/Reveal'
import { demos } from '@/lib/data/demos'
import { cn } from '@/lib/utils'

export function Demos() {
  const [active, setActive] = useState(demos[0].id)
  const demo = demos.find((d) => d.id === active) ?? demos[0]

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
            {demos.map((d) => {
              const Icon = demoConcepts[d.id as DemoId].icon
              return (
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
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {d.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div id="demo-panel" role="tabpanel" className="mt-14">
          <div key={demo.id} className="build">
            <DemoDevices id={demo.id as DemoId} />
          </div>
          <div className="mt-16 flex flex-col items-center gap-4 text-center text-sm text-mist md:mt-20">
            <p>
              <span className="mr-2 rounded-full border border-white/15 px-2.5 py-1 text-xs uppercase tracking-wider">
                Concept
              </span>
              Entreprise fictive · {demo.feature}
            </p>
            <Link href={`/demos/${demo.id}`} className="group inline-flex items-center gap-1.5 font-medium text-white hover:text-flame">
              Voir la démo en détail
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
