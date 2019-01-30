import { addNote, getNotes, deleteNote, signIn } from "./firebase.js";
import Login from './templates/login.js';
import Home from './templates/notes.js';

(() => {
  const root = document.getElementById('root');

  // seleccionando los elementos del DOM
  const showHome = () => {
    root.innerHTML = '';
    root.appendChild(Home());
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

    // selecccionando elementos del DOM
    const btnSignIn = document.querySelector('#btn-sign-in');

    btnSignIn.addEventListener('click', () => {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      signIn(email, password)
        .then(() =>  showHome())
        .catch(() => showSignIn())
    })
  }

  showSignIn();
})();
