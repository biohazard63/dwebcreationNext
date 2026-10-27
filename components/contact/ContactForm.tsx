'use client'

import { useEffect, useState } from 'react'
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { projectTypes } from '@/lib/data/contact'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  message: string
  website: string
}

const emptyForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  message: '',
  website: '',
}

const labelClass = 'mb-2 block text-sm font-medium text-ink'

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Pré-sélectionne la formule quand on arrive depuis un lien « En parler »
  useEffect(() => {
    const projet = new URLSearchParams(window.location.search).get('projet')
    if (projet && projectTypes.some((p) => p.value === projet)) {
      setFormData((prev) => ({ ...prev, projectType: projet }))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData(emptyForm)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (submitStatus === 'success') {
    return (
      <div role="status" className="rounded-2xl border border-line bg-white p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-copper" aria-hidden="true" />
        <h2 className="heading-md mt-6">Merci, votre message est bien parti.</h2>
        <p className="mt-4 text-ink-600">
          Je vous recontacte rapidement. Un email de confirmation vient de vous être envoyé.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setSubmitStatus('idle')}>
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-line bg-white p-6 sm:p-10">
      {submitStatus === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
          <p>{errorMessage || 'Une erreur est survenue. Veuillez réessayer ou m’appeler directement.'}</p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Nom *</label>
          <Input id="name" name="name" required maxLength={100} autoComplete="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Entreprise / activité</label>
          <Input
            id="company"
            name="company"
            maxLength={100}
            autoComplete="organization"
            placeholder="Ex. Menuiserie, boulangerie…"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <Input id="email" name="email" type="email" required maxLength={254} autoComplete="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Téléphone</label>
          <Input id="phone" name="phone" type="tel" maxLength={30} autoComplete="tel" value={formData.phone} onChange={handleChange} />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className={labelClass}>Votre projet</label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="flex h-12 w-full rounded-lg border border-input bg-white px-4 text-base text-ink focus-visible:border-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/20 focus-visible:ring-offset-0"
        >
          <option value="">Choisir…</option>
          {projectTypes.map((type) => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          placeholder="Parlez-moi de votre activité et de ce que vous attendez de votre site."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {/* Champ piège anti-spam, invisible pour les visiteurs */}
      <div className="!mt-0 hidden" aria-hidden="true">
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

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-stone">* Champs obligatoires. Vos données servent uniquement à vous répondre.</p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
          {!isSubmitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </Button>
      </div>
    </form>
  )
}
