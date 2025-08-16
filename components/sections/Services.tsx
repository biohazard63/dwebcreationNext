import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Database, 
  Shield,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    title: "Sites Web Vitrine",
    description: "Sites web professionnels et modernes pour présenter votre activité et vos services.",
    icon: Globe,
    features: ["Design sur mesure", "Responsive design", "Optimisation SEO", "Maintenance"],
    href: "/services#sites-web"
  },
  {
    title: "E-commerce",
    description: "Boutiques en ligne performantes pour vendre vos produits sur internet.",
    icon: ShoppingCart,
    features: ["Catalogue produits", "Paiement sécurisé", "Gestion des stocks", "Analytics"],
    href: "/services#ecommerce"
  },
  {
    title: "Applications Web",
    description: "Applications web complexes et sur mesure pour automatiser vos processus.",
    icon: Smartphone,
    features: ["Développement sur mesure", "API REST", "Base de données", "Sécurité"],
    href: "/services#applications"
  },
  {
    title: "SEO & Référencement",
    description: "Optimisation de votre visibilité sur les moteurs de recherche.",
    icon: Search,
    features: ["Audit technique", "Optimisation on-page", "Content marketing", "Suivi des performances"],
    href: "/services#seo"
  },
  {
    title: "Bases de Données",
    description: "Conception et optimisation de bases de données pour vos applications.",
    icon: Database,
    features: ["Architecture optimisée", "Sécurité des données", "Sauvegarde", "Performance"],
    href: "/services#bases-donnees"
  },
  {
    title: "Sécurité Web",
    description: "Protection de vos sites web et applications contre les menaces.",
    icon: Shield,
    features: ["Audit de sécurité", "HTTPS/SSL", "Protection DDoS", "Monitoring"],
    href: "/services#securite"
  }
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Des solutions web complètes pour répondre à tous vos besoins digitaux
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="card-hover group">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghost" className="mt-6 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link href={service.href}>
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
