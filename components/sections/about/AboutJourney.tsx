import { FadeUp, StaggerContainer, StaggerItem } from '@/components/motion'

const timeline = [
  {
    year: "2019",
    title: "Formation Référent Numérique",
    description: "Début de mon parcours dans le développement web avec une formation complète sur les technologies numériques.",
    position: "right"
  },
  {
    year: "2020",
    title: "Première Expérience en Agence",
    description: "Stage en agence web pour mettre en pratique mes connaissances et découvrir l'environnement professionnel.",
    position: "left"
  },
  {
    year: "2020-2022",
    title: "Lancement en Freelance",
    description: "Première expérience en freelance, développement de sites web pour des clients variés.",
    position: "right"
  },
  {
    year: "2023-2024",
    title: "Expérience en Agence & Formation",
    description: "Retour en agence web pour approfondir mes compétences et suivre des formations spécialisées.",
    position: "left"
  },
  {
    year: "2024",
    title: "Retour au Freelance",
    description: "Retour au freelance avec une expertise renforcée pour proposer des solutions web modernes.",
    position: "right"
  }
]

export function AboutJourney() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-800 py-24 sm:py-32 transition-colors duration-500">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
              Mon parcours
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              De la formation au développement web professionnel : mon évolution dans le monde du digital
            </p>
          </div>
        </FadeUp>
        
        <StaggerContainer staggerDelay={0.1}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-yellow-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <StaggerItem key={index}>
                  <div className={`flex items-center ${item.position === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline node */}
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-1 ${item.position === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
