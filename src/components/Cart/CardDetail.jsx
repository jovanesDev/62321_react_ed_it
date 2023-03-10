import React from "react";
import { useNavigate} from "react-router-dom";


const CardDetail = (props) => {
 const navigate = useNavigate()
  const {img,nombre} = props
  return (
    <div>
      <button className="btn btn-danger" onClick={() => navigate(-1)}>Volver Atras</button>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h1>{nombre}</h1>
      </div>
    </div>
  );
};

export default CardDetail;
