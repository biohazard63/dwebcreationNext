import { Metadata } from 'next'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: "À propos - DWebCreation",
  description: "Découvrez notre histoire, notre équipe et notre vision du développement web moderne.",
  url: "https://dwebcreation.com/about",
})

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            À propos de DWebCreation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Une agence web passionnée par l'innovation et l'excellence technique
          </p>
        </div>
        
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Notre Histoire</h2>
          <p>
            DWebCreation est née de la passion pour le développement web moderne et 
            de la volonté de créer des expériences digitales exceptionnelles. Fondée 
            par des développeurs expérimentés, notre agence s'est spécialisée dans 
            les technologies de pointe pour offrir des solutions web performantes 
            et innovantes.
          </p>
          
          <h2>Notre Mission</h2>
          <p>
            Nous accompagnons les entreprises et entrepreneurs dans leur transformation 
            digitale en créant des solutions web sur mesure qui répondent parfaitement 
            à leurs besoins. Notre objectif est de délivrer des projets de qualité 
            qui génèrent de la valeur et contribuent au succès de nos clients.
          </p>
          
          <h2>Nos Valeurs</h2>
          
          <h3>Excellence Technique</h3>
          <p>
            Nous utilisons les technologies les plus récentes et les meilleures 
            pratiques pour créer des solutions robustes et performantes.
          </p>
          
          <h3>Innovation</h3>
          <p>
            Nous restons à la pointe des nouvelles technologies et méthodologies 
            pour offrir des solutions toujours plus innovantes.
          </p>
          
          <h3>Collaboration</h3>
          <p>
            Nous travaillons en étroite collaboration avec nos clients pour 
            comprendre leurs besoins et créer des solutions parfaitement adaptées.
          </p>
          
          <h3>Qualité</h3>
          <p>
            Chaque projet est développé avec le plus grand soin, en respectant 
            les standards de qualité les plus élevés.
          </p>
          
          <h2>Notre Équipe</h2>
          <p>
            Notre équipe est composée de développeurs passionnés, de designers 
            créatifs et d'experts en marketing digital. Chaque membre apporte 
            son expertise et sa vision pour créer des solutions web exceptionnelles.
          </p>
          
          <h2>Technologies & Stack</h2>
          <p>
            Nous utilisons un stack technique moderne et performant :
          </p>
          <ul>
            <li><strong>Frontend :</strong> React, Next.js, TypeScript, Tailwind CSS</li>
            <li><strong>Backend :</strong> Node.js, Python, PHP, bases de données SQL et NoSQL</li>
            <li><strong>DevOps :</strong> Docker, CI/CD, cloud (AWS, Vercel, Netlify)</li>
            <li><strong>Outils :</strong> Git, VS Code, Figma, Postman</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
