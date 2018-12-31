import { addNote, getCollectionNotes } from "../src/firebase";

// jest.mock('../src/_mocks_/firebase.js');

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

// https://github.com/facebook/jest/issues/6913
