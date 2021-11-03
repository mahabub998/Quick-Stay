import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBw01YYorI6TvnrWUBnS4NnQdLwSITcXIk",
    authDomain: "quick-stay-7c70d.firebaseapp.com",
    projectId: "quick-stay-7c70d",
    storageBucket: "quick-stay-7c70d.appspot.com",
    messagingSenderId: "651657106707",
    appId: "1:651657106707:web:bdf9c46bbd6627a8cdb6e6"
}
firebase.initializeApp(config);

export default firebase;