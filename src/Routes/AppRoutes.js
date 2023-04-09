import React from 'react'
import NavBar from '../Components/ui/NavBar'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../Components/ui/NotFound'
import TipoEquipos from '../Components/TipoEquipos'
import Estados from '../Components/Estados'
import Marcas from '../Components/Marcas'
import Inventarios from '../Components/Inventarios'
import Usuarios from '../Components/Usuarios'
import Footer from '../Components/ui/Footer'

export default function AppRoutes() {
  return (
    <>
        <NavBar className= 'container' />
        <div>
        <Routes>
            <Route path='/' element={<TipoEquipos />}/>
            <Route path='/usuario' element={<Usuarios />} />
            <Route path='/marcas' element={<Marcas />} />
            <Route path='/estado' element={<Estados/>}/>
            <Route path='/inventario' element={<Inventarios/>}/>
            <Route path='*' element={<NotFound/>} />
        </Routes>
        </div>
        <Footer className='container' />
    </>
  )
}
