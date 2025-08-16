import { Metadata } from 'next'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: "Blog - DWebCreation",
  description: "Articles et conseils sur le développement web, les technologies modernes et les bonnes pratiques.",
  url: "https://dwebcreation.com/blog",
})

export default function BlogPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Notre Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Conseils, actualités et bonnes pratiques du développement web
          </p>
        </div>
        
        <div className="prose prose-lg mx-auto max-w-4xl">
          <p>
            Notre blog vous propose des articles techniques, des conseils pratiques 
            et des actualités sur le développement web moderne. Nous partageons 
            notre expertise pour vous aider à mieux comprendre les technologies 
            et les tendances du web.
          </p>
          
          <h2>Nos sujets de prédilection</h2>
          
          <h3>Développement Frontend</h3>
          <p>
            React, Next.js, TypeScript, Tailwind CSS et les dernières innovations 
            en matière d'interfaces utilisateur.
          </p>
          
          <h3>Performance Web</h3>
          <p>
            Optimisation des performances, Core Web Vitals, SEO technique et 
            bonnes pratiques pour des sites web rapides.
          </p>
          
          <h3>Architecture & DevOps</h3>
          <p>
            Architecture des applications, déploiement, CI/CD et outils de 
            développement moderne.
          </p>
          
          <h3>UX/UI Design</3>
          <p>
            Design d'interface, expérience utilisateur, accessibilité et 
            tendances du design web.
          </p>
          
          <p>
            <strong>En cours de développement...</strong> Notre blog sera bientôt 
            enrichi avec de nombreux articles techniques et conseils pratiques.
          </p>
        </div>
      </div>
    </div>
  )
}
