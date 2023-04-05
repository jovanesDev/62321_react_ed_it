import React, { createContext } from "react";
import useFavorites from "../hooks/useFavorites";
import useLayout from "../hooks/useLayout";
import useProducts from "../hooks/useProducts";

export const ProductContext = createContext("");

const ProductProvider = ({ children }) => {
  const { loading } = useLayout();
  const { products, getAllProducts,saveProduct } = useProducts();
  const {
    favorites,
    getAllFavorites,
    isInFavorites,
    addFavorites,
    removeFavorites,
  } = useFavorites();

  // Break hasta 21:10
  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        favorites,
        getAllFavorites,
        getAllProducts,
        isInFavorites,
        addFavorites,
        removeFavorites,
        saveProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
