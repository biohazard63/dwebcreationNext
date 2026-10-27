'use client'

import { useState } from 'react'
import { ChevronsLeftRight } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'

export function BeforeAfter() {
  const [pos, setPos] = useState(50)

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="chip">Refonte</p>
          <h2 className="heading-2 mt-6">
            Votre site a pris <span className="text-gradient">un coup de vieux</span> ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Faites glisser le curseur. Même contenu, même entreprise : seule la première impression change.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative mx-auto aspect-[4/5] max-w-5xl select-none overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60 sm:aspect-[16/9]">
            <OldSite />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
              <NewSite />
            </div>

            {/* Poignée */}
            <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden="true">
              <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
              <div className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-night shadow-xl">
                <ChevronsLeftRight className="h-5 w-5" />
              </div>
            </div>
            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">Avant</span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-night">Après</span>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparer l’ancien et le nouveau site"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
          <p className="mt-6 text-center text-sm text-mist">Exemple illustratif · entreprise fictive</p>
        </Reveal>
      </div>
    </section>
  )
}

function OldSite() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#D4D0C8] p-3 text-black sm:p-6" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <div className="border-4 border-double border-[#000080] bg-white p-3 sm:p-5">
        <div className="bg-[#000080] p-2 text-center text-lg font-bold text-yellow-300 sm:text-3xl">
          ★ Bienvenue sur le site de la Boulangerie Martin ★
        </div>
        <p className="mt-2 text-center text-xs sm:text-sm">
          <span className="text-[#0000EE] underline">Accueil</span> | <span className="text-[#0000EE] underline">Nos pains</span> |{' '}
          <span className="text-[#0000EE] underline">Plan d’accès</span> | <span className="text-[#551A8B] underline">Livre d’or</span>
        </p>
        <table className="mt-3 w-full border-collapse border border-gray-500 text-xs sm:text-sm">
          <tbody>
            <tr>
              <td className="w-1/3 border border-gray-500 bg-[#FFFFCC] p-2 align-top">
                <b>Horaires :</b>
                <br />
                Mardi au samedi
                <br />
                6h30 - 19h30
              </td>
              <td className="border border-gray-500 p-2 align-top">
                Notre boulangerie vous accueille depuis de nombreuses années. Pain, viennoiseries, pâtisseries.
                Commandes par téléphone uniquement.
                <p className="mt-2 font-bold text-red-600">!!! SITE EN CONSTRUCTION !!!</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-center text-[10px] text-gray-600 sm:text-xs">
          Vous êtes le visiteur n° 000127 — Site optimisé pour Internet Explorer 6 en 800×600
        </p>
      </div>
    </div>
  )
}

function NewSite() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1C1410] font-grotesk text-[#FBF3E8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,#E8A15C66,transparent_45%),radial-gradient(circle_at_10%_100%,#C2410C55,transparent_50%)]" />
      <div className="relative flex h-full flex-col p-5 sm:p-10">
        <nav className="flex items-center justify-between text-sm">
          <span className="text-lg font-semibold sm:text-2xl">Boulangerie Martin</span>
          <span className="hidden gap-6 opacity-70 sm:flex">
            <span>Nos pains</span>
            <span>Commander</span>
            <span>Nous trouver</span>
          </span>
        </nav>
        <div className="mt-auto grid items-end gap-6 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E8A15C] sm:text-sm">Artisan boulanger</p>
            <h3 className="mt-3 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
              Le bon pain,
              <br />
              cuit chaque matin.
            </h3>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-[#E8A15C] px-5 py-2.5 font-medium text-[#1C1410]">Commander en ligne</span>
              <span className="rounded-full border border-white/25 px-5 py-2.5">Horaires & accès</span>
            </div>
          </div>
          <div className="hidden grid-cols-2 gap-3 sm:grid">
            {['Levain', 'Croissants', 'Tartes', 'Brioches'].map((x, i) => (
              <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="h-14 rounded-xl" style={{ background: `linear-gradient(135deg, hsl(${28 + i * 6} 70% ${55 - i * 5}%), hsl(${18 + i * 4} 65% ${35 - i * 3}%))` }} />
                <p className="mt-2 text-sm">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
