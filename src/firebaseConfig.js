import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCFxa7x-wJiC8kEAkcD79iZBxypH1f5ZMM",
    authDomain: "e-commerce-react-firebas-5eb5e.firebaseapp.com",
    databaseURL: "https://e-commerce-react-firebas-5eb5e.firebaseio.com",
    projectId: "e-commerce-react-firebas-5eb5e",
    storageBucket: "e-commerce-react-firebas-5eb5e.appspot.com",
    messagingSenderId: "362901841739",
    appId: "1:362901841739:web:cb4c27fcf408f84860eace"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const storage = firebase.storage();

export {db,auth,storage};