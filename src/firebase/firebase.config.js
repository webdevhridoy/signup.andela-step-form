// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZEjKvr5s1irsXqXBZyqxfVaZ0Qb-568E",
    authDomain: "andela-development.firebaseapp.com",
    projectId: "andela-development",
    storageBucket: "andela-development.appspot.com",
    messagingSenderId: "176930521380",
    appId: "1:176930521380:web:d91168b4bd1eebf11a73b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;