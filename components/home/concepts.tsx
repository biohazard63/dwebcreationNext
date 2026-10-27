'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

// Mini-sites de démonstration (entreprises fictives). « mobile » adapte la mise en page au téléphone.
type ConceptProps = { mobile?: boolean }

function MiniNav({
  logo,
  links,
  mobile,
  className,
  cta,
}: {
  logo: React.ReactNode
  links: string[]
  mobile?: boolean
  className?: string
  cta: React.ReactNode
}) {
  return (
    <nav className={cn('flex items-center justify-between', mobile ? 'px-5 pb-4 pt-14' : 'px-12 py-6', className)}>
      {logo}
      {mobile ? (
        <span className="flex flex-col gap-1.5">
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </span>
      ) : (
        <div className="flex items-center gap-8 text-[15px]">
          {links.map((l) => (
            <span key={l} className="opacity-70">{l}</span>
          ))}
          {cta}
        </div>
      )}
    </nav>
  )
}

/* ---------- Menuiserie ---------- */
const woodGallery = {
  Cuisines: [
    { title: 'Cuisine en chêne massif', g: 'from-[#C89B6D] to-[#8A5A33]' },
    { title: 'Îlot central noyer', g: 'from-[#9C6B45] to-[#5B3A22]' },
    { title: 'Façades sur mesure', g: 'from-[#D9B88F] to-[#A77A4E]' },
  ],
  Escaliers: [
    { title: 'Escalier quart tournant', g: 'from-[#B98A5E] to-[#6E4528]' },
    { title: 'Marches suspendues', g: 'from-[#E0C29C] to-[#AD8256]' },
    { title: 'Garde-corps bois & acier', g: 'from-[#8E6A4C] to-[#3F2B1D]' },
  ],
  Dressings: [
    { title: 'Dressing sous pente', g: 'from-[#E6D2B5] to-[#B89670]' },
    { title: 'Placard coulissant', g: 'from-[#C4A27C] to-[#7D5A3B]' },
    { title: 'Bibliothèque murale', g: 'from-[#A57B54] to-[#5E3F27]' },
  ],
}

