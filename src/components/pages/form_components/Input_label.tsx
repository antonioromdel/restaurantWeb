import type { ChangeEvent, FocusEvent } from "react";

interface InputProps{
    label: string,
    name: string
    typeInput: string,
    placeHolder?: string,
    valueForm: string
    textArea?: boolean
    changeValue: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handBlur: (e: FocusEvent<unknown, Element>) => void
}

export default function Input_label({label, name, typeInput, placeHolder, textArea, valueForm, changeValue, handBlur}: InputProps) {
  return (
    <div className="mb-4">
              <label 
                htmlFor={name}
                className="block text-gray-700 text-sm font-bold mb-2"
              >{label}</label>
              {textArea ? (
                <textarea 
                className="shadow-2xl h-40 appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                name={name}
                id={name}
                value={valueForm}
                onChange={changeValue}
                required
                onBlur={handBlur}
                placeholder={placeHolder}></textarea>
              ) : (
                <input
                id={name}
                className="shadow-2xl appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type={typeInput}
                placeholder={placeHolder}
                value={valueForm}
                required
                onBlur={handBlur}
                onChange={changeValue}/>
              )}
            </div>
  )
}

