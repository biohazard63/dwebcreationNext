// Diagnostic de l'envoi d'emails : npm run test:email
// Vérifie les fichiers .env, les variables lues (sans afficher le mot de passe),
// la connexion SMTP, puis envoie un email de test.
import fs from 'node:fs'
import path from 'node:path'
import nextEnv from '@next/env'
import nodemailer from 'nodemailer'

const root = process.cwd()
const ok = (m) => console.log(`  ✅ ${m}`)
const ko = (m) => console.log(`  ❌ ${m}`)
const info = (m) => console.log(`  ℹ️  ${m}`)

console.log('\n1. Fichiers d’environnement dans', root)
const envFiles = fs.readdirSync(root).filter((f) => /^\.env/i.test(f) || /^env/i.test(f))
if (envFiles.length === 0) ko('Aucun fichier .env trouvé dans ce dossier.')
let encodingProblem = false
for (const file of envFiles) {
  const full = path.join(root, file)
  const buf = fs.readFileSync(full)
  if (file.toLowerCase().endsWith('.txt')) {
    encodingProblem = true
    ko(`${file} : NOM INCORRECT, renommez-le sans « .txt » (ex. : ren ${file} ${file.slice(0, -4)})`)
    continue
  }
  const utf16le = buf[0] === 0xff && buf[1] === 0xfe
  const utf16be = buf[0] === 0xfe && buf[1] === 0xff
  const bom = buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf
  if (file !== '.env.example' && (utf16le || utf16be || bom)) {
    // Réparation automatique : réécriture en UTF-8 sans BOM (contenu inchangé)
    let text
    if (utf16le) text = buf.subarray(2).toString('utf16le')
    else if (utf16be) text = Buffer.from(buf.subarray(2)).swap16().toString('utf16le')
    else text = buf.subarray(3).toString('utf8')
    fs.writeFileSync(full, text, 'utf8')
    ok(`${file} : encodage ${bom ? 'UTF-8 avec BOM' : 'UTF-16'} détecté et corrigé automatiquement`)
  } else if (file === '.env.example') {
    info(`${file} : modèle uniquement, jamais lu par le site`)
  } else {
    info(`${file} : OK`)
  }
}

// Variables déjà définies dans Windows : Next.js ne les remplace pas par celles du fichier
const preset = ['SMTP_USER', 'SMTP_PASS'].filter((k) => k in process.env)

console.log('\n2. Variables lues (comme le fait Next.js en développement)')
const { loadedEnvFiles } = nextEnv.loadEnvConfig(root, true, { info: () => {}, error: console.error })
info(`Fichiers chargés : ${loadedEnvFiles.map((f) => f.path).join(', ') || 'aucun'}`)
const user = process.env.SMTP_USER
const pass = (process.env.SMTP_PASS || '').replace(/\s/g, '')
if (user) ok(`SMTP_USER = ${user}`)
else ko('SMTP_USER est vide ou absent')
if (pass) ok(`SMTP_PASS présent (${pass.length} caractères${pass.length === 16 ? '' : ' — un mot de passe d’application Gmail en fait 16'})`)
else ko('SMTP_PASS est vide ou absent')

