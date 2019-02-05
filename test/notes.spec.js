import myMockFirebase from "../_mocks_/firebase.js";

global.firebase = myMockFirebase();
console.log(firebase);


// jest.mock('../_mocks_/firebase.js');

import { addNote } from "../src/controller-firebase.js";

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

