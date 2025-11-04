import {getCliClient} from 'sanity/cli'

const client = getCliClient({
  apiVersion: '2024-01-31',
  token:
    'skFQDRByPiQcyW7djTN58Aka8f49JtitRy3Nhq6yF1L4mMgqVOndyjlBkqcwOLCYXlhjKIDPUTAzQ7xssDUxAejV7Ofvvk8w5YkjKCVq1mWlmfLLdO2WBTkj5fEWA5E6DknMki4Rmw1bLZ45jAtMjUCht4NdUBuQ25HEO8DsQStDfoORay7B',
})

const oldType = 'article'
const newType = 'articlePage'
// Query documents referencing the specified "Work" document
const query = `*[_type == "${oldType}"]`

client
  .fetch(query)
  .then((documents) => {
    if (!documents || documents.length == 0) {
      console.log(`Document with TYPE ${oldType} not found`)
      return false
    }

    console.log(`changing document with ID ${oldType} type`)

    // Construct a transaction to clone and update each document
    const transaction = client.transaction()
    documents.forEach((document) => {
      // Create a new document with the updated type and other fields preserved
      const updatedDocument = {
        ...document,
        _id: `${newType}-${document._id}`,
        _type: newType,
      }
      console.log(updatedDocument)
      // Create the new document
      transaction.createIfNotExists(updatedDocument)
    })

    // Commit the transaction to delete the document
    return transaction.commit()
  })
  .then(() => console.log('Done!'))
  .catch((err) => console.error('Error cloning document:', err))
