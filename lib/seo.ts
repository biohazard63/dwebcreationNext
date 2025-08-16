import { Metadata } from 'next'

export const siteConfig = {
  name: "DWebCreation",
  description: "Agence web spécialisée dans la création de sites web modernes et performants",
  url: "https://dwebcreation.com",
  ogImage: "https://dwebcreation.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/dwebcreation",
    github: "https://github.com/dwebcreation",
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "développement web",
    "création de sites",
    "agence web",
    "Next.js",
    "React",
    "TypeScript",
    "SEO",
  ],
  authors: [{ name: "DWebCreation" }],
  creator: "DWebCreation",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@dwebcreation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}
