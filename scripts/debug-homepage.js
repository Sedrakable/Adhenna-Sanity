import 'dotenv/config'
import {client} from './client.js'
;(async () => {
  console.log('🔍 Debugging homepage documents...\n')

  // Check all homePage documents
  console.log('1. All homePage documents:')
  const allHomePages = await client.fetch(`*[_type=="homePage"]{_id, hiddenTitle, lang}`)
  console.log(`   Found ${allHomePages.length} homePage documents:`)
  allHomePages.forEach((page) => {
    console.log(`   - ${page._id}: "${page.hiddenTitle}" (lang: ${page.lang})`)
  })
  console.log()

  // Check French homepage specifically
  console.log('2. French homePage:')
  const frHome = await client.fetch(`*[_type=="homePage" && lang=="fr"][0]`)
  if (frHome) {
    console.log(`   ✓ Found: ${frHome._id} - "${frHome.hiddenTitle}"`)
  } else {
    console.log(`   ✗ No French homepage found`)
  }
  console.log()

  // Check what the lang field actually contains
  console.log('3. Checking lang field values:')
  const pagesWithLang = await client.fetch(
    `*[_type=="homePage" && defined(lang)]{_id, hiddenTitle, lang}`,
  )
  pagesWithLang.forEach((page) => {
    console.log(`   - ${page._id}: lang = "${page.lang}" (type: ${typeof page.lang})`)
  })
  console.log()

  console.log('✅ Debug complete')
})().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
