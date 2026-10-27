import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="bg-ink py-32 text-paper-50">
      <div className="container text-center">
        <p className="eyebrow text-copper-light">Erreur 404</p>
        <h1 className="heading-xl mt-5">Cette page n’existe pas.</h1>
        <p className="lead mx-auto mt-6 max-w-md text-stone-light">
          Le lien est peut-être erroné ou la page a été déplacée.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Button asChild size="lg">
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
