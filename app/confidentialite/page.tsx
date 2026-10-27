import { PageHeader } from '@/components/shared/blocks'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Politique de confidentialité',
  description: `Comment ${siteConfig.name} traite les données personnelles transmises via le site.`,
  path: '/confidentialite',
})

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ name: 'Confidentialité', href: '/confidentialite' }]}
        chip="Informations"
        title="Politique de confidentialité"
        intro="Vos données ne servent qu’à une chose : répondre à votre demande."
      />
      <section className="pb-24 sm:pb-32">
        <div className="container">
          <div className="prose prose-lg max-w-3xl dark:prose-invert prose-headings:font-grotesk prose-headings:font-semibold prose-a:text-flame">
            <h2>Données collectées</h2>
            <p>
              Lorsque vous utilisez le formulaire de contact, les informations que vous saisissez sont collectées :
              nom, email, et le cas échéant téléphone, entreprise, type de projet et message.
            </p>

            <h2>Utilisation</h2>
            <p>
              Ces données sont utilisées uniquement pour répondre à votre demande et, si vous le souhaitez, établir
              un devis. Elles ne sont ni vendues, ni cédées, ni utilisées à des fins publicitaires.
            </p>

            <h2>Transmission</h2>
            <p>
              Les messages sont acheminés par email via le service Resend, puis conservés dans la messagerie de{' '}
              {siteConfig.name}.
            </p>

            <h2>Durée de conservation</h2>
            <p>
              Les échanges sont conservés le temps nécessaire au traitement de votre demande et à la relation
              commerciale qui peut en découler, puis supprimés.
            </p>

            <h2>Cookies</h2>
            <p>Ce site n’utilise aucun cookie publicitaire ni outil de suivi.</p>

            <h2>Vos droits</h2>
            <p>
              Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données
              en écrivant à <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Vous pouvez également
              introduire une réclamation auprès de la CNIL (cnil.fr).
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
