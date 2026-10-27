'use client'

import { cn } from '@/lib/utils'

// Carte dont le halo suit la position de la souris (variables CSS --mx / --my)
export function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      onPointerMove={onMove}
      className={cn(
        'spotlight rounded-3xl border border-white/10 bg-snow/60 transition-colors duration-300 dark:bg-white/[0.03] hover:border-white/20',
        className
      )}
    >
      {children}
    </div>
  )
}
