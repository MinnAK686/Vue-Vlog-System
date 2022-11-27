import { initializeApp } from "firebase/app"
import { 
  getFirestore,collection,getDocs,onSnapshot
} from "firebase/firestore"

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKXa-dsw4hSxjxbJbAmIRyXyvnaGY8LNM",
    authDomain: "fir-9-tuto-c22b6.firebaseapp.com",
    projectId: "fir-9-tuto-c22b6",
    storageBucket: "fir-9-tuto-c22b6.appspot.com",
    messagingSenderId: "232492649667",
    appId: "1:232492649667:web:2157b1658b4820be9ea676"
  };
  
// Init App
initializeApp(firebaseConfig);

// Init Service
const db = getFirestore();
const collectionRef = collection(db, "posts")


export {db,collectionRef}