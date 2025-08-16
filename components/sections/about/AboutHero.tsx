import { GeometricShapes } from '@/components/ui/geometric-animations'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-500">
      {/* Animated geometric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-20 bg-orange-300 dark:bg-orange-600 animate-pulse" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-15 bg-yellow-300 dark:bg-yellow-600 animate-pulse" />
      </div>
      <GeometricShapes />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight transition-colors duration-500">
              À propos de D Web Créations
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-500">
              Découvrez mon parcours, ma philosophie et les valeurs qui animent chacun de mes projets de développement web.
            </p>
          </div>
          
          {/* Right side - Profile picture and experience badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg">
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-sm">années d'expérience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
