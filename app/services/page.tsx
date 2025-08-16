import { Metadata } from 'next'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: "Services - DWebCreation",
  description: "Découvrez nos services de développement web : sites vitrine, e-commerce, applications web, SEO et plus encore.",
  url: "https://dwebcreation.com/services",
})

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nos Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Des solutions web complètes et sur mesure pour répondre à tous vos besoins
          </p>
        </div>
        
        <div className="prose prose-lg mx-auto max-w-4xl">
          <p>
            Chez DWebCreation, nous proposons une gamme complète de services de développement web 
            pour vous accompagner dans tous vos projets digitaux. De la conception à la mise en ligne, 
            en passant par la maintenance et l'optimisation, nous sommes là pour vous.
          </p>
          
          <h2>Nos prestations principales</h2>
          
          <h3>Sites Web Vitrine</h3>
          <p>
            Création de sites web professionnels et modernes pour présenter votre activité, 
            vos services et votre expertise. Design responsive, optimisation SEO et interface 
            utilisateur intuitive.
          </p>
          
          <h3>E-commerce</h3>
          <p>
            Développement de boutiques en ligne performantes avec gestion des produits, 
            système de paiement sécurisé, gestion des stocks et analytics intégrés.
          </p>
          
          <h3>Applications Web</h3>
          <p>
            Création d'applications web sur mesure pour automatiser vos processus, 
            gérer vos données et améliorer votre productivité.
          </p>
          
          <h3>SEO & Référencement</h3>
          <p>
            Optimisation de votre visibilité sur les moteurs de recherche avec des 
            techniques modernes et durables.
          </p>
          
          <h3>Maintenance & Support</h3>
          <p>
            Services de maintenance continue, mises à jour de sécurité et support 
            technique pour garantir la performance de vos solutions web.
          </p>
        </div>
      </div>
    </div>
  )
}
