import { initializeApp, type FirebaseApp } from "firebase/app";
import { Firestore, getFirestore,  } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_sbW07qolu-3qicmCsS6tHxFVlBKV4aU",
  authDomain: "restaurant-1acbc.firebaseapp.com",
  projectId: "restaurant-1acbc",
  storageBucket: "restaurant-1acbc.firebasestorage.app",
  messagingSenderId: "122019780071",
  appId: "1:122019780071:web:4556ac69a024dfaef95942",
  measurementId: "G-FK0Y94N9X1"
};

export class Firebase {
    public app: FirebaseApp
    public db: Firestore
    public storage: FirebaseStorage

    constructor(){
        this.app = initializeApp(firebaseConfig)
        this.db = getFirestore(this.app)
        this.storage = getStorage(this.app)
    }
}

const firebase = new Firebase();


export default firebase;