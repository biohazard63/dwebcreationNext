import { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: "Contact - DWebCreation",
  description: "Contactez-nous pour discuter de votre projet web. Nous sommes là pour vous accompagner dans la réalisation de vos objectifs digitaux.",
  url: "https://dwebcreation.com/contact",
})

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Prêt à démarrer votre projet ? Parlons-en !
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