export function ConceptMenuiserie({ mobile }: ConceptProps) {
  const [tab, setTab] = useState<keyof typeof woodGallery>('Cuisines')
  return (
    <div className="min-h-full bg-[#F4EEE5] font-sans text-[#2B2118]">
      <MiniNav
        mobile={mobile}
        logo={<span className="font-display text-2xl">Atelier Chêne & Co</span>}
        links={['Savoir-faire', 'Réalisations', 'Contact']}
        cta={<span className="rounded-full bg-[#2B2118] px-5 py-2.5 text-sm text-[#F4EEE5]">Devis gratuit</span>}
      />
      <header className={cn('grid gap-8', mobile ? 'px-5 pb-8' : 'grid-cols-[1.1fr_1fr] items-center px-12 pb-12 pt-4')}>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#A0673A]">Menuisier · Clermont-Ferrand</p>
          <p className={cn('mt-4 font-display leading-[0.95]', mobile ? 'text-5xl' : 'text-7xl')}>
            Le bois,
            <br />
            <em className="text-[#A0673A]">sur mesure.</em>
          </p>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed opacity-75">
            Cuisines, escaliers et agencements fabriqués dans notre atelier, posés chez vous.
          </p>
          <span className="mt-7 inline-block rounded-full bg-[#A0673A] px-6 py-3 text-sm font-medium text-snow">
            Demander un devis
          </span>
        </div>
        <div
          className={cn('rounded-3xl shadow-xl', mobile ? 'h-48' : 'h-80')}
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.25), transparent 55%), repeating-linear-gradient(100deg, #B07A4C 0px, #C48D5B 14px, #A06A3E 22px, #BC8656 38px)',
          }}
        />
      </header>
      <section className={cn(mobile ? 'px-5 pb-10' : 'px-12 pb-12')}>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(woodGallery) as (keyof typeof woodGallery)[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                tab === t ? 'border-[#2B2118] bg-[#2B2118] text-[#F4EEE5]' : 'border-[#2B2118]/20 hover:border-[#2B2118]/60'
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <div className={cn('mt-5 grid gap-4', mobile ? 'grid-cols-1' : 'grid-cols-3')}>
          {woodGallery[tab].map((item) => (
            <div key={item.title} className="group">
              <div className={cn('rounded-2xl bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02]', item.g, mobile ? 'h-32' : 'h-40')} />
              <p className="mt-2 text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

/* ---------- Restaurant ---------- */
const menu = {
  Entrées: [
    ['Œuf parfait, crème de cèpes', '12 €'],
    ['Velouté de potimarron', '9 €'],
    ['Terrine maison, pickles', '11 €'],
  ],
  Plats: [
    ['Truffade & salade du marché', '19 €'],
    ['Pavé de bœuf, sauce bleu d’Auvergne', '24 €'],
    ['Risotto aux champignons', '18 €'],
  ],
  Desserts: [
    ['Tarte fine aux pommes', '8 €'],
    ['Fondant chocolat, cœur coulant', '9 €'],
    ['Faisselle, miel de châtaignier', '7 €'],
  ],
}

export function ConceptRestaurant({ mobile }: ConceptProps) {
  const [tab, setTab] = useState<keyof typeof menu>('Plats')
  const [booked, setBooked] = useState(false)
  return (
    <div className="min-h-full bg-[#0F1F17] font-grotesk text-[#F2EBDD]">
      <MiniNav
        mobile={mobile}
        logo={<span className="text-2xl font-semibold tracking-tight">Le Comptoir Vert</span>}
        links={['La carte', 'L’équipe', 'Infos pratiques']}
        cta={<span className="rounded-full bg-[#D9B26F] px-5 py-2.5 text-sm font-medium text-[#0F1F17]">Réserver</span>}
      />
      <header className={cn('relative overflow-hidden', mobile ? 'mx-5 rounded-3xl p-6' : 'mx-12 rounded-[2rem] p-12')}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#D9B26F55,transparent_50%),radial-gradient(circle_at_10%_90%,#3C7A5A88,transparent_55%)]" />
        <div className="relative">
          <p className="text-sm text-[#D9B26F]">Bistrot de saison · Ouvert du mardi au samedi</p>
          <p className={cn('mt-3 font-semibold leading-[0.95] tracking-tight', mobile ? 'text-5xl' : 'text-7xl')}>
            Cuisine du marché,
            <br />
            produits d’ici.
          </p>
          <button
            type="button"
            onClick={() => setBooked((b) => !b)}
            className="mt-7 rounded-full bg-[#D9B26F] px-6 py-3 text-sm font-semibold text-[#0F1F17] transition-transform hover:scale-105"
          >
            {booked ? '✓ Table demandée — démo' : 'Réserver une table'}
          </button>
        </div>
      </header>
      <section className={cn(mobile ? 'px-5 py-8' : 'px-12 py-10')}>
        <div className="flex gap-6 border-b border-snow/15">
          {(Object.keys(menu) as (keyof typeof menu)[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn('-mb-px border-b-2 pb-3 text-[15px] transition-colors', tab === t ? 'border-[#D9B26F] text-[#D9B26F]' : 'border-transparent opacity-60 hover:opacity-100')}
            >
              {t}
            </button>
          ))}
        </div>
        <ul className={cn('mt-4 grid', mobile ? 'grid-cols-1' : 'grid-cols-3 gap-6')}>
          {menu[tab].map(([dish, price]) => (
            <li key={dish} className="flex items-baseline justify-between gap-3 border-b border-dashed border-snow/15 py-4 text-[15px]">
              <span>{dish}</span>
              <span className="text-[#D9B26F]">{price}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

/* ---------- Coiffeur ---------- */
const services = ['Coupe femme', 'Coupe homme', 'Couleur', 'Balayage']
const slots = ['09:30', '10:15', '11:00', '14:00', '15:30', '17:00']

export function ConceptCoiffeur({ mobile }: ConceptProps) {
  const [service, setService] = useState(services[0])
  const [slot, setSlot] = useState<string | null>(null)
  return (
    <div className="min-h-full bg-[#FFF1F4] font-grotesk text-[#1A1016]">
      <MiniNav
        mobile={mobile}
        logo={
          <span className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#E0457B] to-[#F59DB8]" />
            Studio Lune
          </span>
        }
        links={['Prestations', 'Tarifs', 'L’équipe']}
        cta={<span className="rounded-full bg-[#1A1016] px-5 py-2.5 text-sm text-snow">Prendre RDV</span>}
      />
      <div className={cn('grid gap-8', mobile ? 'px-5 pb-10' : 'grid-cols-[1fr_1.1fr] items-start px-12 pb-12 pt-2')}>
        <div>
          <p className={cn('font-semibold leading-[0.95] tracking-tight', mobile ? 'text-5xl' : 'text-6xl')}>
            Votre style,
            <br />
            <span className="text-[#E0457B]">réservé en 30 s.</span>
          </p>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed opacity-70">
            Choisissez une prestation et un créneau, on s’occupe du reste.
          </p>
        </div>
        <div className="rounded-3xl bg-snow p-6 shadow-xl shadow-[#E0457B]/10">
          <p className="text-sm font-medium">1. Prestation</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setService(s)}
                className={cn('rounded-full px-4 py-2 text-sm transition-colors', service === s ? 'bg-[#E0457B] text-snow' : 'bg-[#FFF1F4] hover:bg-[#FBD9E3]')}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium">2. Créneau — mardi</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {slots.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSlot(s)}
                className={cn('rounded-xl border py-2.5 text-sm transition-colors', slot === s ? 'border-[#1A1016] bg-[#1A1016] text-snow' : 'border-[#1A1016]/10 hover:border-[#1A1016]/40')}
              >
                {s}
              </button>
            ))}
          </div>
          <div className={cn('mt-6 rounded-2xl px-5 py-4 text-sm transition-colors', slot ? 'bg-[#1A1016] text-snow' : 'bg-[#FFF1F4] text-[#1A1016]/50')}>
            {slot ? `✓ ${service} à ${slot} — démo` : 'Sélectionnez un créneau'}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Fleuriste / boutique ---------- */
const products = [
  { name: 'Bouquet champêtre', price: '35 €', g: 'from-[#F7B267] via-[#F4845F] to-[#F25C54]' },
  { name: 'Pivoines de saison', price: '42 €', g: 'from-[#FFC8DD] via-[#FFAFCC] to-[#E5989B]' },
  { name: 'Composition blanche', price: '48 €', g: 'from-[#FFFFFF] via-[#E9EDC9] to-[#CCD5AE]' },
  { name: 'Plante d’intérieur', price: '29 €', g: 'from-[#B7E4C7] via-[#74C69D] to-[#2D6A4F]' },
]

export function ConceptFleuriste({ mobile }: ConceptProps) {
  const [cart, setCart] = useState<string[]>([])
  return (
    <div className="min-h-full bg-snow font-sans text-[#111]">
      <MiniNav
        mobile={mobile}
        logo={<span className="font-display text-3xl italic text-[#3B6D4A]">Pavot</span>}
        links={['Bouquets', 'Plantes', 'Mariages']}
        cta={
          <span className="relative rounded-full border border-[#111]/15 px-5 py-2.5 text-sm">
            Panier
            <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#3B6D4A] px-1.5 text-xs text-snow">
              {cart.length}
            </span>
          </span>
        }
      />
      {mobile && (
        <div className="mx-5 mb-4 flex items-center justify-between rounded-2xl bg-[#F1F5EE] px-4 py-3 text-sm">
          <span>Panier</span>
          <span className="rounded-full bg-[#3B6D4A] px-2.5 py-0.5 text-xs text-snow">{cart.length} article(s)</span>
        </div>
      )}
      <header className={cn(mobile ? 'px-5' : 'px-12 pt-2')}>
        <p className={cn('font-display leading-[0.95]', mobile ? 'text-5xl' : 'text-7xl')}>
          Des fleurs fraîches,
          <br />
          <em className="text-[#3B6D4A]">livrées aujourd’hui.</em>
        </p>
      </header>
      <section className={cn('grid gap-4', mobile ? 'grid-cols-2 px-5 py-8' : 'grid-cols-4 px-12 py-10')}>
        {products.map((p) => {
          const added = cart.includes(p.name)
          return (
            <div key={p.name} className="rounded-2xl bg-[#F7F7F4] p-3">
              <div className={cn('flex items-center justify-center rounded-xl bg-[#EEF0EA]', mobile ? 'h-28' : 'h-36')}>
                <div className={cn('rounded-full bg-gradient-to-br shadow-lg', p.g, mobile ? 'h-16 w-16' : 'h-24 w-24')} />
              </div>
              <p className="mt-3 text-sm font-medium">{p.name}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm opacity-60">{p.price}</span>
                <button
                  type="button"
                  onClick={() => setCart((c) => (added ? c.filter((n) => n !== p.name) : [...c, p.name]))}
                  className={cn('rounded-full px-3 py-1.5 text-xs transition-colors', added ? 'bg-[#3B6D4A] text-snow' : 'bg-snow hover:bg-[#3B6D4A] hover:text-snow')}
                >
                  {added ? '✓ Ajouté' : 'Ajouter'}
                </button>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
