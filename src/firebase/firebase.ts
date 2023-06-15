import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCopir1ppSECvq1HNyoFRYC0mIs05PVIHA",
  authDomain: "myportfolio2-e7b89.firebaseapp.com",
  projectId: "myportfolio2-e7b89",
  storageBucket: "myportfolio2-e7b89.appspot.com",
  messagingSenderId: "430086791580",
  appId: "1:430086791580:web:5569de77eaec9aaeba2859",
  measurementId: "G-66LQN31TKP",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
