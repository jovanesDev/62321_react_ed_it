import { useEffect, useState } from "react";
import { axiosClient } from "../axios";
import useLayout from "./useLayout";

const useFavorites = () => {
  const { showLoading, hideLoading } = useLayout();
  const [favorites, setFavorites] = useState([]);

  const getAllFavorites = async () => {
    showLoading();
    try {
      const res = await axiosClient.get("/favoritos");
      setFavorites(res.data);
      hideLoading();
    } catch (error) {
      console.log(error);
      hideLoading();
    }
  };

  const addFavorites = async (objeto) => {
    showLoading();
    try {
      await axiosClient.post("/favoritos", objeto);
      await getAllFavorites();
      hideLoading();
    } catch (error) {
      console.log(error);
      hideLoading();
    }
  };

  const removeFavorites = async (id) => {
    showLoading();
    try {
      await axiosClient.delete(`/favoritos/${id}`);
      await getAllFavorites();
      hideLoading();
    } catch (error) {
      console.log(error);
      hideLoading();
    }
  };

  const isInFavorites = (id) =>
    favorites.some((favorito) => favorito.id === id);

  useEffect(() => {
    getAllFavorites();
  }, []);

  return {
    favorites,
    getAllFavorites,
    isInFavorites,
    addFavorites,
    removeFavorites,
  };
};

export default useFavorites;
