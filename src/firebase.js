import {intializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCaXAwK3Teyb2XKqzTuOJujmAYs8ZvVw5U",
    authDomain: "little-lemon-restaurant-9b04b.firebaseapp.com",
    projectId: "little-lemon-restaurant-9b04b",
    storageBucket: "little-lemon-restaurant-9b04b.appspot.com",
    messagingSenderId: "1030237543463",
    appId: "1:1030237543463:web:0cb3f08f6574e4c1b98202",
    measurementId: "G-6CMR3HR5ZK",
    databaseURL: 'https://console.firebase.google.com/project/little-lemon-restaurant-9b04b/database/little-lemon-restaurant-9b04b-default-rtdb/data/~2F'
  };

const app = intializeApp(firebaseConfig);
const db =  getFirestore();
const auth = getAuth();

export {app, db, auth};