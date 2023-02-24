import React,{useState} from 'react'
import Button from '../../shared/Button'

const Counter = (props) => {

    const {initialNumber=0,initialNombre="Profe"} = props

    const [contador, setContador] = useState(initialNumber)
    const [nombre, setNombre] = useState(initialNombre)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)

    const cambioNombre = () => setNombre("Juan")

  return (
    <div className='d-flex justify-content-around'>
            <Button onClick={sumar} buttonText='sumar'/>
            <h1>Nombre : {nombre}</h1>
            <h1>Contador : {contador} </h1>
            <Button onClick={restar} buttonText='restar'/>
            <Button onClick={cambioNombre} buttonText='cambiar nombre'/>
    </div>
  )
}

export default Counter