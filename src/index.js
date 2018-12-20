import { addNote } from "./firebase.js";

(() => {
  const input = document.getElementById('input-new-note');
  const buttonAddNote = document.getElementById('btn-add-note');
  const containerNotesList = document.getElementById('notes-list');

  buttonAddNote.addEventListener('click', event => {
    event.preventDefault();
    addNote(input.value)
      .then(() => {
        
      }).catch((err) => {
        
      });
    input.value = '';
  });
  
})();
