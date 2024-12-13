const {v4: uuidv4} = require('uuid')
const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: 'm478gwus',
  dataset: 'production', // Usually 'production'
  useCdn: true, // Set to true for production
  token:
    'skN7zivjWPHyBJpchoLwfTVIVW9ZHmnoTAIpfopf4PsYvKoX6ovDKWXHedYxH6RHdLIbUnWlRBd61Gn6TWb2rVLK0B8evbHMREEajipcLj2t7J9h9nfWazJwZzgDHReHBXgBSiJ27vOgybBObPzqPFSaCy34YuRWn86EL8eVDlQeXe2CMCYw',
  apiVersion: '2024-10-23',
})

// Query all articlePage documents with desc defined
const query = `*[_type == "articlePage" && defined(desc)]`

async function migrate() {
  const docs = await client.fetch(query)

  if (!docs || docs.length === 0) {
    console.log('No articlePage documents found with desc defined.')
    return
  }

  console.log(`Found ${docs.length} documents to update.`)

  let transaction = client.transaction()
  let updatedCount = 0

  docs.forEach((doc) => {
    const desc = doc.desc

    // Check if desc is already blocks array
    const isAlreadyBlockArray = Array.isArray(desc) && desc[0]?._type === 'block'

    if (typeof desc === 'string' && !isAlreadyBlockArray) {
      // Convert the old text string into a block array
      const block = {
        _type: 'block',
        _key: uuidv4(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: uuidv4(),
            text: desc,
            marks: [],
          },
        ],
      }

      transaction = transaction.patch(doc._id, {
        set: {desc: [block]},
      })
      updatedCount++
    }
  })

  if (updatedCount === 0) {
    console.log('No changes needed. All desc fields are already in block format.')
    return
  }

  console.log(`Updating ${updatedCount} documents...`)
  await transaction.commit()
  console.log('Migration complete!')
}

migrate().catch((err) => {
  console.error('Error migrating data:', err)
})
