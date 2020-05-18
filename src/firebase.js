import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAngmuR5d7s2AwcD9fql84V6L44Uwe3-Sw",
    authDomain: "scl012-tenpo-hackaton.firebaseapp.com",
    databaseURL: "https://scl012-tenpo-hackaton.firebaseio.com",
    projectId: "scl012-tenpo-hackaton",
    storageBucket: "scl012-tenpo-hackaton.appspot.com",
    messagingSenderId: "670669561532",
    appId: "1:670669561532:web:54eaf4591619e5da90fab9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}