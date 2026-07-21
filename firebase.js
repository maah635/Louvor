import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyClKPZ0KFLurZ4U5ua7-rte-UytB4_YEdE",

  authDomain: "louvor-b9225.firebaseapp.com",

  projectId: "louvor-b9225",

  storageBucket: "louvor-b9225.firebasestorage.app",

  messagingSenderId: "806085327342",

  appId: "1:806085327342:web:4e774dec8f25d7a7cef6ff",

  measurementId: "G-B8RLLBZCWN"

};

const app =
initializeApp(
    firebaseConfig
);

const auth =
getAuth(app);

const provider =
new GoogleAuthProvider();

const db =
getFirestore(app);

export {
    auth,
    provider,
    signInWithPopup,
    db,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
};