'use client'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'

// Composant de révélation au scroll
export const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

// Composant de parallaxe légère
export function ParallaxShell({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -6]) // -6px max
  return <motion.div style={{ y }}>{children}</motion.div>
}

// Composant de carte avec hover
export const AnimatedCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: '0 10px 24px rgba(0,0,0,.14)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
    className={`rounded-xl border bg-card p-6 ${className}`}
  >
    {children}
  </motion.div>
)

// Composant de stagger pour les listes
export const StaggerContainer = ({ children, staggerDelay = 0.1 }: { children: React.ReactNode; staggerDelay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
)
