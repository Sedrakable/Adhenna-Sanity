//translate-page.js
import 'dotenv/config'
import {client} from './client.js'
import * as deepl from 'deepl-node'

// Initialize DeepL translator
const translator = new deepl.Translator(process.env.DEEPL_API_KEY)

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
  pageType: 'blog',
  sourceLang: 'fr',
  targetLang: 'en-US',
  sanityLang: 'en', // ADD THIS LINE
  translationDelay: 100,
}

// Track which references we've already translated in this session
const translatedRefs = new Map() // frId -> enId

// ============================================
// LOGGING UTILITIES
// ============================================
const log = {
  step: (num, message) => console.log(`\nStep ${num}: ${message}`),
  success: (message) => console.log(`✓ ${message}`),
  info: (message) => console.log(`  • ${message}`),
  warning: (message) => console.warn(`  ⚠️  ${message}`),
  error: (message) => console.error(`❌ ${message}`),
  title: (message) => console.log(`\n${'='.repeat(50)}\n${message}\n${'='.repeat(50)}`),
  complete: () => console.log('\n✅ Translation complete!\n'),
}

// ============================================
// TRANSLATION FUNCTIONS
// ============================================
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function translateText(text, from = CONFIG.sourceLang, to = CONFIG.targetLang) {
  if (!text || typeof text !== 'string' || !text.trim()) return text

  // Skip translating if it looks like a price, number with symbols, or short technical string
  // Examples: "140$ et +", "200$-350$", "10 kg", "5-10", etc.
  if (/^[\d\s$€£¥+\-–—.,]+(?:\s*(?:et|and|to|or|ou|à)\s*[\d\s$€£¥+\-–—.,]+)*$/i.test(text)) {
    console.log(`    [Skipping price/number: "${text}"]`)
    return text
  }

  await delay(CONFIG.translationDelay)

  try {
    const result = await translator.translateText(text, from, to)
    return result.text
  } catch (error) {
    log.warning(`Translation error: ${error.message}`)
    return text
  }
}

async function translateLongText(text, from = CONFIG.sourceLang, to = CONFIG.targetLang) {
  if (!text || typeof text !== 'string' || !text.trim()) return text

  const MAX_CHUNK_SIZE = 400

  if (text.length <= MAX_CHUNK_SIZE) {
    return translateText(text, from, to)
  }

  console.log(`    [Long text detected: ${text.length} chars, splitting into chunks]`)

  // Split by sentences
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text]
  const chunks = []
  let currentChunk = ''

  for (const sentence of sentences) {
    if ((currentChunk + sentence).length > MAX_CHUNK_SIZE && currentChunk) {
      chunks.push(currentChunk.trim())
      currentChunk = sentence
    } else {
      currentChunk += sentence
    }
  }

  if (currentChunk) chunks.push(currentChunk.trim())

  console.log(`    [Translating ${chunks.length} chunks]`)

  const translatedChunks = []
  for (let i = 0; i < chunks.length; i++) {
    console.log(`    [Chunk ${i + 1}/${chunks.length}]`)
    const translated = await translateText(chunks[i], from, to)
    translatedChunks.push(translated)
  }

  return translatedChunks.join(' ')
}

function translateHiddenTitle(title) {
  if (!title || typeof title !== 'string') return title

  // Try to replace French/Français/Francais with English
  let translated = title
    .replace(/\bFrench\b/gi, 'English')
    .replace(/\bFrançais\b/gi, 'English')
    .replace(/\bFrancais\b/gi, 'English')

  // If nothing was replaced (title is the same), add (English) at the end
  if (translated === title) {
    translated = `${title} (English)`
  }

  return translated
}

// ============================================
// PORTABLE TEXT TRANSLATION
// ============================================
const isPortableText = (val) => {
  if (!Array.isArray(val)) return false
  if (val.length === 0) return false
  if (!val.every((b) => b && b._type)) return false
  return val.some((b) => b._type === 'block')
}

