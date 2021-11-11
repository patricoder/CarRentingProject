import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBg1o0pYWUWQK7H2N83SVy5CTiwzTZpm3U",
    authDomain: "rentanddrive-968de.firebaseapp.com",
    projectId: "rentanddrive-968de",
    storageBucket: "rentanddrive-968de.appspot.com",
    messagingSenderId: "14524385728",
    appId: "1:14524385728:web:c69102f4dafb9650762025"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {app, db}

