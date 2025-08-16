import { FadeUp, StaggerContainer, StaggerItem } from '@/components/motion'
import { ScrollingExperience } from '@/components/ui/geometric-animations'

const expertise = {
  frontend: [
    { name: "React/Next.js", icon: "⚛️" },
    { name: "JavaScript Moderne", icon: "🟨" },
    { name: "HTML/CSS", icon: "🌐" },
    { name: "SASS/Tailwind", icon: "🎨" }
  ],
  backend: [
    { name: "PHP", icon: "🐘" },
    { name: "API REST", icon: "🔌" },
    { name: "WordPress", icon: "📝" },
    { name: "Base de données", icon: "🗄️" }
  ],
  specialties: [
    { name: "E-commerce", icon: "🛒" },
    { name: "Sites Vitrines", icon: "🖥️" },
    { name: "Applications Web", icon: "💻" },
    { name: "Next.js", icon: "⚡" }
  ]
}

export function AboutExpertise() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-800 py-24 sm:py-32 transition-colors duration-500">
      <ScrollingExperience />
      <div className="container">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
              Mon expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Spécialisé en développement JavaScript moderne avec une solide base full-stack
            </p>
          </div>
        </FadeUp>
        
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <StaggerItem>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  Développement Front-end
                </h3>
                <div className="space-y-4">
                  {expertise.frontend.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
            
            {/* Backend */}
            <StaggerItem>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  Développement Back-end
                </h3>
                <div className="space-y-4">
                  {expertise.backend.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
            
            {/* Specialties */}
            <StaggerItem>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  Spécialités
                </h3>
                <div className="space-y-4">
                  {expertise.specialties.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