if (!user || !pass) {
  console.log('\n   Analyse détaillée des lignes SMTP (valeurs masquées) :')
  for (const p of preset) {
    ko(`${p} est déjà défini dans les variables d’environnement de Windows / du terminal : il masque celui du fichier.`)
    console.log(`      Supprimez-le (PowerShell : Remove-Item Env:${p}) puis rouvrez le terminal.`)
  }
  for (const file of envFiles.filter((f) => f !== '.env.example' && !f.toLowerCase().endsWith('.txt'))) {
    const lines = fs.readFileSync(path.join(root, file), 'utf8').split(/\r?\n/)
    const found = []
    lines.forEach((line, i) => {
      if (!/smtp_?pass/i.test(line)) return
      const n = `${file}, ligne ${i + 1}`
      found.push(n)
      const trimmed = line.trim()
      if (trimmed.startsWith('#')) return info(`${n} : en commentaire (# au début), ignorée`)
      const eq = line.indexOf('=')
      if (eq === -1) return ko(`${n} : pas de signe « = »`)
      const key = line.slice(0, eq)
      const value = line.slice(eq + 1)
      if (key !== 'SMTP_PASS') {
        const shown = JSON.stringify(key).replace(/[^\x20-\x7e]/g, (c) => `[U+${c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}]`)
        ko(`${n} : nom de variable incorrect ${shown} — il faut exactement SMTP_PASS, sans espace ni caractère invisible`)
      }
      const v = value.trim()
      if (!v) return ko(`${n} : aucune valeur après le « = »`)
      if (/^[«“”‘’]/.test(v) || /[«»“”‘’]$/.test(v)) ko(`${n} : guillemets typographiques (« » “ ”) : utilisez des guillemets droits "..." ou aucun`)
      if (value !== value.trimStart()) ko(`${n} : espace juste après le « = »`)
      if (v.includes('$')) ko(`${n} : contient un « $ », interprété comme une variable par Next.js. Un mot de passe d’application Gmail ne contient que des lettres.`)
      if (/[^\x20-\x7e]/.test(v)) ko(`${n} : contient des caractères invisibles ou accentués (souvent dus au copier-coller)`)
      const letters = v.replace(/^["']|["']$/g, '').replace(/\s/g, '')
      info(`${n} : valeur de ${letters.length} caractères${/^[a-z]{16}$/.test(letters) ? ' (format correct)' : ''}`)
    })
    if (found.length > 1) ko(`SMTP_PASS apparaît ${found.length} fois dans ${file} : c’est la dernière ligne qui compte. Gardez-en une seule.`)
    if (found.length === 0) ko(`Aucune ligne SMTP_PASS dans ${file}`)
  }
  console.log('\n➡️  Les variables ne sont pas lues.')
  if (encodingProblem) console.log('   Corrigez d’abord le problème de fichier signalé au point 1.')
  console.log('   Le fichier doit s’appeler exactement « .env » ou « .env.local », être dans ce dossier,')
  console.log('   et contenir les lignes SMTP_USER=... et SMTP_PASS=... (sans # devant).\n')
  process.exit(1)
}

console.log('\n3. Connexion au serveur Gmail')
const port = Number(process.env.SMTP_PORT || 465)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port,
  secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
  auth: { user, pass },
})
try {
  await transporter.verify()
  ok('Connexion et identifiants acceptés')
} catch (error) {
  ko(`Connexion refusée : ${error.message}`)
  if (/535|Username and Password not accepted|BadCredentials/i.test(error.message)) {
    console.log('\n➡️  Gmail refuse le mot de passe. Vérifiez :')
    console.log('   - que c’est un « mot de passe d’application » (16 lettres), pas votre mot de passe Gmail ;')
    console.log('   - que la validation en deux étapes est activée ;')
    console.log('   - qu’il a été copié-collé sans faute : en cas de doute, créez-en un nouveau.\n')
  } else if (/ETIMEDOUT|ECONNREFUSED|ENOTFOUND|ESOCKET/i.test(error.message)) {
    console.log('\n➡️  Le serveur Gmail est injoignable : pare-feu, antivirus ou réseau qui bloque le port 465.\n')
  }
  process.exit(1)
}

console.log('\n4. Envoi d’un email de test')
const to = process.env.CONTACT_TO_EMAIL || user
try {
  await transporter.sendMail({
    from: `Test du site <${user}>`,
    to,
    subject: 'Test d’envoi du formulaire — ça fonctionne',
    text: 'Si vous lisez ceci, l’envoi des emails du site est correctement configuré.',
  })
  ok(`Email envoyé à ${to} : vérifiez votre boîte (et les spams).`)
  console.log('\n🎉 Tout est prêt. Redémarrez « npm run dev » et testez le formulaire.\n')
} catch (error) {
  ko(`Envoi refusé : ${error.message}`)
  process.exit(1)
}
