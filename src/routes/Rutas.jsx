import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Contacto from '../pages/Contacto'
import DetailPage from '../pages/DetailPage'
import Home from '../pages/Home'
import Nosotros from '../pages/Nosotros'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Navbar navbar_items={[{nombre:'Home',path:'/'},{nombre:'Nosotros',path:'/nosotros'},{nombre:'Contacto',path:'/contacto'}]} />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/nosotros' element={<Nosotros/>} /> 
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/detail/:id' element={<DetailPage/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default Rutas