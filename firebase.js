// Firebase App
import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Firebase Authentication
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase Firestore
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {

    apiKey:
    "AIzaSyClKPZ0KFLurZ4U5ua7-rte-UytB4_YEdE",

    authDomain:
    "louvor-b9225.firebaseapp.com",

    projectId:
    "louvor-b9225",

    storageBucket:
    "louvor-b9225.firebasestorage.app",

    messagingSenderId:
    "806085327342",

    appId:
    "1:806085327342:web:c3eb5c6f18c7dbf6cef6ff",

    measurementId:
    "G-1GH1BSHF8W"

};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Serviços
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Exportações
export {
    auth,
    provider,
    db,

    signInWithPopup,
    signOut,

    collection,
    addDoc,
    getDocs,

    doc,
    updateDoc,
    deleteDoc
};