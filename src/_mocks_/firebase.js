const firebase = {
  firestore: () => ({
    collection: (name) => ({
      add: (objDoc) => new Promise((resolve, reject) => {
        resolve('nota agregada')
      })
    })
  })
}

export default firebase;