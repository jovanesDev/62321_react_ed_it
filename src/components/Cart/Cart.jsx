import React from 'react'
import defaultImg from '../../assets/logo192.png'
import Button from '../../shared/Button';

const Cart = (props) => {
    const {img,title,descripcion,buttonName,buttonClassName} = props;
    const handleClick = () => alert('se clickeo')
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={img || defaultImg} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title || 'Default Title'}</h5>
            <p className="card-text">{descripcion || 'Lorem Ipsum'}</p>
            <Button className={buttonClassName} buttonText={buttonName} onClick={handleClick}/>
            {/* <button className={ buttonClassName || "btn btn-primary" }>{buttonName || 'Ver mas'}</button> */}
        </div>
    </div>
  )
}

export default Cart