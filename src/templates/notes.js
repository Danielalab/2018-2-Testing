import { addNoteOnSubmit, deleteNoteOnClick } from "../view-controller.js";

const itemNote = (objNote) => {
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
  // agregando evento de click al btn eliminar una nota
  divElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
  return divElement;
}

export default (notes) => {
  const divContainer = document.createElement('div');
  const homeContent = `
    <!-- form add note -->
    <form class="d-flex justify-content-center">
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="input-new-note">
        <label class="mdl-textfield__label" for="input-new-note">Agrega una nota...</label>
      </div>
      <button class="mx-1 mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="btn-add-note">
        <i class="material-icons">add</i>
      </button>
      <div id="demo-snackbar-example" class="mdl-js-snackbar mdl-snackbar">
        <div class="mdl-snackbar__text"></div>
        <button class="mdl-snackbar__action" type="button"></button>
      </div>
    </form>
    <!-- notes -->
    <section class="w-60 d-flex justify-content-center m-auto">
      <ul class="w-100 demo-list-control mdl-list" id="notes-list">
      </ul>
    </section>

    <!-- snackbar -->
    <div id="demo-snackbar" class="mdl-js-snackbar mdl-snackbar">
      <div class="mdl-snackbar__text"></div>
      <button class="mdl-snackbar__action" type="button"></button>
    </div>
  `;
  divContainer.innerHTML = homeContent;
  const buttonAddNote = divContainer.querySelector('#btn-add-note');
  const ul = divContainer.querySelector('#notes-list');
  notes.forEach(note => {
    ul.appendChild(itemNote(note));
  });
  buttonAddNote.addEventListener('click', addNoteOnSubmit);
  return divContainer;
}