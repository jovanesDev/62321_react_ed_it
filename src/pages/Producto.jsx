import React from "react";
import Formulario from "../components/Formulario/Formulario";

const Producto = () => {
  const initalState = {
    nombre: "",
    marca: "",
    modelo: "",
    precio: "",
  };
  return (
    <div className="container d-flex flex-column align-items-center my-5">
      <Formulario initalState={initalState} buttonText={"Agregar"} />
    </div>
  );
};

export default Producto;
