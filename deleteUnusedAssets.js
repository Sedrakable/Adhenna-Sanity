// This script will find and delete all assets that are not
// referenced (in use) by other documents. Sometimes refered
// to as "orphaned" assets.
//
// Place this script somewhere and run it through
// `sanity exec <script-filename.js> --with-user-token`

/* eslint-disable no-console */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({
  apiVersion: '2024-01-01',
  token:
    'skFQDRByPiQcyW7djTN58Aka8f49JtitRy3Nhq6yF1L4mMgqVOndyjlBkqcwOLCYXlhjKIDPUTAzQ7xssDUxAejV7Ofvvk8w5YkjKCVq1mWlmfLLdO2WBTkj5fEWA5E6DknMki4Rmw1bLZ45jAtMjUCht4NdUBuQ25HEO8DsQStDfoORay7B',
})

// const query = `
//   *[_type in ["sanity.imageAsset", "sanity.fileAsset"]]
//   {_id, "refs": count(*[references(^._id)])}
//   [refs == 0]
//   ._id
// `

// Define the ID of the "Work" document you want to delete
const documentId = 'dfa36b32-5fb8-4b24-8f94-c8dee04d4d15'

// Query documents referencing the specified "Work" document
const query = `*[_id == ${documentId}]`

// const query = `
//   *[_type == "work"]
//   {_id, "refs": count(*[references(^._id)])}
//   [refs == 0]
//   ._id
// `

// client
//   .fetch(query)
//   .then((ids) => {
//     if (!ids.length) {
//       console.log('No assets to delete')
//       return true
//     }

//     console.log(`Deleting ${ids.length} assets`)
//     return ids
//       .reduce((trx, id) => trx.delete(id), client.transaction())
//       .commit({visibility: 'async'})
//       .then(() => console.log('Done!'))
//   })
//   .catch((err) => {
//     if (err.message.includes('Insufficient permissions')) {
//       console.error(err.message)
//       console.error('Did you forget to pass `--with-user-token`?')
//     } else {
//       console.error(err.stack)
//     }
//   })

client
  .fetch(query)
  .then((document) => {
    if (!document) {
      console.log(`Document with ID ${documentId} not found`)
      return false
    }

    console.log(`Deleting document with ID ${documentId}`)

    // Construct a transaction to delete the document
    const transaction = client.transaction()
    transaction.delete(documentId)

    // Commit the transaction to delete the document
    return transaction.commit()
  })
  .then(() => console.log('Done!'))
  .catch((err) => console.error('Error deleting document:', err))
