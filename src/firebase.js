import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCz9RGjG_IqSv5h3rQ6S0O6DBK8Rx9iCcs",
    authDomain: "linkedin-clone-fan.firebaseapp.com",
    projectId: "linkedin-clone-fan",
    storageBucket: "linkedin-clone-fan.appspot.com",
    messagingSenderId: "573095092878",
    appId: "1:573095092878:web:6c6ed5b112af84deb49fdf",
    measurementId: "G-X1KQZGE76D"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;