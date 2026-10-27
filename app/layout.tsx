import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter, Instrument_Serif } from 'next/font/google'
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

const grotesk = Bricolage_Grotesque({ subsets: ['latin'], display: 'swap', variable: '--font-grotesk' })

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F6F9' },
    { media: '(prefers-color-scheme: dark)', color: '#07070A' },
  ],
}

// Avant le premier affichage : active les animations (JS disponible) et applique le thème
// choisi, ou à défaut celui de l'appareil, pour éviter tout flash clair / sombre
const initScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark')}}catch(e){d.classList.add('dark')}})()`

// La page Réalisations n'apparaît dans le menu que lorsqu'il y a des projets à montrer
const links = navigation.filter((item) => item.href !== '/portfolio' || projects.length > 0)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable} ${grotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body className="font-sans">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-night"
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
