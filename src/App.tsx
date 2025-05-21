import { Routes, Route} from 'react-router'
import Ordenes from './components/pages/Ordenes.tsx'
import Menu from './components/pages/Menu.tsx'
import NuevoPlato from './components/pages/NuevoPlato.tsx'
import Sidebar from './components/ui/Sidebar.tsx'
import FirebaseContext from './firebase/context.ts'
import firebase from './firebase/config.ts'
import ErrorScreen from './components/ui/errors/ErrorScreen.tsx'


function App() {

  return (
    <> 
      <FirebaseContext.Provider value={{firebase}}>
        <div className='md:flex min-h-screen'>
        <Sidebar />
        
        <div className='md:w-3/5 xl:w-4/5 p-6'>
          <Routes>
            <Route path='/' element={<Ordenes />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/nuevo-plato' element={<NuevoPlato />}/>
            <Route path='/error/:errorMessage' element={<ErrorScreen />}/>
          </Routes>
        </div>
      </div>
      </FirebaseContext.Provider>
    </>
  )
}

export default App
