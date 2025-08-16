import { Star, Linkedin, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/motion'
import { testimonials } from '@/lib/data/testimonials'

export function HomeTestimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-500">
      {/* Animated soft gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-20 bg-orange-300 dark:bg-orange-600 animate-pulse" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-15 bg-yellow-300 dark:bg-yellow-600 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-500">
              Avis de mes clients
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-500">
              Découvrez ce que mes clients disent de notre collaboration et de la qualité de mes réalisations
            </p>
          </div>
        </FadeUp>

        <StaggerContainer staggerDelay={0.1}>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.name}>
                <AnimatedCard className="group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-500">
                  <CardContent className="p-6">
                    {/* Note */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Témoignage */}
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Informations client */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 flex items-center justify-center text-lg font-semibold text-orange-600 dark:text-orange-400">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.name}
                            </h4>
                            <CheckCircle className="h-4 w-4 text-green-500" title="Client vérifié" />
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role} chez {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Lien LinkedIn */}
                      {testimonial.linkedin && (
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                          title="Voir le profil LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeUp delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 px-6 py-3 rounded-full">
              <CheckCircle className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                Tous mes clients sont satisfaits de notre collaboration
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
