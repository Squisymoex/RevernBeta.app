import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUNCH_OF_FAKE_KEYS",
  authDomain: "revern-app.firebaseapp.com",
  projectId: "revern-app",
  storageBucket: "revern-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:9876543210abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
