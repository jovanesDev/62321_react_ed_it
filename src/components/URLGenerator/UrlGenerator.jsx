import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UrlGenerator = () => {

    const navigate = useNavigate()
    const [state,setState] = useState(
        {
            marca:'',
            color:'',
            precio:''
        }
    )

    const handleChange = (e) => {
        const {name,value} = e.target
        setState({
            ...state,
            [name]:value
        })
    }

  return (
    <div>
        <select onChange={handleChange} name='marca'>
            <option value={'Rolex'}>Rolex</option>
            <option value={'Patec'}>Patec</option>
        </select>
        <select onChange={handleChange} name='color'>
            <option value={'dorado'}>dorado</option>
            <option value={'plateado'}>plateado</option>
        </select>
        <select onChange={handleChange} name='precio'>
            <option value={10000}>10000</option>
            <option value={20000}>20000</option>
        </select>
        <button 
            disabled={Object.values(state).some((v) => !v)} 
            onClick={() => navigate(`/detail/1/?marca=${state.marca}&&color=${state.color}&&precio=${state.precio}`)}>
                Filtrar
        </button>
    </div>
  )
}

export default UrlGenerator