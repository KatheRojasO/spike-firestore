import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCwAaM6QqKV1RKKDugqjjoDsoLpfXsfupc",
  authDomain: "spike-firestore-276f6.firebaseapp.com",
  projectId: "spike-firestore-276f6",
  storageBucket: "spike-firestore-276f6.appspot.com",
  messagingSenderId: "485819900859",
  appId: "1:485819900859:web:82302766a584dd2f35da9e",
};

const firebase = initializeApp(firebaseConfig);
export const database = getFirestore(firebase);


