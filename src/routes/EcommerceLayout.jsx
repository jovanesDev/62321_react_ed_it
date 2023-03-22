import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const EcommerceLayout = () => {

    const routes = [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Carrito',
            path:'/carrito'
        }
    ]

  return (
    <div>
        <Navbar brand_name={'Celu Store'} routes={routes}/>
        <Outlet/>
    </div>
  )
}

export default EcommerceLayout