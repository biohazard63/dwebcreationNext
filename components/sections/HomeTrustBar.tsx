import { Star, Clock, Users } from 'lucide-react'
import { FadeUp } from '@/components/motion'

const clients = [
  { name: "Restaurant Le Gourmet", logo: "🍽️" },
  { name: "BioNature", logo: "🌱" },
  { name: "Dr. Martin", logo: "🏥" },
  { name: "Horizon Immobilier", logo: "🏠" },
  { name: "ArtisanPlus", logo: "🔨" },
  { name: "TechStart", logo: "💻" },
]

export function HomeTrustBar() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-800 py-12 transition-colors duration-500">
      <div className="container">
        <FadeUp>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logos clients */}
            <div className="flex items-center space-x-8">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
                Clients satisfaits :
              </span>
              <div className="flex items-center space-x-4">
                {clients.slice(0, 4).map((client, index) => (
                  <div
                    key={client.name}
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 text-2xl"
                    title={client.name}
                  >
                    {client.logo}
                  </div>
                ))}
              </div>
            </div>

            {/* Statistiques de confiance */}
            <div className="flex items-center space-x-8">
              {/* Note */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  4.9/5
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  (12 avis)
                </span>
              </div>

              {/* Temps de réponse */}
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  24h
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  de réponse
                </span>
              </div>

              {/* Projets réalisés */}
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  25+
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  projets
                </span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
