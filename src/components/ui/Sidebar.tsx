import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return(
        <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white font-bold text-2xl tracking-wide text-center">Restaurant App</p>
                <p className="mt-3 text-gray-600">Administra tu Restaurante en las siguientes opciones:</p>

                <nav>
                    <NavLink className={( { isActive }) => (isActive ? 'text-yellow-500' : 'text-gray-400 block hover:bg-yellow-500 hover:text-gray-900  duration-300')} to="/menu">Menú</NavLink>
                    <NavLink className={( { isActive }) => (isActive ? 'text-yellow-500' : 'text-gray-400 block hover:bg-yellow-500 hover:text-gray-900  duration-300')} to="/">Órdenes</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar