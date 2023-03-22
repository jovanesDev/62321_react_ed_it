import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const Tarjeta = (props) => {
  const { imagen, nombre, version, precio, year, id, sinBoton } = props;
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/item/${id}`);

  return (
    <div className="card mx-2" style={{ width: "18rem" }}>
      <img
        src={imagen}
        className="card-img-top w-50 h-50 mx-auto object-fit"
        alt="celu-image"
      />
      <div className="card-body">
        <h5 className="card-title">Nombre : {nombre}</h5>
        <h6 className="fs-4 text-center">Version : {version}</h6>
        <p className="card-text">Precio : {precio}</p>
        <div className="my-5">
          Año : <span>{year}</span>
        </div>
        {!sinBoton && <button onClick={handleNavigate} className="btn btn-primary">Mas Info</button>}
      </div>
     { sinBoton && <ItemCount producto={{...props}}/>}
    </div>
  );
};

export default Tarjeta;
