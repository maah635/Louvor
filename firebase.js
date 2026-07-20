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
    
    apiKey: "AIzaSyClKPZ0KFLurZ4U5ua7-rte-UytB4_YEdE",
    authDomain: "louvor-b9225.firebaseapp.com",
    projectId: "louvor-b9225",
    storageBucket: "louvor-b9225.firebasestorage.app",
    messagingSenderId: "806085327342",
    appId: "1:806085327342:web:4e774dec8f25d7a7cef6ff",
    measurementId: "G-B8RLLBZCWN"
    
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