async function translatePortableText(blocks) {
  const out = []
  for (const block of blocks) {
    if (block._type === 'block' && Array.isArray(block.children)) {
      const newChildren = []
      for (let i = 0; i < block.children.length; i++) {
        const child = block.children[i]
        const prevChild = block.children[i - 1]
        const nextChild = block.children[i + 1]

        if (child._type === 'span' && typeof child.text === 'string') {
          let translated = await translateText(child.text)
          console.log(`    Portable text: "${child.text}" → "${translated}"`)

          // Add leading space if:
          // - Previous child exists AND
          // - Current text doesn't start with space AND
          // - Previous text doesn't end with space
          if (
            prevChild &&
            prevChild.text &&
            !translated.startsWith(' ') &&
            !prevChild.text.endsWith(' ')
          ) {
            translated = ' ' + translated
          }

          // Add trailing space if:
          // - Next child exists AND
          // - Current text doesn't end with space AND
          // - Next will be translated (is a span with text)
          if (
            nextChild &&
            nextChild._type === 'span' &&
            nextChild.text &&
            !translated.endsWith(' ')
          ) {
            translated = translated + ' '
          }

          newChildren.push({...child, text: translated})
        } else {
          newChildren.push(child)
        }
      }
      out.push({...block, children: newChildren})
    } else {
      out.push(block)
    }
  }
  return out
}

// ============================================
// UNIVERSAL RECURSIVE TRANSLATION
// ============================================
async function translateNode(value, key = '', depth = 0) {
  const indent = '  '.repeat(depth)

  if (value == null) return value

  if (shouldSkipField(key)) {
    console.log(`${indent}[Skipping system field: ${key}]`)
    return value
  }

  // Handle hiddenTitle with manual replacement
  if (key === 'hiddenTitle') {
    if (typeof value === 'string') {
      const translated = translateHiddenTitle(value)
      console.log(`${indent}${key}: "${value}" → "${translated}" (manual)`)
      return translated
    }
    return value
  }

  // Switch lang field
  if (key === 'lang') {
    console.log(`${indent}lang: "${value}" → "en" (switched)`)
    return 'en' // Change from CONFIG.targetLang to just 'en'
  }

  // REFERENCE TRANSLATION
  if (value && typeof value === 'object' && value._ref) {
    const refId = value._ref
    console.log(`${indent}[Found reference: ${refId}]`)

    if (translatedRefs.has(refId)) {
      const enRefId = translatedRefs.get(refId)
      console.log(`${indent}  → Already translated, using: ${enRefId}`)
      return {...value, _ref: enRefId}
    }

    const enRefId = `${refId}__en`
    const existingEnDoc = await client.fetch(`*[_id == $id][0]`, {id: enRefId})

    if (existingEnDoc) {
      console.log(`${indent}  → English version exists: ${enRefId}`)
      translatedRefs.set(refId, enRefId)
      return {...value, _ref: enRefId}
    }

    console.log(`${indent}  → Translating referenced document...`)
    const frRefDoc = await client.fetch(`*[_id == $id][0]`, {id: refId})

    if (!frRefDoc) {
      console.log(`${indent}  ⚠️  Referenced document not found, keeping original`)
      return value
    }

    if (frRefDoc.lang === undefined) {
      console.log(`${indent}  → No lang field, this is a shared reference, keeping original`)
      return value
    }

    const translatedRefDoc = await translateReferencedDocument(frRefDoc, depth + 1)

    await client.createOrReplace(translatedRefDoc)
    console.log(`${indent}  ✓ Saved translated reference: ${enRefId}`)

    translatedRefs.set(refId, enRefId)

    return {...value, _ref: enRefId}
  }

  // Handle arrays
  if (Array.isArray(value)) {
    if (isPortableText(value)) {
      console.log(`${indent}[Translating Portable Text in: ${key}]`)
      return translatePortableText(value)
    }
    console.log(`${indent}[Translating array: ${key}]`)
    const result = []
    for (let i = 0; i < value.length; i++) {
      console.log(`${indent}  [Array item ${i}]`)
      result.push(await translateNode(value[i], `${key}[${i}]`, depth + 1))
    }
    return result
  }

  // Handle objects
  if (typeof value === 'object') {
    console.log(
      `${indent}${key ? `--- Translating object: ${key} ---` : '--- Translating object ---'}`,
    )
    const result = {}
    for (const [k, v] of Object.entries(value)) {
      result[k] = await translateNode(v, k, depth + 1)
    }
    return result
  }

  // Handle strings
  if (typeof value === 'string') {
    if (value.length > 400) {
      const translated = await translateLongText(value)
      console.log(
        `${indent}${key}: [Long text: ${value.length} chars] → [${translated.length} chars]`,
      )
      return translated
    }
    const translated = await translateText(value)
    if (translated !== value) {
      console.log(`${indent}${key}: "${value}" → "${translated}"`)
    }
    return translated
  }

  return value
}

