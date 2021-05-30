import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAOHHbTd0EaN7hMwVXKFfitbmu6hSR_Q4c",
  authDomain: "todo-app-b5d7f.firebaseapp.com",
  projectId: "todo-app-b5d7f",
  storageBucket: "todo-app-b5d7f.appspot.com",
  messagingSenderId: "488231829625",
  appId: "1:488231829625:web:7ff31a6118da877051d4a8"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export {db}