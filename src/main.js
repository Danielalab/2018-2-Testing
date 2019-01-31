import { initRouter } from "./router.js";

const init = () => {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBeFAgWAS8s7lD2mxSqMeKZXQJYurraKR8",
    authDomain: "notas-aa353.firebaseapp.com",
    databaseURL: "https://notas-aa353.firebaseio.com",
    projectId: "notas-aa353",
    storageBucket: "notas-aa353.appspot.com",
    messagingSenderId: "635598363639"
  };

  firebase.initializeApp(config);

  initRouter();
}

window.onload = init();