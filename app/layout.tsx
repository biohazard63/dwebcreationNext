import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { defaultMetadata, localBusinessJsonLd } from '@/lib/seo'
import { navigation } from '@/lib/site'
import { projects } from '@/lib/data/projects'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileContactBar } from '@/components/layout/MobileContactBar'
import { JsonLd } from '@/components/shared/blocks'

const sans = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })
const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  themeColor: '#12110F',
}

// Active les animations d'apparition uniquement si JavaScript est disponible
const jsScript = `document.documentElement.classList.add('js')`

// La page Réalisations n'apparaît dans le menu que lorsqu'il y a des projets à montrer
const links = navigation.filter((item) => item.href !== '/portfolio' || projects.length > 0)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsScript }} />
      </head>
      <body className="font-sans">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Aller au contenu
        </a>
        <JsonLd data={localBusinessJsonLd()} />
        <div className="flex min-h-screen flex-col">
          <Header links={links} />
          <main id="contenu" className="flex-1">
            {children}
          </main>
          <Footer links={links} />
        </div>
        <MobileContactBar />
      </body>
    </html>
  )
}
