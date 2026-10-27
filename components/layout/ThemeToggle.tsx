'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

// Bascule clair / sombre ; le choix est mémorisé dans le navigateur
export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    setDark(next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // Stockage indisponible (navigation privée) : le choix vaut pour cette page
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10',
        className
      )}
      aria-label={dark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      title={dark ? 'Mode clair' : 'Mode sombre'}
    >
      {/* Avant l'hydratation, les deux icônes sont gérées en CSS pour éviter un saut */}
      <Sun className={cn('h-4 w-4', dark === null ? 'hidden dark:block' : !dark && 'hidden')} aria-hidden="true" />
      <Moon className={cn('h-4 w-4', dark === null ? 'dark:hidden' : dark && 'hidden')} aria-hidden="true" />
    </button>
  )
}
