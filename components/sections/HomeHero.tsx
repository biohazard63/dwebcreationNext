'use client'
import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeUp, ParallaxShell } from '@/components/motion'

function CodeTyper() {
  const fullCode = `// Créons votre site web professionnel\nfunction createProfessionalWebsite() {\n  const technologies = ['Next.js', 'React', 'TypeScript', 'TailwindCSS']\n  const stack = {\n    framework: 'Next.js 15',\n    react: '19',\n    css: 'Tailwind v4',\n    ui: 'shadcn/ui'\n  }\n  return {\n    performance: 'optimale',\n    design: 'moderne',\n    experience: 'exceptionnelle',\n    stack\n  }\n}\n\ncreateProfessionalWebsite()\n`;

  const [typed, setTyped] = useState('')
  const [index, setIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Check for reduced motion preference
  const prefersReduced = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  }, [])

  useEffect(() => {
    if (prefersReduced) {
      setTyped(fullCode)
      setIsDone(true)
      return
    }

    if (index < fullCode.length) {
      intervalRef.current = setTimeout(() => {
        setTyped(fullCode.slice(0, index + 1))
        setIndex(index + 1)
      }, 50)
    } else {
      setIsDone(true)
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [index, fullCode, prefersReduced])

  // Fonction simple pour colorer le code (using inline styles)
  const colorizeCode = (code: string) => {
    return code
      .replace(/(\/\/.*)/g, '<span style="color: #6b7280;">$1</span>') // Comments
      .replace(/\b(function)\b/g, '<span style="color: #2563eb;">$1</span>') // Functions
      .replace(/\b(const|return)\b/g, '<span style="color: #2563eb;">$1</span>') // Keywords
      .replace(/'([^']*)'/g, '<span style="color: #16a34a;">\'$1\'</span>') // Strings
      .replace(/([{}()[\]])/g, '<span style="color: #6b7280;">$1</span>') // Brackets
      .replace(/\b(\d+)\b/g, '<span style="color: #ea580c;">$1</span>') // Numbers
      .replace(/\b(technologies|stack|framework|react|css|ui|performance|design|experience)\b/g, '<span style="color: #2563eb;">$1</span>') // Variables/Properties
      .replace(/\b(Next\.js|React|TypeScript|TailwindCSS|shadcn\/ui)\b/g, '<span style="color: #16a34a;">$1</span>') // Specific Technologies
      .replace(/\b(optimale|moderne|exceptionnelle)\b/g, '<span style="color: #16a34a;">$1</span>'); // Values
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500 transform hover:scale-105">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <pre className="font-mono text-sm leading-6 text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
        <code
          dangerouslySetInnerHTML={{
            __html: colorizeCode(typed) +
              `<span class="ml-0.5 inline-block w-2 h-5 align-bottom ${isDone ? 'opacity-0' : 'animate-pulse'}" style="background-color: #111827;"></span>`
          }}
        />
      </pre>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-500">
      {/* Animated soft gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-30 bg-orange-300 dark:bg-yellow-300 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-20 bg-indigo-300 dark:bg-indigo-500 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <FadeUp>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight transition-colors duration-500">
                Sites modernes, rapides et performants pour PME & agences
              </h1>

              <FadeUp delay={0.2}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0 rounded-lg px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Link href="/contact">
                      Démarrer votre projet
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-900 rounded-lg px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300">
                    <Link href="/portfolio">
                      Voir mes réalisations
                    </Link>
                  </Button>
                </div>
              </FadeUp>
            </div>
          </FadeUp>

          {/* Right side - Code editor */}
          <FadeUp delay={0.4}>
            <ParallaxShell>
              <div className="relative">
                {/* Halo gradient animé */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl animate-pulse" />
                <div className="relative">
                  <CodeTyper />
                </div>
              </div>
            </ParallaxShell>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
