'use client'

import { useEffect, useRef, useState } from 'react'

// Affiche un contenu conçu à taille fixe (width x height) et le met à l'échelle de son conteneur
function ScaledScreen({ width, height, children }: { width: number; height: number; children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const el = outerRef.current
    if (!el) return
    const update = () => setScale(el.clientWidth / width)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [width])

  return (
    <div ref={outerRef} className="relative w-full overflow-hidden" style={{ aspectRatio: `${width} / ${height}` }}>
      <div
        className="absolute left-0 top-0 origin-top-left overflow-y-auto overflow-x-hidden [scrollbar-width:none]"
        style={{ width, height, transform: `scale(${scale})`, visibility: scale ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </div>
  )
}

export function Laptop({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="rounded-t-2xl border border-snow/15 bg-night-700 p-2 pb-3 shadow-2xl shadow-black/60 sm:p-3">
        <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-snow/20" />
        <div className="overflow-hidden rounded-md bg-snow">
          <ScaledScreen width={1100} height={690}>
            {children}
          </ScaledScreen>
        </div>
      </div>
      <div className="relative mx-[-4%] h-3 rounded-b-xl bg-gradient-to-b from-[#2b2b36] to-[#15151c]">
        <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-md bg-black/40" />
      </div>
    </div>
  )
}

export function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-[2.4rem] border border-snow/15 bg-night-700 p-2 shadow-2xl shadow-black/70">
      <div className="relative overflow-hidden rounded-[1.9rem] bg-snow">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <ScaledScreen width={390} height={800}>
          {children}
        </ScaledScreen>
      </div>
    </div>
  )
}
