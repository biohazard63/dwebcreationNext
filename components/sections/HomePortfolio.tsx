import Link from 'next/link'
import { ArrowRight, ExternalLink, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/motion'

const projects = [
  {
    title: "Restaurant Le Gourmet",
    description: "Site vitrine moderne pour un restaurant gastronomique avec réservation en ligne et menu interactif.",
    image: "🍽️",
    category: "Site Vitrine",
    client: "Restaurant Le Gourmet",
    duration: "3 semaines",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    features: ["Design responsive", "Système de réservation", "Menu interactif", "Optimisation SEO"]
  },
  {
    title: "BioNature E-commerce",
    description: "Boutique en ligne complète pour une marque de produits bio avec gestion des stocks et paiements sécurisés.",
    image: "🌱",
    category: "E-commerce",
    client: "BioNature",
    duration: "6 semaines",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    features: ["Catalogue produits", "Paiement sécurisé", "Gestion stocks", "Dashboard admin"]
  },
  {
    title: "Dr. Martin Cabinet",
    description: "Site professionnel pour un cabinet médical avec prise de rendez-vous et espace patient sécurisé.",
    image: "🏥",
    category: "Site Vitrine",
    client: "Dr. Martin",
    duration: "4 semaines",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    features: ["Prise de RDV", "Espace patient", "Blog médical", "RGPD compliant"]
  },
  {
    title: "Horizon Immobilier",
    description: "Plateforme immobilière avec recherche avancée, filtres et gestion des biens pour agence immobilière.",
    image: "🏠",
    category: "Application Web",
    client: "Horizon Immobilier",
    duration: "8 semaines",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Mapbox"],
    features: ["Recherche avancée", "Carte interactive", "Gestion biens", "Notifications"]
  },
  {
    title: "ArtisanPlus",
    description: "Application de mise en relation entre artisans et clients avec système de devis et notation.",
    image: "🔨",
    category: "Application Web",
    client: "ArtisanPlus",
    duration: "10 semaines",
    technologies: ["React Native", "Node.js", "Socket.io", "Redis"],
    features: ["Géolocalisation", "Chat temps réel", "Système devis", "Paiement"]
  },
  {
    title: "TechStart Dashboard",
    description: "Dashboard analytique pour startup tech avec métriques en temps réel et reporting avancé.",
    image: "💻",
    category: "Application Web",
    client: "TechStart",
    duration: "5 semaines",
    technologies: ["React", "D3.js", "Node.js", "InfluxDB"],
    features: ["Métriques temps réel", "Graphiques interactifs", "Export données", "Alertes"]
  }
]

export function HomePortfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-gray-50 dark:bg-gray-800 py-24 sm:py-32 transition-colors duration-500">
      {/* Animated soft gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-20 bg-orange-300 dark:bg-orange-600 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-15 bg-yellow-300 dark:bg-yellow-600 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-500">
              Mes Réalisations
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-500">
              Découvrez mes derniers projets et réalisations pour des clients satisfaits
            </p>
          </div>
        </FadeUp>

        <StaggerContainer staggerDelay={0.1}>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <StaggerItem key={project.title}>
                <AnimatedCard className="group bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-all duration-500 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{project.image}</div>
                      <div className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Métadonnées du projet */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Technologies utilisées */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies :</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Fonctionnalités principales */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Fonctionnalités :</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-all duration-300">
                      <Link href="/portfolio">
                        Voir le projet
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
              <Link href="/portfolio">
                Voir tous mes projets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
