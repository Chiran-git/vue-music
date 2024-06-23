import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCrEHfmsjuruTMKyVWM2X5YMzUR21zDz-o",
    authDomain: "music-c6e13.firebaseapp.com",
    projectId: "music-c6e13",
    storageBucket: "music-c6e13.appspot.com",
    messagingSenderId: "516836587877",
    appId: "1:516836587877:web:42d9325aed918f98e1098c"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  storage
}