import { FadeUp, StaggerContainer, StaggerItem } from '@/components/motion'

const values = [
  {
    icon: "🚀",
    title: "Innovation Technique",
    description: "Utilisation des dernières technologies pour des solutions performantes et modernes."
  },
  {
    icon: "💻",
    title: "Expertise JavaScript",
    description: "Spécialisation dans le développement JavaScript moderne et les frameworks React/Next.js."
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "Approche collaborative pour créer des solutions uniques adaptées à vos besoins."
  },
  {
    icon: "📈",
    title: "Évolution Continue",
    description: "Formation continue et veille technologique pour rester à la pointe de l'innovation."
  }
]

export function AboutPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-500">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
              Ma philosophie
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Une approche moderne du développement web
            </p>
          </div>
        </FadeUp>
        
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
