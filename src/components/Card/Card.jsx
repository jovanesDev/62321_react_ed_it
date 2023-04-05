import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
const Card = (props) => {
  const {
    nombre,
    id,
    marca,
    modelo,
    precio,
    isInFavorites,
    addFavorites,
    removeFavorites,
    inFavorites,
  } = props;

  return (
    <div className="card w-75">
      <div className="card-body">{nombre}</div>
      <div className="card-body">{marca}</div>
      <div className="card-body">{modelo}</div>
      <div className="card-body">{precio}</div>
      <div className="d-flex justify-content-end px-5">
        {!inFavorites && isInFavorites(id) && (
          <span role={"button"} className="fs-3">
            <AiFillHeart />
          </span>
        )}
        {!inFavorites && !isInFavorites(id) && (
          <span
            onClick={() => addFavorites({ nombre, modelo, precio, marca, id })}
            role={"button"}
            className="fs-3"
          >
            <AiOutlineHeart />
          </span>
        )}
        {inFavorites && (
          <span
            onClick={() => removeFavorites(id)}
            role={"button"}
            className="fs-3 text-danger"
          >
            <AiFillDelete />
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
