import { addNote, getNotes, deleteNote } from "./firebase.js";

(() => {
  // seleccionando los elementos del DOM
  const input = document.getElementById('input-new-note');
  const buttonAddNote = document.getElementById('btn-add-note');
  const containerNotesList = document.getElementById('notes-list');
  const snackbarContainer = document.getElementById('demo-snackbar');

  buttonAddNote.addEventListener('click', (event) => {
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

  const addEventsToDeleteButtons = () => {
    const btnsDelete = document.querySelectorAll('.btn-delete');
    [...btnsDelete].forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        deleteNote(id);
      })
    })
  }

  const showNotes = (notes) => {
    let templateList = '';
    notes.forEach((objNote) => {
      templateList +=
        `
        <li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            ${objNote.title}
          </span>
          <span class="mdl-list__item-secondary-action">
            <button class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored btn-delete" data-id="${objNote.id}">
              <i class="material-icons">delete_outline</i>
            </button>
          </span>
        </li>
        `;
    });
    containerNotesList.innerHTML = templateList;
    addEventsToDeleteButtons();
  }

  getNotes(showNotes);

})();
