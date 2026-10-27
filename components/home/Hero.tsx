'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Gauge, MapPin, Smartphone } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const promises = ['Devis gratuit', siteConfig.responseTime, 'Un seul interlocuteur']

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)

  // Halo et inclinaison 3D qui suivent la souris (désactivés sur écran tactile / mouvement réduit)
  useEffect(() => {
    const section = sectionRef.current
    const tilt = tiltRef.current
    if (!section || !tilt) return
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        section.style.setProperty('--gx', `${x * 100}%`)
        section.style.setProperty('--gy', `${y * 100}%`)
        tilt.style.transform = `perspective(1400px) rotateY(${(x - 0.5) * 10}deg) rotateX(${(0.5 - y) * 8}deg)`
      })
    }
    const onLeave = () => {
      tilt.style.transform = ''
    }
    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Lueurs de fond */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-violet/25 blur-[140px]" />
        <div className="absolute -right-32 top-20 h-[30rem] w-[30rem] rounded-full bg-flame/20 blur-[140px]" />
        <div
          className="absolute inset-0 transition-[background] duration-300"
          style={{
            background:
              'radial-gradient(600px circle at var(--gx, 70%) var(--gy, 30%), rgba(255, 61, 127, 0.12), transparent 60%)',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--fg)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--fg)/0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="container relative grid gap-16 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:pb-32 lg:pt-24">
        <div>
          {/* Le titre principal contient la recherche visée (création de sites + ville) puis l'accroche */}
          <h1>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-flame to-blush" aria-hidden="true" />
              Création de sites internet à {siteConfig.city}
            </span>
            <span className="heading-hero mt-7 block">
              Des sites qui font <span className="text-gradient grad-animate">briller</span> votre métier.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
            Développeur web indépendant, je conçois pour les artisans, commerçants et indépendants du{' '}
            {siteConfig.region} des sites modernes, rapides et bien référencés qui transforment vos visiteurs en clients.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-flame via-blush to-violet px-8 font-medium text-snow shadow-[0_10px_40px_-10px_rgba(255,61,127,0.7)] transition-transform hover:scale-[1.03]"
            >
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="#demos"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-8 font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Voir les démos
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-mist">
            {promises.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-flame" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-hidden="true">
          <div ref={tiltRef} className="transition-transform duration-300 ease-out [transform-style:preserve-3d]">
            <BuildingMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

// Maquette de site qui s'assemble pièce par pièce au chargement
function BuildingMockup() {
  const d = (ms: number) => ({ animationDelay: `${ms}ms` })
  return (
    <div className="relative">
      <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
        {/* Barre du navigateur */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[11px] text-mist">
            votre-entreprise.fr
          </span>
        </div>

        <div className="space-y-5 p-5 sm:p-7">
          {/* Navigation */}
          <div className="build flex items-center justify-between" style={d(150)}>
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-lg bg-gradient-to-br from-flame to-blush" />
              <span className="h-2.5 w-20 rounded-full bg-white/30" />
            </div>
            <div className="hidden gap-3 sm:flex">
              <span className="h-2 w-10 rounded-full bg-white/15" />
              <span className="h-2 w-10 rounded-full bg-white/15" />
              <span className="h-2 w-10 rounded-full bg-white/15" />
            </div>
          </div>

          {/* Bandeau principal */}
          <div className="build relative overflow-hidden rounded-xl p-6 sm:p-8" style={d(450)}>
            <div className="grad-animate absolute inset-0 bg-gradient-to-br from-flame/70 via-blush/60 to-violet/70" />
            <div className="relative space-y-3">
              <span className="block h-4 w-3/4 rounded-full bg-snow/90" />
              <span className="block h-4 w-1/2 rounded-full bg-snow/90" />
              <span className="block h-2 w-2/3 rounded-full bg-snow/50" />
              <span className="mt-4 inline-block h-8 w-28 rounded-full bg-snow shadow-lg" />
            </div>
          </div>

          {/* Cartes */}
          <div className="grid grid-cols-3 gap-3">
            {[800, 950, 1100].map((ms) => (
              <div key={ms} className="build space-y-2 rounded-xl border border-white/10 bg-white/[0.04] p-3" style={d(ms)}>
                <span className="block h-10 rounded-lg bg-white/10" />
                <span className="block h-2 w-3/4 rounded-full bg-white/25" />
                <span className="block h-2 w-1/2 rounded-full bg-white/15" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badges flottants */}
      <div className="build absolute hidden sm:block -left-4 top-[38%] sm:-left-12" style={d(1400)}>
        <div className="float glass dark:bg-night-700/90 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm shadow-xl">
          <Smartphone className="h-4 w-4 text-flame" />
          Parfait sur mobile
        </div>
      </div>
      <div className="build absolute hidden sm:block -right-3 top-1/2 sm:-right-8" style={d(1600)}>
        <div className="float glass dark:bg-night-700/90 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm shadow-xl [animation-delay:1.5s]">
          <Gauge className="h-4 w-4 text-blush" />
          Chargement rapide
        </div>
      </div>
      <div className="build absolute -bottom-6 left-6 sm:left-12" style={d(1800)}>
        <div className="float glass dark:bg-night-700/90 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl [animation-delay:3s]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-flame to-blush">
            <MapPin className="h-4 w-4 text-snow" />
          </span>
          <span className="text-sm">
            <span className="block font-medium">Nouvelle demande de devis</span>
            <span className="block text-xs text-mist">via votre site · à l’instant</span>
          </span>
        </div>
      </div>
    </div>
  )
}
