import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="container text-center">
        <p className="chip">Erreur 404</p>
        <h1 className="heading-hero mt-7">Cette page <span className="text-gradient">n’existe pas</span>.</h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-mist">
          Le lien est peut-être erroné ou la page a été déplacée.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Button asChild size="lg" className="bg-gradient-to-r from-flame via-blush to-violet hover:opacity-90">
            <Link href="/">Retour à l’accueil</Link>
          </Button>
          <Button asChild size="lg" variant="outline-light">
            <Link href="/contact">Me contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
