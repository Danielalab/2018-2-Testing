/* eslint-disable linebreak-style */
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

// jest.mock('../src/config.js', () => {
//   return mocksdk;
// });

// mocksdk.firestore().flush();

const notesTest = require('./notes.spec');

describe('lista de notas', notesTest);