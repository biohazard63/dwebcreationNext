import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-purple-600 text-white">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Prêt à transformer votre vision en réalité ?
          </h2>
          <p className="mt-4 text-lg opacity-90 sm:text-xl">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+33123456789">
                <Phone className="mr-2 h-5 w-5" />
                Appelez-nous
              </a>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-90">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-90">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24h</div>
              <div className="text-sm opacity-90">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