function shouldSkipField(key) {
  const skipFields = [
    '_id',
    '_rev',
    '_type',
    '_createdAt',
    '_updatedAt',
    '_key',
    '_ref',
    '_weak',
    'path',
    'slug',
    'image',
    'alt',
    'part1',
    'part2',
  ]
  return key.startsWith('_') || skipFields.includes(key)
}

// ============================================
// REFERENCE DOCUMENT TRANSLATION (COMMENTED OUT)
// ============================================
async function translateReferencedDocument(doc, depth = 0) {
  const indent = '  '.repeat(depth)
  const enId = `${doc._id}__en`

  console.log(
    `${indent}┌─ Translating referenced ${doc._type}: ${doc.hiddenTitle || doc.title || doc.name || doc._id}`,
  )

  const {_id, _rev, _createdAt, _updatedAt, ...content} = doc
  content.__i18n_base = _id

  const translatedContent = {}
  for (const [key, value] of Object.entries(content)) {
    translatedContent[key] = await translateNode(value, key, depth + 1)
  }

  console.log(`${indent}└─ Done translating ${doc._type}`)

  return {_id: enId, _type: doc._type, ...translatedContent}
}

// ============================================
// MAIN WORKFLOW
// ============================================
async function fetchSourcePage(pageType, lang) {
  log.step(1, `Fetching ${lang} ${pageType}...`)

  const page = await client.fetch(`*[_type=="${pageType}" && lang=="${lang}"][0]`)

  if (!page) throw new Error(`No ${lang} ${pageType} found`)

  log.success(`Found: ${page.hiddenTitle || page.title || page.name || page._id}`)
  log.info(`ID: ${page._id}`)

  return page
}

async function translateDocument(doc) {
  log.step(2, 'Translating document...')

  const enId = `${doc._id}__en`
  console.log(`\nTranslating: ${doc._type} - ${doc.hiddenTitle || doc.title || doc.name}`)

  const {_id, _rev, _createdAt, _updatedAt, ...content} = doc
  content.__i18n_base = _id

  console.log('\n--- Translating document content ---')

  const translatedContent = {}
  for (const [key, value] of Object.entries(content)) {
    translatedContent[key] = await translateNode(value, key, 0)
  }

  return {_id: enId, _type: doc._type, ...translatedContent}
}

async function saveDocument(translatedDoc) {
  log.step(3, 'Saving English document...')
  await client.createOrReplace(translatedDoc)
  log.success(`Saved document with ID: ${translatedDoc._id}`)
}

function printSummary(originalId, translatedId) {
  log.complete()
  console.log('📊 Summary:')
  log.info(`Original (French) ID: ${originalId}`)
  log.info(`Translated (English) ID: ${translatedId}`)
}

// ============================================
// MAIN EXECUTION
// ============================================
;(async () => {
  try {
    log.title(`🚀 Translating ${CONFIG.pageType} from ${CONFIG.sourceLang} to ${CONFIG.targetLang}`)
    log.info('Using DeepL for translation')

    const sourcePage = await fetchSourcePage(CONFIG.pageType, CONFIG.sourceLang)
    const translatedDoc = await translateDocument(sourcePage)
    await saveDocument(translatedDoc)
    printSummary(sourcePage._id, translatedDoc._id)
  } catch (err) {
    log.error(`Translation failed: ${err.message}`)
    console.error(err)
    process.exit(1)
  }
})()

// Export for use in batch translation
export {translateDocument, fetchSourcePage, saveDocument, CONFIG, translatedRefs}
