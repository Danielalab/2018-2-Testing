import { db } from "./config.js";

export const addNote = (textNewNote) =>
  db.collection("notes").add({
    note: textNewNote,
    state: false
  })

export const deleteNote = (idNote) =>
  db.collection("notes").doc(idNote).delete()

export const updateNote = (idNote, note) =>
  db.collection("notes").doc(idNote).update(note)