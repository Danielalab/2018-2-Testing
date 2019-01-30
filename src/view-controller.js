import { addNote, getNotes, deleteNote, signIn } from "./firebase.js";
import Login from './templates/login.js';
import Home from './templates/notes.js';

export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signIn(email, password)
    .then(() =>  showHome())
    .catch(() => showSignIn())
}

(() => {
  const root = document.getElementById('root');

  const addNoteOnSubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById('input-new-note');
    const snackbarContainer = document.getElementById('demo-snackbar');
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
  }

  // seleccionando los elementos del DOM
  const showHome = () => {
    root.innerHTML = '';
    root.appendChild(Home());
    const buttonAddNote = document.getElementById('btn-add-note');
    const containerNotesList = document.getElementById('notes-list');

    buttonAddNote.addEventListener('click', addNoteOnSubmit);

    const showNotes = (notes) => {
      containerNotesList.innerHTML = '';
      notes.forEach((objNote) => {
        const divElement = document.createElement('div');
        divElement.classList.add('mdl-list__item');
        divElement.innerHTML = `
          <span class="mdl-list__item-primary-content">
            <span>${objNote.title}</span>
          </span>
          <button class="mdl-list__item-secondary-action" id="btn-deleted-${objNote.id}">
            <i class="material-icons">delete</i>
          </button>
        `;
        containerNotesList.appendChild(divElement);

        // agregando evento de click al btn eliminar una nota
        document.querySelector(`#btn-deleted-${objNote.id}`)
          .addEventListener('click', () => {
            deleteNote(objNote.id);
          });
      });
    }

    getNotes(showNotes);
  }

  const showSignIn = () => {
    root.innerHTML = '';
    const login = Login();
    root.appendChild(login);
  }

  showSignIn();
})();
