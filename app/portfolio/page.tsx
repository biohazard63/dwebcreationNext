import { Metadata } from 'next'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: "Portfolio - DWebCreation",
  description: "Découvrez nos réalisations : sites web, applications, e-commerce et projets sur mesure.",
  url: "https://dwebcreation.com/portfolio",
})

export default function PortfolioPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Notre Portfolio
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez nos réalisations et laissez-vous inspirer par nos projets
          </p>
        </div>
        
        <div className="prose prose-lg mx-auto max-w-4xl">
          <p>
            Notre portfolio présente une sélection de nos meilleurs projets, 
            réalisés pour des clients de différents secteurs. Chaque projet 
            illustre notre expertise technique et notre capacité à créer des 
            solutions web innovantes et performantes.
          </p>
          
          <h2>Nos domaines d'expertise</h2>
          
          <h3>E-commerce</h3>
          <p>
            Boutiques en ligne modernes avec gestion complète des produits, 
            paiements sécurisés et expérience utilisateur optimisée.
          </p>
          
          <h3>Applications Web</h3>
          <p>
            Applications sur mesure pour automatiser les processus métier 
            et améliorer la productivité des équipes.
          </p>
          
          <h3>Sites Vitrine</h3>
          <p>
            Sites web professionnels avec design moderne, responsive et 
            optimisation SEO pour maximiser la visibilité.
          </p>
          
          <h3>Applications Mobile</h3>
          <p>
            Applications mobiles natives et hybrides pour iOS et Android, 
            développées avec les technologies les plus récentes.
          </p>
          
          <p>
            <strong>En cours de développement...</strong> Cette page sera bientôt 
            enrichie avec tous nos projets et études de cas détaillées.
          </p>
        </div>
      </div>
    </div>
  )
}
