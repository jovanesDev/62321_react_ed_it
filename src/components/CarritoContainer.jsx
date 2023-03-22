import React from 'react'
import { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'

const CarritoContainer = () => {
    const {carrito} = useContext(EcommerceContext)
  return (
    <div>
        {!carrito.length ? <h1>Carrito Esta Vacio</h1> : carrito.map(({nombre, precio, count}) => (
            <>
                <div className='d-flex card'>
                    <span>{nombre}</span>
                    <span>${precio}</span>
                    <span> X {count}</span>
                </div>
            </>
        )) }
    </div>
  )
}

export default CarritoContainer