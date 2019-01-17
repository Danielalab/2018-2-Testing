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

import { addNote, getNotes, deleteNote } from "../src/firebase.js";

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

// configurando firebase mock
// const firebasemock = require('firebase-mock');
// const mockauth = new firebasemock.MockFirebase();
// const mockfirestore = new firebasemock.MockFirestore();
// mockfirestore.autoFlush();
// mockauth.autoFlush();

// global.firebase = firebasemock.MockFirebaseSdk(
//   // use null if your code does not use RTDB
//   path => (path ? mockdatabase.child(path) : null),
//   () => mockauth,
//   () => {
//     return mockfirestore;
//   }
// );

// // iniciando tests

// import { addNote, getNotes } from "../src/firebase.js";

// describe('lista de notas', () => {
//   it('Debería porder agregar una nota', () => {
//     return addNote('preparar la pildora')
//       .then(() => getNotes(
//         (data) => {
//           const result = data.find((note) => note.title === 'preparar la pildora');
//           expect(result.title).toBe('preparar la pildora');
//         }
//       ))
//   });
// })

