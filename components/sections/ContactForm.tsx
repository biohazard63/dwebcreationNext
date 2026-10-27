"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  message: string
  website: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    website: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '', website: '' })
      } else {
        const data = await response.json().catch(() => null)
        setErrorMessage(data?.error || '')
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Envoyez-nous un message</CardTitle>
        <CardDescription>
          Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === 'success' && (
          <div role="status" className="mb-6 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400">
            <CheckCircle className="h-5 w-5" />
            <p>Message envoyé avec succès ! Nous vous répondrons rapidement.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div role="alert" className="mb-6 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-400">
            <AlertCircle className="h-5 w-5" />
            <p>{errorMessage || 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ piège anti-spam, invisible pour les visiteurs */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Site web</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nom complet *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Entreprise
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              maxLength={100}
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nom de votre entreprise"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet..."
              rows={6}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Envoyer le message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
