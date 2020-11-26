import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC1hmW3VKgzIcvP0GiUpL_2ookZ49YIzBM",
  authDomain: "cumplo-technical-challenge.firebaseapp.com",
  databaseURL: "https://cumplo-technical-challenge.firebaseio.com",
  projectId: "cumplo-technical-challenge",
  storageBucket: "cumplo-technical-challenge.appspot.com",
  messagingSenderId: "384932558376",
  appId: "1:384932558376:web:4b59d1ea3f19638416a71d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }