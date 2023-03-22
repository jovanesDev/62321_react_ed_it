import { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'
import Tarjeta from './Tarjeta'

const ProductosContainer = () => {

  const {productos,nombreDelProfe,saludar} = useContext(EcommerceContext)

  return (
    <div className='container-fluid d-flex p-3'>

      {productos.map((producto) => (
        <Tarjeta
          key={producto.id}
          {...producto}
        />
      ))}

    </div>
  )
}

export default ProductosContainer