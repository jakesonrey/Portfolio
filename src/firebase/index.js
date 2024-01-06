
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvVZiuu7q70Iycrna-Hw9fyFS36mZdXtg",
  authDomain: "taskfolioapp.firebaseapp.com",
  projectId: "taskfolioapp",
  storageBucket: "taskfolioapp.appspot.com",
  messagingSenderId: "586478909467",
  appId: "1:586478909467:web:52cbbbe7604af0311a20be",
  measurementId: "G-52422CKWDG"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;