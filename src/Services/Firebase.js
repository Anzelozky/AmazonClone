import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBANGfLWg56QHZbgkLhkuxetwwTD5OCrWU",
    authDomain: "clone-678ce.firebaseapp.com",
    databaseURL: "https://clone-678ce.firebaseio.com",
    projectId: "clone-678ce",
    storageBucket: "clone-678ce.appspot.com",
    messagingSenderId: "491973091403",
    appId: "1:491973091403:web:f998ea34f4508a18742dce",
    measurementId: "G-B5QHXSYCXC"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};