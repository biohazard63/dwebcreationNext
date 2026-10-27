import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = `${siteConfig.name} — Création de sites internet à ${siteConfig.city}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#12110F',
          color: '#FBFAF7',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 34 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              border: '2px solid #E0915F',
              color: '#E0915F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            D
          </div>
          {siteConfig.name}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, maxWidth: 950 }}>
            Un site internet qui vous amène de vrais clients.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: '#E0915F' }}>
            {`Développeur web indépendant · ${siteConfig.city}`}
          </div>
        </div>
      </div>
    ),
    size
  )
}
