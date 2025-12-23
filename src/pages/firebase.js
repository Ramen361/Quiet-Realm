import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbGzSTj5mUzCSBuzFg_XQNgwSnIApKAoo",
  authDomain: "quiet-realm-forum.firebaseapp.com",
  projectId: "quiet-realm-forum",
  storageBucket: "quiet-realm-forum.firebasestorage.app",
  messagingSenderId: "266769229022",
  appId: "1:266769229022:web:51402b185b16901a37ce4f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
