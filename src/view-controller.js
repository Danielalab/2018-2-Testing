import { addNote, deleteNote, signIn } from "./controller/controller-firebase.js";

export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signIn(email, password)
    .then(() =>  {
      location.hash = '/home';
    })
    .catch(() => {})
}

export const addNoteOnSubmit = (event) => {
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

export const deleteNoteOnClick = (objNote) =>
  deleteNote(objNote.id)

