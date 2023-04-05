import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductProvider'

const Container = () => {

    const {products,loading} = useContext(ProductContext)
    

  return (
    <div>Container</div>
  )
}

export default Container