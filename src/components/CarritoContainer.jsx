import React from 'react'
import { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'
import ItemCount from './ItemCount'

const CarritoContainer = () => {
    const {carrito,eliminarDelCarrito} = useContext(EcommerceContext)
  return (
    <div className='container'>
        {!carrito.length ? <h1>Carrito Esta Vacio</h1> : carrito.map(({nombre, precio, count, version,id}) => (
            <>
                <div className='d-flex card'>
                    <span>{nombre}</span>
                    <span>{version}</span>
                    <span>${precio}</span>
                    <span>${count}</span>
                    {/* <ItemCount cantidad={count} sinBotonAgregar={true}/> */}
                    <button onClick={() => eliminarDelCarrito(id)} className='btn btn-danger'>Eliminar</button>
                </div>
            </>
        )) }
    </div>
  )
}

export default CarritoContainer