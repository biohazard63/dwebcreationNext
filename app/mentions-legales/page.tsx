import { PageHeader } from '@/components/shared/blocks'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Mentions légales',
  description: `Mentions légales du site ${siteConfig.name}.`,
  path: '/mentions-legales',
})

export default function LegalPage() {
  const { legal } = siteConfig
  return (
    <>
      <PageHeader eyebrow="Informations" title="Mentions légales" intro={`Informations légales relatives au site ${siteConfig.name}.`} />
      <section className="section">
        <div className="container">
          <div className="prose prose-lg max-w-3xl">
            <h2>Éditeur du site</h2>
            <p>
              {legal.publisher}
              <br />
              {siteConfig.name} — {legal.status}
              <br />
              SIRET : {legal.siret}
              <br />
              Adresse : {legal.address}
              <br />
              Email : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <br />
              Téléphone : {siteConfig.phone}
            </p>
            <p>Directeur de la publication : {legal.publisher}</p>

            <h2>Hébergement</h2>
            <p>{legal.host}</p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus de ce site (textes, visuels, logo, mise en page) est la propriété de{' '}
              {siteConfig.name}, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Le traitement des données transmises via le formulaire de contact est détaillé dans la{' '}
              <a href="/confidentialite">politique de confidentialité</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
