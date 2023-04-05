import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Card from "../components/Card/Card";

const Favorites = () => {
  const { favorites, isInFavorites, removeFavorites } =
    useContext(ProductContext);
  return (
    <div className="container d-flex flex-column align-items-center my-5 ">
      {favorites.length < 1 ? (
        <h1 className="text-center fs-3">No hay Favoritos</h1>
      ) : (
        favorites?.map((favorit) => (
          <Card
            key={favorit.id}
            {...favorit}
            //addFavorites={addFavorites}
            isInFavorites={isInFavorites}
            removeFavorites={removeFavorites}
            inFavorites
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
