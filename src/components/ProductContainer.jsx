import React,{useEffect, useState} from 'react'
import Cart from './Cart/Cart'

const ProductContainer = () => {

  const superheros = [
    {
      id:1,
      img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Superman_S_symbol.svg/1200px-Superman_S_symbol.svg.png',
      titulo:'Super-Man',
      descripcion:'DC Super Heroe',
      comics:'DC'
    },
    {
      id:2,
      img:'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/3e5a7-logo-de-batman-png-free.png?resize=700%2C700&ssl=1',
      titulo:'Batman',
      descripcion:'DC Super Heroe',
      comics:'DC'
    },
    {
      id:3,
      img:'https://i.pinimg.com/originals/60/af/20/60af2077698a6a57fd819390d502da09.jpg',
      titulo:'IronMan',
      descripcion:'Marvel Super Heroe',
      comics:'Marvel'
    }
  ]

  // break 21:50 hs

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