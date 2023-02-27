// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app")
const { getFirestore, collection, addDoc, getDocs,doc, getDoc, query, where } = require("firebase/firestore")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA83lr4jip-F-HJbL50plThGpHgsrr1-uo",
  authDomain: "gimnasio-vue.firebaseapp.com",
  projectId: "gimnasio-vue",
  storageBucket: "gimnasio-vue.appspot.com",
  messagingSenderId: "548407316420",
  appId: "1:548407316420:web:435b427ab40b82c8305e91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireStore = getFirestore(app);

module.exports = { fireStore, collection, getDocs, addDoc, getDoc,doc, query, where }