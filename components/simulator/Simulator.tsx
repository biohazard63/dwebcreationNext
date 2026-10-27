'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, RotateCcw, Sparkles } from 'lucide-react'
import { offers } from '@/lib/data/offers'
import { type Answers, estimate, labelsFor, questions, recommendOffer, summaryText } from '@/lib/data/simulator'
import { cn } from '@/lib/utils'

export function Simulator() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const done = step >= questions.length
  const question = questions[Math.min(step, questions.length - 1)]
  const selected = answers[question.id] ?? []
  const progress = Math.round((Math.min(step, questions.length) / questions.length) * 100)

  const choose = (value: string) => {
    if (question.multiple) {
      setAnswers((a) => {
        const current = a[question.id] ?? []
        return { ...a, [question.id]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value] }
      })
    } else {
      setAnswers((a) => ({ ...a, [question.id]: [value] }))
      // Passe automatiquement à la question suivante pour les choix uniques
      const current = step
      setTimeout(() => setStep((s) => (s === current ? s + 1 : s)), 220)
    }
  }

  const restart = () => {
    setAnswers({})
    setStep(0)
  }

  const sendToContact = () => {
    const offerId = recommendOffer(answers)
    const params = new URLSearchParams({ projet: offerId, recap: summaryText(answers) })
    router.push(`/contact?${params.toString()}`)
  }

  return (
    <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blush/20 blur-[100px]" aria-hidden="true" />

      {/* Progression */}
      <div className="relative flex items-center justify-between gap-4 text-sm text-mist">
        <span>{done ? 'Résultat' : `Question ${step + 1} sur ${questions.length}`}</span>
        <span>{progress} %</span>
      </div>
      <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-gradient-to-r from-flame via-blush to-violet transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      {!done ? (
        <div key={question.id} className="build relative mt-10">
          <h2 className="font-grotesk text-3xl font-semibold tracking-tight sm:text-4xl">{question.title}</h2>
          {question.subtitle && <p className="mt-2 text-mist">{question.subtitle}</p>}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {question.options.map((option) => {
              const active = selected.includes(option.value)
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => choose(option.value)}
                  className={cn(
                    'group flex items-start gap-4 rounded-2xl border p-5 text-left transition-all',
                    active
                      ? 'border-transparent bg-gradient-to-br from-flame/25 via-blush/20 to-violet/25 ring-1 ring-blush/60'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]'
                  )}
                >
                  <span
                    className={cn(
                      'mt-0.5 flex h-6 w-6 flex-none items-center justify-center border transition-colors',
                      question.multiple ? 'rounded-md' : 'rounded-full',
                      active ? 'border-transparent bg-gradient-to-br from-flame to-blush text-snow' : 'border-white/25'
                    )}
                  >
                    {active && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                  </span>
                  <span>
                    <span className="block font-medium">{option.label}</span>
                    {option.hint && <span className="mt-1 block text-sm text-mist">{option.hint}</span>}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-10 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-white disabled:invisible"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Retour
            </button>
            {(question.multiple || selected.length > 0) && (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={selected.length === 0}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-medium text-night transition-opacity disabled:opacity-40"
              >
                Continuer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <Result answers={answers} onRestart={restart} onSend={sendToContact} onBack={() => setStep(questions.length - 1)} />
      )}
    </div>
  )
}

function Result({
  answers,
  onRestart,
  onSend,
  onBack,
}: {
  answers: Answers
  onRestart: () => void
  onSend: () => void
  onBack: () => void
}) {
  const offer = offers.find((o) => o.id === recommendOffer(answers)) ?? offers[0]
  const price = estimate(answers)
  const extras = labelsFor('fonctions', answers.fonctions)

  return (
    <div className="build relative mt-10">
      <p className="chip">
        <Sparkles className="h-3.5 w-3.5 text-flame" aria-hidden="true" />
        Formule recommandée
      </p>
      <h2 className="mt-5 font-grotesk text-4xl font-semibold tracking-tight sm:text-5xl">
        <span className="text-gradient">{offer.name}</span>
      </h2>
      <p className="mt-4 max-w-xl text-lg text-mist">{offer.pitch}</p>

      {price ? (
        <p className="mt-6 text-2xl font-semibold">
          Entre {price.low.toLocaleString('fr-FR')} € et {price.high.toLocaleString('fr-FR')} €
          <span className="ml-2 text-sm font-normal text-mist">fourchette indicative, devis précis offert</span>
        </p>
      ) : (
        <p className="mt-6 text-mist">Le prix exact dépend de vos besoins : je vous envoie un devis détaillé et gratuit.</p>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm font-medium">Votre projet</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li>Activité : {labelsFor('activite', answers.activite).join(', ')}</li>
            <li>Pages : {labelsFor('pages', answers.pages).join(', ')}</li>
            <li>Contenus : {labelsFor('contenus', answers.contenus).join(', ')}</li>
            <li>Délai : {labelsFor('delai', answers.delai).join(', ')}</li>
            {extras.length > 0 && <li>Besoins : {extras.join(', ')}</li>}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm font-medium">Inclus dans la formule</p>
          <ul className="mt-4 space-y-2 text-sm">
            {offer.includes.map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-none text-flame" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onSend}
          className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-flame via-blush to-violet px-8 font-medium text-snow shadow-[0_10px_40px_-10px_rgba(255,61,127,0.7)] transition-transform hover:scale-[1.03]"
        >
          Recevoir mon devis gratuit
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
        <button type="button" onClick={onBack} className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm text-white hover:bg-white/5">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Modifier
        </button>
        <button type="button" onClick={onRestart} className="inline-flex h-14 items-center justify-center gap-2 px-4 text-sm text-mist hover:text-white">
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Recommencer
        </button>
      </div>
      <p className="mt-4 text-sm text-mist">Vos réponses seront ajoutées automatiquement à votre message.</p>
    </div>
  )
}
