import { useContext, type ChangeEvent, type FocusEvent } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import FirebaseContext from "../../../firebase/context";

interface InputProps{
    label: string,
    name: string
    valueForm: string
    textArea?: boolean
    changeValue: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handBlur: (e: FocusEvent<unknown, Element>) => void
}

export default function Input_upload({label, name, valueForm, changeValue, handBlur}: InputProps) {

  const firebase = useContext(FirebaseContext)
  const storage = firebase?.firebase.storage;

  const metadata = {
    contentType: 'image/jpeg'
  }

  

  return (
    <div className="mb-4">
              <label 
                  htmlFor={name}
                  className="block text-gray-700 text-sm font-bold mb-2"
              >{label}</label>
                <input
                  id={name}
                  className="shadow-2xl appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  type="file"
                  accept="image/jpeg, image/png"
                  value={valueForm}
                  required
                  onBlur={handBlur}
                  onChange={changeValue}/>
            </div>
  )
}

