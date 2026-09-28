#!/usr/bin/env node
// Generate Jupeemoon logo concepts with Google's Nano Banana (Gemini image models).
//
// Usage:
//   GEMINI_API_KEY=... npm run logo:generate
//   GEMINI_API_KEY=... npm run logo:generate -- --variant mark --count 4
//   GEMINI_API_KEY=... npm run logo:generate -- --ref public/brand/current-logo.png
//
// Options:
//   --variant mark|lockup|both   what to generate (default: both)
//   --count N                    images per variant (default: 2)
//   --ref path.png|.jpg|.webp    optional reference image to restyle
// Env:
//   GEMINI_API_KEY (or GOOGLE_API_KEY)  required — create one at https://aistudio.google.com/apikey
//   GEMINI_IMAGE_MODEL                  default "gemini-2.5-flash-image" (Nano Banana);
//                                       e.g. "gemini-3-pro-image-preview" for Nano Banana Pro
//
// Output: public/brand/generated/*.png — review them, then swap in the one you like.

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
const model = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image'

const args = process.argv.slice(2)
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback
}
const variant = opt('variant', 'both')
const count = Math.max(1, Math.min(8, Number(opt('count', '2')) || 2))
const refPath = opt('ref', '')

// Brand colours are fixed: J green, M gold, gold wordmark — keep them exactly.
const ICON = `a rounded-square tile filled with a deep night-green gradient (#1B3022 top-left to #0A130D bottom-right) with a thin, subtle gold inner border. Inside the tile, a bold geometric monogram "JM" drawn with thick strokes and rounded ends: the letter J in solid green exactly #3D9A52, the letter M in solid gold exactly #E6C84A, and a small gold (#E6C84A) crescent moon nestled in the empty space above the hook of the J`

const PROMPTS = {
  mark: `Design a premium, modern app-icon logo mark for "Jupeemoon", a software development company that builds mobile apps, web apps and voice AI. Composition: ${ICON}. Style: flat vector, crisp clean edges, balanced optical spacing, top-tier tech-brand quality. Keep the brand colours exactly as specified. No other text, no 3D, no mockup, no shadow outside the tile. Centre the tile on a plain pure white background with generous padding.`,
  lockup: `Design a horizontal logo lockup for "Jupeemoon", a software development company. Left: an app-icon mark — ${ICON}. Right: the wordmark "Jupeemoon" spelled exactly J-u-p-e-e-m-o-o-n, in a bold modern geometric sans-serif (similar to Bricolage Grotesque ExtraBold) with tight letter spacing, filled with a gold gradient from #C9A82E through #E6C84A to #B8921F. Keep the brand colours exactly as specified. Flat vector style, crisp edges, perfectly aligned, plain pure white background, no tagline, no extra text, no mockup.`,
}

const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' }

async function generate(prompt, aspectRatio, ref) {
  const parts = [{ text: prompt }]
  if (ref) {
    parts.push({ text: 'Use the attached image as the current logo to refine. Keep its concept and colours, and make it more polished and professional.' })
    parts.push({ inline_data: { mime_type: ref.mime, data: ref.data } })
  }
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({
      contents: [{ role: 'user', parts }],
      generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio } },
    }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(`${res.status} ${json?.error?.message || res.statusText}`)
  }
  const out = (json.candidates ?? [])
    .flatMap((c) => c.content?.parts ?? [])
    .map((p) => p.inlineData ?? p.inline_data)
    .filter(Boolean)
  if (!out.length) throw new Error('No image returned (the prompt may have been blocked).')
  return out[0].data
}

async function main() {
  if (!apiKey) {
    console.error('Set GEMINI_API_KEY (get one at https://aistudio.google.com/apikey), then run again.')
    process.exit(1)
  }

  let ref = null
  if (refPath) {
    const mime = MIME[extname(refPath).toLowerCase()]
    if (!mime) throw new Error('--ref must be a .png, .jpg or .webp file')
    ref = { mime, data: (await readFile(refPath)).toString('base64') }
  }

  const outDir = join('public', 'brand', 'generated')
  await mkdir(outDir, { recursive: true })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const jobs = variant === 'both' ? ['mark', 'lockup'] : [variant]

  console.log(`Model: ${model}`)
  for (const job of jobs) {
    if (!PROMPTS[job]) throw new Error(`Unknown --variant "${job}" (use mark, lockup or both)`)
    for (let i = 1; i <= count; i++) {
      process.stdout.write(`Generating ${job} ${i}/${count}… `)
      try {
        const data = await generate(PROMPTS[job], job === 'mark' ? '1:1' : '16:9', ref)
        const file = join(outDir, `jupeemoon-${job}-${stamp}-${i}.png`)
        await writeFile(file, Buffer.from(data, 'base64'))
        console.log(file)
      } catch (err) {
        console.log(`failed: ${err.message}`)
      }
    }
  }
}

main().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
