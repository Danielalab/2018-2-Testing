import { addNote } from "./firebase.js";

(() => {
  // seleccionando los elementos del DOM
  const input = document.getElementById('input-new-note');
  const buttonAddNote = document.getElementById('btn-add-note');
  const containerNotesList = document.getElementById('notes-list');
  const snackbarContainer = document.getElementById('demo-snackbar');

  buttonAddNote.addEventListener('click', event => {
    event.preventDefault();
    const data = {
      message: '',
      timeout: 2000,
      actionText: 'Undo'
    };
    addNote(input.value)
      .then(() => {
        input.value = '';
        data.message = 'Nota agregada'
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
      }).catch(() => {
        input.value = '';
        data.message = 'Lo sentimos, no se pudo agregar la nota';
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
      });
  });

})();
