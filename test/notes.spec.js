// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => {
    return mockfirestore;
  }
);

// iniciando tests

import { addNote, getCollectionNotes } from "../src/firebase.js";

describe('lista de notas', () => {
  it('Debería porder agregar una nota', () => {
    return addNote('preparar la pildora')
      .then(() => getCollectionNotes())
      .then((data) => {
        const result = data.find((note) => note.title === 'preparar la pildora');
        expect(result.title).toBe('preparar la pildora');
      })
  });
})

