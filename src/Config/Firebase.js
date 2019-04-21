import * as firebase from "firebase";

const Firebase = firebase.initializeApp({
  apiKey: "AIzaSyB2vLLs3y3xdV0r1Eujot_maz22bdnY64c",
  authDomain: "unawallet.firebaseapp.com",
  databaseURL: "https://unawallet.firebaseio.com",
  projectId: "unawallet",
  storageBucket: "unawallet.appspot.com",
  messagingSenderId: "973652391872"
});

export default Firebase;
