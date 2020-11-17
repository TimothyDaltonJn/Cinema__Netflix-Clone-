import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAwXjxL-0WTl6R0jI2rXNJlpGtJfctB7QQ',
  authDomain: 'netflix-clone-7bd07.firebaseapp.com',
  databaseURL: 'https://netflix-clone-7bd07.firebaseio.com',
  projectId: 'netflix-clone-7bd07',
  storageBucket: 'netflix-clone-7bd07.appspot.com',
  messagingSenderId: '9729715900',
  appId: '1:9729715900:web:eb5acd4880b6eb22f76ab9',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
