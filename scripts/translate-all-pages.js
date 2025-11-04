// translate-all-pages.js
import 'dotenv/config'
import {
  translateDocument,
  fetchSourcePage,
  saveDocument,
  CONFIG,
  translatedRefs,
} from './translate-page.js'

// ============================================
// CONFIGURATION
// ============================================

// List of all page types to translate
const PAGE_TYPES = [
  'homePage',
  'tattooServicePage',
  'testTattooServicePage',
  'hennaServicePage',
  'onlineCoursePage',
  'inPersonCoursePage',
  'portfolioPage',
  'boutiquePage',
  'contactPage',
  'blogPage',
  'cartPage',
  'legalPage',
  'notFoundPage',
  'policiesPage',
  'cartForm',
  'flashForm',
  'contactForm',
  'approxForm',
  // Add more page types as needed
]

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
  section: (message) => console.log(`\n${'─'.repeat(50)}\n${message}\n${'─'.repeat(50)}`),
  complete: () => console.log('\n✅ All translations complete!\n'),
}

// ============================================
// BATCH TRANSLATION
// ============================================

async function translateAllPages() {
  const results = {
    successful: [],
    failed: [],
    skipped: [],
  }

  log.title(
    `🚀 Batch Translation: ${PAGE_TYPES.length} page types from ${CONFIG.sourceLang} to ${CONFIG.targetLang}`,
  )
  log.info(`Using DeepL for translation`)
  log.info(`Source language: ${CONFIG.sourceLang}`)
  log.info(`Target language: ${CONFIG.targetLang}`)

  for (let i = 0; i < PAGE_TYPES.length; i++) {
    const pageType = PAGE_TYPES[i]

    log.section(`[${i + 1}/${PAGE_TYPES.length}] Processing: ${pageType}`)

    try {
      // Fetch the source page
      const sourcePage = await fetchSourcePage(pageType, CONFIG.sourceLang)

      if (!sourcePage) {
        log.warning(`No ${CONFIG.sourceLang} ${pageType} found, skipping...`)
        results.skipped.push({
          pageType,
          reason: 'Page not found',
        })
        continue
      }

      log.success(
        `Found: ${sourcePage.hiddenTitle || sourcePage.title || sourcePage.name || sourcePage._id}`,
      )

      // Translate the document
      const translatedDoc = await translateDocument(sourcePage)

      // Save the translated document
      await saveDocument(translatedDoc)

      log.success(`✓ Successfully translated ${pageType}`)
      results.successful.push({
        pageType,
        originalId: sourcePage._id,
        translatedId: translatedDoc._id,
      })
    } catch (error) {
      log.error(`Failed to translate ${pageType}: ${error.message}`)
      results.failed.push({
        pageType,
        error: error.message,
      })
      // Continue with next page instead of stopping
    }
  }

  return results
}

function printFinalSummary(results) {
  log.complete()

  console.log('📊 Final Summary:')
  console.log('═'.repeat(50))

  console.log(`\n✅ Successful: ${results.successful.length}`)
  results.successful.forEach(({pageType, originalId, translatedId}) => {
    log.info(`${pageType}`)
    console.log(`    ${originalId} → ${translatedId}`)
  })

  if (results.skipped.length > 0) {
    console.log(`\n⚠️  Skipped: ${results.skipped.length}`)
    results.skipped.forEach(({pageType, reason}) => {
      log.warning(`${pageType}: ${reason}`)
    })
  }

  if (results.failed.length > 0) {
    console.log(`\n❌ Failed: ${results.failed.length}`)
    results.failed.forEach(({pageType, error}) => {
      log.error(`${pageType}: ${error}`)
    })
  }

  console.log(`\n📈 Total References Translated: ${translatedRefs.size}`)
  console.log('═'.repeat(50))
}

// ============================================
// MAIN EXECUTION
// ============================================
;(async () => {
  try {
    const startTime = Date.now()

    const results = await translateAllPages()

    const endTime = Date.now()
    const duration = ((endTime - startTime) / 1000 / 60).toFixed(2)

    printFinalSummary(results)

    console.log(`\n⏱️  Total time: ${duration} minutes`)

    // Exit with error code if any translations failed
    if (results.failed.length > 0) {
      process.exit(1)
    }
  } catch (err) {
    log.error(`Batch translation failed: ${err.message}`)
    console.error(err)
    process.exit(1)
  }
})()
