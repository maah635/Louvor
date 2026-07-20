// Importações do Firebase
import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "SUA_API_KEY",

    authDomain:
    "SEU_PROJETO.firebaseapp.com",

    projectId:
    "SEU_PROJETO",

    storageBucket:
    "SEU_PROJETO.appspot.com",

    messagingSenderId:
    "000000000",

    appId:
    "SEU_APP_ID"

};

// Inicializa
const app =
initializeApp(firebaseConfig);

export const auth =
getAuth(app);

export const db =
getFirestore(app);

export const provider =
new GoogleAuthProvider();

export {
    signInWithPopup,
    signOut
};

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

export {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc
};