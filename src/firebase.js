import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCaXAwK3Teyb2XKqzTuOJujmAYs8ZvVw5U",
    authDomain: "little-lemon-restaurant-9b04b.firebaseapp.com",
    projectId: "little-lemon-restaurant-9b04b",
    storageBucket: "little-lemon-restaurant-9b04b.appspot.com",
    messagingSenderId: "1030237543463",
    appId: "1:1030237543463:web:0cb3f08f6574e4c1b98202",
    measurementId: "G-6CMR3HR5ZK",
    databaseURL: 'https://little-lemon-restaurant-9b04b-default-rtdb.firebaseio.com/'
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider}