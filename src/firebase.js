import { db } from './config.js';

export const addNote = (textNewNote) =>
  db.collection('notes').add({
    note: textNewNote,
    state: false
  })

export const deleteNote = (idNote) =>
  db.collection('notes').doc(idNote).delete()

export const updateNote = (idNote, note) =>
  db.collection('notes').doc(idNote).update(note)

export const getNotes = (callback) =>
  db.collection('notes')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
    }); 

