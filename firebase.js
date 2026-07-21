// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Autenticação
import {
    getAuth,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firestore
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyClKPZ0KFLurZ4U5ua7-rte-UytB4_YEdE",
    authDomain: "louvor-b9225.firebaseapp.com",
    projectId: "louvor-b9225",
    storageBucket: "louvor-b9225.firebasestorage.app",
    messagingSenderId: "806085327342",
    appId: "1:806085327342:web:c3eb5c6f18c7dbf6cef6ff",
    measurementId: "G-1GH1BSHF8W"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa autenticação
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Inicializa o Firestore
export const db = getFirestore(app);

// Exporta funções que serão usadas no projeto
export {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc
};