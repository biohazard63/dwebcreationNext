import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "EcoStyle - Boutique Éco-responsable",
    description: "Site e-commerce moderne pour une marque de vêtements éco-responsables avec système de gestion des stocks et paiements sécurisés.",
    image: "/images/portfolio/ecostyle.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "E-commerce",
    liveUrl: "https://ecostyle.com",
    githubUrl: "https://github.com/dwebcreation/ecostyle",
    featured: true
  },
  {
    title: "TechStart - Plateforme SaaS",
    description: "Application SaaS complète pour la gestion de projets avec tableau de bord, analytics et système de notifications en temps réel.",
    image: "/images/portfolio/techstart.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Application Web",
    liveUrl: "https://techstart.app",
    githubUrl: "https://github.com/dwebcreation/techstart",
    featured: true
  },
  {
    title: "ArtisanPlus - Site Vitrine",
    description: "Site web professionnel pour une entreprise d'artisanat avec galerie de photos, formulaire de contact et optimisation SEO.",
    image: "/images/portfolio/artisanplus.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Site Vitrine",
    liveUrl: "https://artisanplus.fr",
    githubUrl: "https://github.com/dwebcreation/artisanplus",
    featured: false
  },
  {
    title: "WellnessCo - Application Mobile",
    description: "Application de bien-être avec suivi des activités, méditation guidée et intégration avec des objets connectés.",
    image: "/images/portfolio/wellnessco.jpg",
    technologies: ["React Native", "Expo", "Firebase", "HealthKit"],
    category: "Application Mobile",
    liveUrl: "https://wellnessco.app",
    githubUrl: "https://github.com/dwebcreation/wellnessco",
    featured: false
  }
]

export function Portfolio() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nos Réalisations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez quelques-uns de nos projets récents qui illustrent notre expertise
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="card-hover group overflow-hidden">
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.category}</p>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Voir le site
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">
              Voir tous nos projets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
