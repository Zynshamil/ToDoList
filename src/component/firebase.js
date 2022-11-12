import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCaB8m1uZ_WFTpLAnxuVmwxIbUUCTu3nRk",
    authDomain: "todolist-bedaf.firebaseapp.com",
    projectId: "todolist-bedaf",
    storageBucket: "todolist-bedaf.appspot.com",
    messagingSenderId: "1037348290465",
    appId: "1:1037348290465:web:61a0dcdc4d87a1d5f795e0",
    measurementId: "G-7HHL8S47BY"
  };


 const app = initializeApp(firebaseConfig)
 export const auth = getAuth(app);