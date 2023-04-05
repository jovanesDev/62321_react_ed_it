import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Card from "../components/Card/Card";

const Home = () => {
  const { products, isInFavorites, addFavorites,removeFavorites } = useContext(ProductContext);
  return (
    <div className="container d-flex flex-column align-items-center my-5">
      {products?.map((product) => (
        <Card
          key={product.id}
          {...product}
          addFavorites={addFavorites}
          isInFavorites={isInFavorites}
          removeFavorites={removeFavorites}
        />
      ))}
    </div>
  );
};

export default Home;
