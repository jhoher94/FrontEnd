import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Estados from '../Components/Estado'
import Inventario from '../Components/Inventarios'
import Marcas from '../Components/Marcas'
import TipoEquipos from '../Components/TipoEquipos'
import Footer from '../Components/ui/Footer'
import NavBar from '../Components/ui/NavBar'
import NotFound from '../Components/ui/NotFound'
import Usuarios from '../Components/Usuarios'

export default function AppRouter() {
  return (
    <>
        <NavBar />
        <div className='container'>
            <Routes>
                <Route path='/' element={<TipoEquipos/>} />
                <Route path='/estados' element={<Estados />} />
                <Route path='/usuarios' element={<Usuarios />} />
                <Route path='/marcas' element={<Marcas/> } />
                <Route path='/inventario' element={<Inventario />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </div>
        <Footer />
    </>
  )
}