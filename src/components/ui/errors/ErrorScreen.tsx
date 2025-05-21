import { NavLink, useParams } from "react-router-dom"

export default function ErrorScreen() {

  const { errorMessage } = useParams();

  return (
    <>
      <h1 className="text-2xl text-red-600">Se ha producido un error</h1>
      <p>Mensaje de error: {errorMessage}</p>
      <p>Contacte con soporte informando sobre este error.</p>

      <div className="mt-10">
        <NavLink className="px-4 py-2 bg-blue-500 text-white rounded-2xl" to="/">Volver a inicio</NavLink>
      </div>
    </>
  )
}
