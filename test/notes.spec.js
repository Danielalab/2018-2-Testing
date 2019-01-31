import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc1d: {
          title: 'terminar la pildora',
          complete: false
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addNote, getNotes, deleteNote } from "../src/controller/controller-firebase.js";

describe('lista de notas', () => {
  it('Debería porder agregar una nota', (done) => {
    return addNote('preparar la pildora')
      .then(() => getNotes(
        (data) => {
          const result = data.find((note) => note.title === 'preparar la pildora');
          expect(result.title).toBe('preparar la pildora');
          done()
        }
      ))
  });
  it('Debería poder eliminar una nota', (done) => {
    return deleteNote('abc1d')
      .then(() => getNotes(
        (data) => {
          const result = data.find((note) => note.id === 'abc1d');
          expect(result).toBe(undefined);
          done()
        }
      ))
  })
})
