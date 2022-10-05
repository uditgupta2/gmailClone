import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcCkTWosAjpP4TMP2-xh_vpbttAEDwJBw",
  authDomain: "clone-yt-cb443.firebaseapp.com",
  projectId: "clone-yt-cb443",
  storageBucket: "clone-yt-cb443.appspot.com",
  messagingSenderId: "306931048462",
  appId: "1:306931048462:web:ae39eb2f10bdb9d403dc5f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
// ye comment
