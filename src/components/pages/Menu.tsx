import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <>
        <h1 className="text-3xl font-light mb-4">Menú</h1>

        <Link to="/nuevo-plato" className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold duration-300">Agregar nuevo plato</Link>

    </>
  )
}
