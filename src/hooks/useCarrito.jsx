import { useState } from 'react'

const useCarrito = () => {

const [carrito, setCarrito] = useState([])
const agregarAlCarrito = (producto) => setCarrito([...carrito,producto])
const eliminarDelCarrito = (id) => setCarrito(carrito.filter((item) => item.id !== id))
const estaEnElCarrito = (id) => carrito.some((item) => item.id === id)

  return {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    estaEnElCarrito
  }
}

export default useCarrito