const firestore = jest.fn(() => ({
  collection: (name) => ({
    add: (objDoc) => new Promise((resolve) => {
      resolve('nota agregada')
    }),
    get: () => new Promise((resolve) => {
      resolve([{ id: 123456, data: () => ({ title: 'preparar la pildora', state: false }) }])
    })
  })
}))

const firebase = jest.genMockFromModule('../src/firebase.js');

firebase.firestore = firestore;

export default firebase;
