import { addNote, getNotes } from "../src/firebase";

jest.mock('../src/_mocks_/firebase.js');

describe('lista de notas', () => {
  it('Debería porder agregar una nota', () => {
    addNote('preparar la pildora')
      .then(() => getCollectionNotes())
      .then((data) => {
        const result = data.find((note) => note.title === 'preparar la pildora');
        expect(result).toBe('preparar la pildora');
      })
  });
})

// https://github.com/facebook/jest/issues/6913
