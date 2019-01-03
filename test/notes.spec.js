import firebase from "../_mocks_/firebase.js";
global.firebase = firebase;

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

