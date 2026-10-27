// Audit SEO des pages du site : npm run test:seo
// À lancer pendant que le site tourne (après « npm run build » pour que le sitemap existe).
// URL testée : BASE_URL (par défaut http://localhost:3000).
import fs from 'node:fs'

const BASE = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '')
let errors = 0
let warnings = 0
const err = (page, m) => (errors++, console.log(`  ❌ ${page} : ${m}`))
const warn = (page, m) => (warnings++, console.log(`  ⚠️  ${page} : ${m}`))

// Pages à auditer : celles du sitemap (adresses ramenées sur BASE)
const sitemapFile = 'public/sitemap.xml'
if (!fs.existsSync(sitemapFile)) {
  console.log('Sitemap introuvable : lancez d’abord « npm run build ».')
  process.exit(1)
}
const paths = [...fs.readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
const meta = (html, attr, name) => {
  const re = new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"|<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`, 'i')
  const m = html.match(re)
  return m ? decode(m[1] ?? m[2]) : null
}

const titles = new Map()
const descriptions = new Map()
const internalLinks = new Set()

console.log(`\nAudit SEO de ${paths.length} pages sur ${BASE}\n`)
for (const path of paths) {
  const res = await fetch(BASE + path)
  if (res.status !== 200) {
    err(path, `statut ${res.status}`)
    continue
  }
  const html = await res.text()

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '')
  if (!title) err(path, 'pas de <title>')
  else if (title.length > 65) warn(path, `titre long (${title.length} caractères, risque d’être coupé dans Google)`)
  if (titles.has(title)) err(path, `titre identique à ${titles.get(title)}`)
  titles.set(title, path)

  const description = meta(html, 'name', 'description')
  if (!description) err(path, 'pas de meta description')
  else if (description.length < 70 || description.length > 170) warn(path, `description de ${description.length} caractères (idéal : 120 à 160)`)
  if (description && descriptions.has(description)) err(path, `description identique à ${descriptions.get(description)}`)
  if (description) descriptions.set(description, path)

  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)?.[1]
  if (!canonical) err(path, 'pas d’adresse canonique')
  else if (new URL(canonical).pathname.replace(/\/$/, '') !== path.replace(/\/$/, '')) err(path, `canonique incohérente (${canonical})`)

  const h1 = (html.match(/<h1[\s>]/g) || []).length
  if (h1 !== 1) err(path, `${h1} titre(s) <h1> (il en faut exactement 1)`)

  if (!/<html[^>]*lang="fr"/.test(html)) err(path, 'langue de la page non déclarée')
  if (!meta(html, 'property', 'og:title')) warn(path, 'pas de titre de partage (og:title)')

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1])
    } catch {
      err(path, 'données structurées JSON-LD invalides')
    }
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt=/.test(m[0])) err(path, 'image sans texte alternatif (alt)')

  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)) internalLinks.add(m[1] || '/')
}

console.log(`\nVérification de ${internalLinks.size} liens internes`)
for (const link of internalLinks) {
  const res = await fetch(BASE + link, { redirect: 'manual' })
  if (res.status >= 400) err(link, `lien cassé (statut ${res.status})`)
}

const robots = await fetch(`${BASE}/robots.txt`)
if (robots.status !== 200 || !(await robots.text()).includes('Sitemap:')) err('/robots.txt', 'absent ou sans lien vers le sitemap')

console.log(errors ? `\n❌ ${errors} erreur(s), ${warnings} avertissement(s)\n` : `\n🎉 Aucune erreur (${warnings} avertissement(s))\n`)
process.exit(errors ? 1 : 0)
