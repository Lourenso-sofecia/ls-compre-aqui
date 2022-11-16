/*Lourenço Sofécia email: lsdevgamer@gmail.com*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBBo6GAf65mvHz5ARxe4_pd2ENAxIWLndo",
  authDomain: "lsml-compra-aqui.firebaseapp.com",
  projectId: "lsml-compra-aqui",
  storageBucket: "lsml-compra-aqui.appspot.com",
  messagingSenderId: "717037999731",
  appId: "1:717037999731:web:67f039102c009011153c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;