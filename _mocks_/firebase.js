const firestore = () => {
  return {
    collection: (name) => ({
      add: (objDoc) => new Promise((resolve) => {
        resolve('nota agregada')
      })
    })
  }
};

export default jest.fn(() => ({ firestore }))
