// Tests de sécurité du site : npm run test:security
// À lancer pendant que le site tourne (npm run dev ou npm start).
// URL testée : BASE_URL (par défaut http://localhost:3000).
// Aucun email n'est envoyé : seules des requêtes qui doivent être refusées sont testées.
const BASE = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '')
const API = `${BASE}/api/contact`
let failures = 0

function check(name, condition, detail = '') {
  if (condition) console.log(`  ✅ ${name}`)
  else {
    failures++
    console.log(`  ❌ ${name}${detail ? ` — ${detail}` : ''}`)
  }
}

const json = (body, headers = {}) =>
  fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: BASE, ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })

// Chaque test utilise sa propre « IP » pour ne pas être bloqué par la limite d'envois
let ipCounter = 1
const ip = () => ({ 'X-Forwarded-For': `203.0.113.${ipCounter++}` })

console.log(`\nTests de sécurité sur ${BASE}\n`)

console.log('1. En-têtes de sécurité')
const res = await fetch(BASE)
const h = (n) => res.headers.get(n) || ''
check('Content-Security-Policy présent', h('content-security-policy').length > 0)
check('Interdiction d’affichage dans une iframe (anti-clickjacking)', h('x-frame-options') === 'DENY' || /frame-ancestors 'none'/.test(h('content-security-policy')))
check('X-Content-Type-Options: nosniff', h('x-content-type-options') === 'nosniff')
check('Referrer-Policy présent', h('referrer-policy').length > 0)
check('Strict-Transport-Security présent', h('strict-transport-security').includes('max-age'))
check('Permissions-Policy présent', h('permissions-policy').length > 0)
check('X-Powered-By masqué', !res.headers.has('x-powered-by'))

console.log('\n2. Formulaire : validation des données')
let r = await json({ name: 'a' }, ip())
check('Champs obligatoires manquants → refus 400', r.status === 400, `statut ${r.status}`)
r = await json('pas du json', ip())
check('Corps invalide → refus 400', r.status === 400, `statut ${r.status}`)
r = await json({ name: ['a'], email: { x: 1 }, message: 42 }, ip())
check('Types inattendus (tableaux, objets) → refus 400', r.status === 400, `statut ${r.status}`)
r = await json({ name: 'a', email: 'pas-un-email', message: 'x' }, ip())
check('Email invalide → refus 400', r.status === 400, `statut ${r.status}`)
r = await json({ name: 'a', email: 'victime@example.com\r\nBcc: spam@example.com', message: 'x' }, ip())
check('Injection d’en-tête email (retour à la ligne dans l’email) → refus', r.status === 400, `statut ${r.status}`)
r = await json({ name: 'a', email: 'a@b.co', message: 'x'.repeat(6000) }, ip())
check('Message trop long → refus 400', r.status === 400, `statut ${r.status}`)
r = await json({ name: 'a', email: 'a@b.co', message: 'x', padding: 'y'.repeat(200_000) }, ip())
check('Requête trop volumineuse (200 Ko) → refus', r.status === 413 || r.status === 400, `statut ${r.status}`)

console.log('\n3. Formulaire : protections anti-abus')
r = await json({ name: 'a', email: 'a@b.co', message: 'x', website: 'http://spam' }, ip())
check('Robot (champ piège rempli) : réponse neutre, rien envoyé', r.status === 200, `statut ${r.status}`)
r = await fetch(API, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Origin: 'https://site-pirate.example', ...ip() },
  body: JSON.stringify({ name: 'a', email: 'a@b.co', message: 'x' }),
})
check('Envoi depuis un autre site (Origin étrangère) → refus 403', r.status === 403, `statut ${r.status}`)
r = await fetch(API, {
  method: 'POST',
  headers: { 'Content-Type': 'text/plain', Origin: BASE, ...ip() },
  body: JSON.stringify({ name: 'a', email: 'a@b.co', message: 'x' }),
})
check('Envoi « text/plain » (formulaire caché d’un autre site) → refus 415', r.status === 415, `statut ${r.status}`)
const sameIp = ip()
const statuses = []
for (let i = 0; i < 7; i++) statuses.push((await json({ name: 'a', email: 'invalide', message: 'x' }, sameIp)).status)
check('Limite d’envois par IP (429 après 5 essais)', statuses.slice(5).every((s) => s === 429), statuses.join(', '))
r = await fetch(API, { method: 'GET' })
check('Méthode GET sur l’API → refus 405', r.status === 405, `statut ${r.status}`)

console.log('\n4. Pages : injection de code (XSS) par l’adresse')
const payload = '"><script>alert(1)</script><img src=x onerror=alert(1)>'
for (const path of [`/contact?projet=${encodeURIComponent(payload)}&recap=${encodeURIComponent(payload)}`, `/demos/${encodeURIComponent(payload)}`, `/site-internet/${encodeURIComponent(payload)}`]) {
  const page = await fetch(BASE + path)
  const html = await page.text()
  check(`Pas de code injecté dans la page (${path.split('?')[0]})`, !html.includes('<script>alert(1)</script>') && !html.includes('onerror=alert(1)'))
}
r = await fetch(`${BASE}/demos/inconnu`)
check('Page inexistante → 404 propre', r.status === 404, `statut ${r.status}`)

console.log('\n5. Fichiers sensibles non accessibles')
for (const path of ['/.env', '/.env.local', '/.git/config', '/package.json', '/next.config.js']) {
  const f = await fetch(BASE + path)
  const body = await f.text()
  check(`${path} inaccessible`, f.status === 404 || !/SMTP_|\[core\]|"dependencies"|module\.exports/.test(body), `statut ${f.status}`)
}

console.log(failures ? `\n❌ ${failures} test(s) en échec\n` : '\n🎉 Tous les tests de sécurité sont passés\n')
process.exit(failures ? 1 : 0)
