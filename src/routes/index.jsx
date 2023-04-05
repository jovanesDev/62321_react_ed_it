import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Producto from "../pages/Producto";
import MainLayout from "./layout/MainLayout";
import ProductProvider from "../context/ProductProvider";

const Rutas = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home />} />
            <Route path="favoritos" element={<Favorites />} />
            <Route path="producto/agregar" element={<Producto />} />
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default Rutas;
