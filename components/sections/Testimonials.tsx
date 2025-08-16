import { Card, CardContent } from '@/components/ui/card'
import { testimonials } from '@/lib/data/testimonials'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial) => (
            <Card key={testimonial.id} className="card-hover relative">
              <CardContent className="p-6">
                <div className="absolute -top-3 left-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Quote className="h-4 w-4 text-primary" />
                  </div>
                </div>
                
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-sm text-muted-foreground mb-4">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} chez {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Star className="mr-2 h-4 w-4 fill-yellow-400 text-yellow-400" />
            Note moyenne : 5.0/5 ({testimonials.length} avis)
          </div>
        </div>
      </div>
    </section>
  )
}
