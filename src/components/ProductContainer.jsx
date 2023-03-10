import React,{useEffect, useState} from 'react'
import { superheros } from '../data'
import Cart from './Cart/Cart'
const ProductContainer = () => {
  
  const [datos,setDatos] = useState(superheros)
  const [click, setClick] = useState(false)
 // const [show, setShow] = useState(false)

  useEffect(() => {
   // cuando el componente esta listo (Mount)
    // GET => 
    console.log('se cargo  completamente el componente')
    return () => {
      // Dismount // destruccion 
    }
    // en los corchetes , es el change (Change) los cambios
  }, [])


  // input: nombre => setImputValue(e.target.value) 
  
  

 console.log('se ejecuto este console.log , pero el html no cargo')

  return (
    <>
     {datos.map(({id,img,titulo,descripcion,comics}) => (
      <Cart
          id={id} 
          key={id} 
          img={img}
          title={titulo}
          descripcion={descripcion}
          buttonName={'Mas Info'}
          buttonClassName={comics === 'DC' ? 'btn btn-outline-warning' : 'btn btn-danger'} 
        
        />
     ))}
     <button onClick={()=> setClick(!click)}>Click</button>
    </>
  )
}

export default ProductContainer