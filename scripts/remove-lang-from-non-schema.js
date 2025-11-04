import 'dotenv/config'
import {client} from './client.js'

// List document types that SHOULD NOT have lang field
// Add/remove types based on which schemas you added lang field to
const TYPES_WITHOUT_LANG = [
  'hennaProject',
  'tattooProject',
  'flashProject',
  'toilesProject',
  'canvasProject',
  // Add any other types that shouldn't have lang
]

;(async () => {
  console.log('Finding documents with lang data but no lang field in schema...')

  // Fetch documents of these types that have lang set
  const docs = await client.fetch(
    `*[
    _type in $types 
    && defined(lang)
    && !(_id match "_.*")
  ]`,
    {types: TYPES_WITHOUT_LANG},
  )

  console.log(`Found ${docs.length} documents with orphaned lang field`)

  if (docs.length === 0) {
    console.log('No documents to clean up!')
    return
  }

  // Show which documents will be cleaned
  console.log('\nDocuments to clean:')
  docs.forEach((doc) => {
    console.log(`- ${doc._type}: ${doc._id} (lang: ${doc.lang})`)
  })

  // Create patch mutations to unset the lang field
  const mutations = docs.map((doc) => ({
    patch: {
      id: doc._id,
      unset: ['lang'],
    },
  }))

  console.log(`\nRemoving lang field from ${mutations.length} documents...`)

  // Execute in batches
  const batchSize = 100
  for (let i = 0; i < mutations.length; i += batchSize) {
    const batch = mutations.slice(i, i + batchSize)
    await client.transaction(batch).commit()
    console.log(
      `Cleaned batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(mutations.length / batchSize)}`,
    )
  }

  console.log('\n✅ Orphaned lang fields removed')
})().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
