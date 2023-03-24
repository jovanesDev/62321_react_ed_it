import React from "react";
import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";
import useCounter from "../hooks/useCounter";

const ItemCount = (props) => {
  const { agregarAlCarrito, estaEnElCarrito } = useContext(EcommerceContext);
  const { producto, sinBotonAgregar, cantidad } = props;
  const { count, handleSumar, handleRestar, handleRedirect } =
    useCounter(cantidad);

  return (
    <div>
      <div className="container d-flex justify-content-between">
        <button onClick={handleRestar} className="btn btn-warning fs-6">
          -1
        </button>
        <h6 className="fs-3">{count}</h6>
        <button onClick={handleSumar} className="btn btn-warning fs-6">
          +1
        </button>
      </div>
      {!sinBotonAgregar && !estaEnElCarrito(producto.id) && (
        <button
          className="btn btn-primary mx-auto my-4"
          onClick={() => agregarAlCarrito({ ...producto, count })}
        >
          Agregar al Carrito
        </button>
      )}

      {estaEnElCarrito(producto.id) && (
        <button onClick={handleRedirect} className="btn btn-success mx-auto my-4">
          Terminar la compra
        </button>
      )}
    </div>
  );
};

export default ItemCount;
