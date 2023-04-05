import { useState, useEffect } from "react";
import { axiosClient } from "../axios";
import useLayout from "./useLayout";

const useProducts = () => {
  const { showLoading, hideLoading } = useLayout();
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    showLoading();
    try {
      const res = await axiosClient.get("/productos");
      setProducts(res.data);
      hideLoading();
    } catch (error) {
      console.log(error);
      hideLoading();
    }
  };

  const saveProduct = async (objeto) => {
    showLoading();
    try {
      await axiosClient.post("/productos",objeto);
      await getAllProducts()
      hideLoading();
    } catch (error) {
      console.log(error);
      hideLoading();
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return {
    products,
    getAllProducts,
    saveProduct
  };
};

export default useProducts;
