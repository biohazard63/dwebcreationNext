'use client'
import { motion } from 'framer-motion'

// Composant pour les formes géométriques animées
export function GeometricShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Cercles animés */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-orange-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-40 w-3 h-3 bg-yellow-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-40 w-2 h-2 bg-orange-400 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 1, 0.4],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-5 h-5 bg-yellow-400 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      {/* Carrés animés */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-3 h-3 bg-orange-300 rotate-45"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [45, 225, 45],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-yellow-300 rotate-45"
        animate={{
          scale: [1, 1.6, 1],
          rotate: [45, -225, 45],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Triangles animés */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-orange-400 border-r-[8px] border-r-transparent"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.7, 0.2],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-1/2 right-1/3 w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-yellow-400 border-r-[6px] border-r-transparent"
        animate={{
          scale: [1, 1.7, 1],
          opacity: [0.3, 0.8, 0.3],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  )
}

// Composant pour l'effet de défilement sur l'expérience
export function ScrollingExperience() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
