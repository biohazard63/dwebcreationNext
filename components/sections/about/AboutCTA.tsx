import Link from 'next/link'
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeUp } from '@/components/motion'

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 sm:py-32 transition-colors duration-500">
      {/* Animated soft gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-30 bg-orange-300 dark:bg-orange-600 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-20 bg-yellow-300 dark:bg-yellow-600 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl lg:text-6xl leading-tight mb-6">
              Prêt à concrétiser votre projet ?
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Discutons de vos besoins et objectifs pour créer ensemble une solution web adaptée à votre vision. 
              Je vous accompagne de la conception à la mise en ligne de votre projet.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0 rounded-lg px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl shadow-orange-500/25 dark:shadow-orange-400/25">
                <Link href="/contact">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Me contacter
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-3 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-900 rounded-lg px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <Link href="/portfolio">
                  Voir mes réalisations
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-orange-200 dark:border-orange-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Réponse sous 24h</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  Je réponds rapidement à toutes vos demandes
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-orange-200 dark:border-orange-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Devis gratuit</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  Estimation précise et détaillée de votre projet
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-orange-200 dark:border-orange-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Accompagnement personnalisé</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  Suivi complet de votre projet jusqu'à la livraison
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 dark:from-orange-500/20 dark:to-yellow-500/20 border border-orange-200/50 dark:border-orange-700/50">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>25+ projets réalisés</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>100% clients satisfaits</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Support technique inclus</span>
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
