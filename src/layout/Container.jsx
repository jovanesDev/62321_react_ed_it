import React from 'react'

const Container = (props) => {
    const {fullWidth,children,dFlex} = props
  return (
    <div className={`${fullWidth ? 'container-fluid' : 'container'} ${dFlex ? 'd-flex justify-content-between' : ''}`}>
        {children}
        {/* Children es equivalente a todos los componentes que metere adentro en futuro */}
    </div>
  )
}

export default Container

