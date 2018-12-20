import { addNote, getNotes } from "./firebase.js";

(() => {
  // seleccionando los elementos del DOM
  const input = document.getElementById('input-new-note');
  const buttonAddNote = document.getElementById('btn-add-note');
  const containerNotesList = document.getElementById('notes-list');
  const snackbarContainer = document.getElementById('demo-snackbar');

  buttonAddNote.addEventListener('click', event => {
    event.preventDefault();
    // data que muestra el snackbar
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

  const showNotes = (notes) => {
    let templateList = '';
    notes.forEach((objNote) => {
      templateList +=
        `
        <li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            ${objNote.note}
          </span>
          <span class="mdl-list__item-secondary-action">
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-${objNote.id}">
              <input type="checkbox" id="list-checkbox-${objNote.id}" class="mdl-checkbox__input"/>
            </label>
          </span>
        </li>
        `;
    });
    containerNotesList.innerHTML = templateList;
  }

  getNotes(showNotes)

})();
