// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmswl1IVj_jJeB5FPIclReyqUcxGYtbo8",
  authDomain: "gymhero-14395.firebaseapp.com",
  projectId: "gymhero-14395",
  storageBucket: "gymhero-14395.appspot.com",
  messagingSenderId: "656568497244",
  appId: "1:656568497244:web:f690dbe16adb1e34b8e299",
  measurementId: "G-0G231K2N7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

async function login() {
  await signInWithRedirect(auth, GoogleProvider);
}

async function logout() {
  await signOut(auth);
}

const gBtn = document.querySelector(".gbtn");

gBtn?.addEventListener("click", () => login());

onAuthStateChanged(auth, () => {
  window.history.href = "../gyms.html";
});
