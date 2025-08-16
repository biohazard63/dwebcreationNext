import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Smartphone, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              <Zap className="mr-2 h-4 w-4" />
              Agence web moderne et performante
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Créons ensemble votre{' '}
            <span className="gradient-text">présence digitale</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Spécialistes du développement web moderne, nous créons des sites web et applications 
            performants qui transforment vos idées en expériences digitales exceptionnelles.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">
                Démarrer un projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/portfolio">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Développement sur mesure
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sites web et applications développés avec les technologies les plus récentes
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Design responsive
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Interfaces adaptées à tous les écrans pour une expérience optimale
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Performance optimale
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sites web rapides et optimisés pour le SEO et l'expérience utilisateur
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary/20 to-purple-600/20 opacity-20" />
        </div>
      </div>
    </section>
  )
}
