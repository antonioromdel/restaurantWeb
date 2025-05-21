import { initializeApp, type FirebaseApp } from "firebase/app";
import { Firestore, getFirestore,  } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const meta = import.meta.env

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: meta.VITE_FIREBASE_KEY,
  authDomain: meta.VITE_AUTHDOMAIN,
  projectId: meta.VITE_PROYECT_ID,
  storageBucket: meta.VITE_STORAGE_BUCKET,
  messagingSenderId: meta.VITE_MESSAGING_SENDER_ID,
  appId: meta.VITE_APP_ID,
  measurementId: meta.VITE_MEASUREMENT_ID
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