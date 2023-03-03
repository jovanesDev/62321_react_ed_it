import React from 'react'

const Input = (props) => {

    // brake 10 min :
    
    const {
        type,
        placeholder,
        name,
        className,
        id,
        onChange,
        onBlur,
        required 
    } = props
    // clg(type) => undefined 
    
  return (
    <input
        type={ type || 'text'}
        placeholder={ placeholder || null }
        name={ name || null}
        className={ className || null}
        id={ id || null }
        onChange={ onChange || null }
        onBlur={onBlur || null}
        required={required || false}
    />
  )
}

export default Input