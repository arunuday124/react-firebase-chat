import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-bd38d.firebaseapp.com",
  projectId: "reactchat-bd38d",
  storageBucket: "reactchat-bd38d.appspot.com",
  messagingSenderId: "759164611679",
  appId: "1:759164611679:web:d43e45b95dda29339f7fea"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage ();