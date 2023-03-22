import React, { useState } from "react";
import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";

const ItemCount = (props) => {
  const { agregarAlCarrito } = useContext(EcommerceContext);
  const { producto } = props;
  const [count, setCount] = useState(1);

  const handleSumar = () => {
    setCount(count + 1);
  };

  const handleRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
      <button
        className="btn btn-primary mx-auto my-4"
        onClick={() => agregarAlCarrito({ ...producto, count })}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
