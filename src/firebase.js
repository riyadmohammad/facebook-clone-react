import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDwWP6woLFgKAIFYwfom-v0BB62BzpFiGI",
    authDomain: "fb-clone-713c5.firebaseapp.com",
    databaseURL: "https://fb-clone-713c5.firebaseio.com",
    projectId: "fb-clone-713c5",
    storageBucket: "fb-clone-713c5.appspot.com",
    messagingSenderId: "466075108926",
    appId: "1:466075108926:web:cc730e7b6d64bfa2c1b36f",
    measurementId: "G-R03Q3N0NQL"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;