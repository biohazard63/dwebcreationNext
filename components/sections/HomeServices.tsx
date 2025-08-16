import Link from 'next/link'
import { ArrowRight, Code, Palette, ShoppingCart, Globe, Smartphone, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/motion'

const services = [
  {
    title: "Sites Vitrines",
    description: "Sites web professionnels et modernes pour présenter votre activité et attirer de nouveaux clients.",
    price: "Sur devis",
    icon: Globe,
    features: [
      "Design responsive et moderne",
      "Optimisation SEO intégrée",
      "Interface intuitive",
      "Maintenance incluse"
    ]
  },
  {
    title: "E-commerce",
    description: "Boutiques en ligne performantes pour vendre vos produits et services sur internet.",
    price: "Sur devis",
    icon: ShoppingCart,
    features: [
      "Catalogue produits complet",
      "Paiement sécurisé",
      "Gestion des stocks",
      "Analytics intégrés"
    ]
  },
  {
    title: "Applications Web",
    description: "Applications web sur mesure pour automatiser vos processus et améliorer votre productivité.",
    price: "Sur devis",
    icon: Code,
    features: [
      "Développement sur mesure",
      "API personnalisées",
      "Base de données optimisée",
      "Sécurité renforcée"
    ]
  },
  {
    title: "Sites Mobiles",
    description: "Applications mobiles et sites web optimisés pour tous les appareils et écrans.",
    price: "Sur devis",
    icon: Smartphone,
    features: [
      "Design mobile-first",
      "Performance optimisée",
      "Navigation intuitive",
      "Compatibilité tous écrans"
    ]
  },
  {
    title: "UI/UX Design",
    description: "Interfaces utilisateur modernes et expériences utilisateur exceptionnelles.",
    price: "Sur devis",
    icon: Palette,
    features: [
      "Design centré utilisateur",
      "Prototypage interactif",
      "Tests utilisateurs",
      "Guidelines design"
    ]
  },
  {
    title: "Optimisation Performance",
    description: "Amélioration des performances et de la vitesse de vos sites web existants.",
    price: "Sur devis",
    icon: Zap,
    features: [
      "Audit performance complet",
      "Optimisation Core Web Vitals",
      "Compression des assets",
      "Monitoring continu"
    ]
  }
]

export function HomeServices() {
  return (
    <section id="services" className="relative overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-500">
      {/* Animated soft gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-20 bg-orange-300 dark:bg-orange-600 animate-pulse" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-15 bg-yellow-300 dark:bg-yellow-600 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-500">
              Mes Services
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-500">
              Développeur web freelance à Clermont-Ferrand, je crée des solutions web modernes et performantes pour faire grandir votre business
            </p>
          </div>
        </FadeUp>

        <StaggerContainer staggerDelay={0.1}>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <AnimatedCard className="group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-500">
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 group-hover:from-orange-200 group-hover:to-yellow-200 dark:group-hover:from-orange-800 dark:group-hover:to-yellow-800 transition-all duration-300">
                      <service.icon className="h-7 w-7 text-orange-600 dark:text-orange-400" />
                    </div>
                    <CardTitle className="mt-6 text-xl text-gray-900 dark:text-white transition-colors duration-300">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{service.description}</CardDescription>
                    <div className="text-lg font-semibold text-orange-600 dark:text-orange-400 mt-2">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          <div className="mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="mt-8 w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-all duration-300">
                      <Link href="/contact">
                        Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeUp delay={0.6}>
          <div className="mt-20 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0 rounded-lg px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link href="/contact">
                Démarrer votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
