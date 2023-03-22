import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "../pages/Carrito";
import Home from "../pages/Home";
import ItemDetail from "../pages/ItemDetail";
import EcommerceLayout from "./EcommerceLayout";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EcommerceLayout />}>
          <Route index element={<Home />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="item/:id" element={<ItemDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
