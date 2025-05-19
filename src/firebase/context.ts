
import { createContext } from "react";
import type { Firebase } from "./config";

interface FirebaseContextType{
    firebase: Firebase
}

const FirebaseContext = createContext<FirebaseContextType | null>(null)

export default FirebaseContext;