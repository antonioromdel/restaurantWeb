interface ErrorsForm {
    errorCheck?: boolean
    errorName: string
}

export default function Form_errors({errorName}: ErrorsForm) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
      <p>{errorName}</p>
    </div>
  )
}

