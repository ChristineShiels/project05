// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
// for this app we are only using the realtime database product
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDCdWbQwSnrHXGErjOa-rZDLGeV5oTyNFk",
    authDomain: "tasting-notes-a4d56.firebaseapp.com",
    databaseURL: "https://tasting-notes-a4d56.firebaseio.com",
    projectId: "tasting-notes-a4d56",
    storageBucket: "tasting-notes-a4d56.appspot.com",
    messagingSenderId: "332421824046",
    appId: "1:332421824046:web:62f0fbecdd4032b0dea9bf"
};

//   initiallize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;