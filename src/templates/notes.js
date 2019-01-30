export default () => {
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
  return divContainer;
}