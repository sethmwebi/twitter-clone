// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzIYnxj9ok2H2NiH0vGjNr25ZoNAm9hmE",
  authDomain: "twitter-clone-c68fc.firebaseapp.com",
  projectId: "twitter-clone-c68fc",
  storageBucket: "twitter-clone-c68fc.appspot.com",
  messagingSenderId: "733837549788",
  appId: "1:733837549788:web:04f97e5ef69a62094d1419"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
