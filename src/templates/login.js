export default () => `
  <!-- Textfield with Floating Label -->
  <form class="d-flex justify-content-center align-items-center flex-direction-column vh-100">
    <h2>Sign In</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="email" id="email">
      <label class="mdl-textfield__label" for="email">Email</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="password" id="password">
      <label class="mdl-textfield__label" for="password">Password</label>
    </div>
    <!-- Accent-colored raised button with ripple -->
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      id="btn-sign-in" type="button">
      Sign In
    </button>
  </form>
`