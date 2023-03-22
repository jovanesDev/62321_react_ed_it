import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Tarjeta from '../components/Tarjeta';
import { EcommerceContext } from '../context/EcommerceProvider'

const ItemDetail = () => {
    const { id } =  useParams()
    // id = 2
    const { productos } = useContext(EcommerceContext);

    const producto = productos.find((producto) => producto.id === id)

  return (
    <div>
        <Tarjeta {...producto} sinBoton={true} />
    </div>
  )
}

export default ItemDetail