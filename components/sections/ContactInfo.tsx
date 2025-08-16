import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "contact@dwebcreation.com",
    href: "mailto:contact@dwebcreation.com"
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "+33 1 23 45 67 89",
    href: "tel:+33123456789"
  },
  {
    icon: MapPin,
    title: "Adresse",
    description: "Paris, France",
    href: "#"
  },
  {
    icon: Clock,
    title: "Horaires",
    description: "Lun-Ven: 9h-18h",
    href: "#"
  }
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Informations de contact
        </h2>
        <p className="text-muted-foreground">
          N'hésitez pas à nous contacter par email, téléphone ou en remplissant le formulaire. 
          Nous répondons généralement dans les 24h.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {contactInfo.map((info) => (
          <Card key={info.title} className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{info.title}</h3>
                  <a 
                    href={info.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {info.description}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Besoin d'une réponse rapide ?
          </CardTitle>
          <CardDescription>
            Pour les urgences ou les projets complexes, nous proposons également des consultations 
            en visioconférence pour mieux comprendre vos besoins.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Consultation gratuite de 30 minutes</p>
            <p>• Devis personnalisé sous 48h</p>
            <p>• Suivi de projet transparent</p>
            <p>• Support technique inclus</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
