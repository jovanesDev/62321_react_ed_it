import React, { useEffect, useState } from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
import CardDetail from '../components/Cart/CardDetail'
import { superheros } from '../data'
import Spinner from '../shared/Spinner/Spinner'

const DetailPage = () => {

  const [loading,setLoading] = useState(false);
  const [superHeroe,setSuperHeroe] = useState(null);
 const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get('marca'))
  console.log(searchParams.get('precio'))
  console.log(searchParams.get('color'))
  const { id } = useParams()

  const findSuperHeroe = () => {
    setLoading(true)

    setTimeout(() => {
      const result = superheros.find((item) => item.id === id)
      console.log(result)
      if(result){
        setSuperHeroe(result)
      }
      setLoading(false)
    }, 3000);
   

  }

  useEffect(() => {
      findSuperHeroe()
  }, [])
  


  return (
    <>
    {loading && <Spinner/>}
    {!loading && !superHeroe && <h1>Articulo no existe</h1>}
    {!loading && superHeroe && <CardDetail img={superHeroe.img} nombre={superHeroe.titulo}/>}
    </>
  )




}

export default DetailPage