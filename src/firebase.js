import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD1lUQbfUUt6HQuEPHMv4wQAb6tUMvSbDc",
  authDomain: "granchio-91d1b.firebaseapp.com",
  projectId: "granchio-91d1b",
  storageBucket: "granchio-91d1b.appspot.com",
  messagingSenderId: "1077661896282",
  appId: "1:1077661896282:web:4fb328cdc5880311041263",
//   measurementId: "G-YGMJ1LGV1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

