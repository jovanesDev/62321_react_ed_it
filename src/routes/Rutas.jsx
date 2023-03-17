import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UrlGenerator from "../components/URLGenerator/UrlGenerator";
import Contacto from "../pages/Contacto";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import MainLayoutRoutes from "./layout/MainLayoutRoutes";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayoutRoutes user={true} />}>
          {/* Navegacion Principal */}
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="detail/:id" element={<DetailPage />} />
          {/* Aca arranca seccion de basket  */}
            <Route
              path="basket"
              element={
                <MainLayoutRoutes
                  navbar_items={[
                    { nombre: "Inicio", path: "/basket" },
                    { nombre: "Remeras", path: "/basket/remeras" },
                    { nombre: "Guantes", path: "/basket/guantes" },
                    { nombre: "Pelotas", path: "/basket/pelotas" },
                  ]}
                  user={true}
                />
              }
            >
                <Route index element={<h1>Bienvenido a basket</h1>} />
                <Route path="remeras" element={<h1>Seccion de Remeras</h1>} />
                <Route path="guantes" element={<h1>Seccion de guantes</h1>} />
                <Route path="pelotas" element={<h1>Seccion de pelotas</h1>} />
            </Route>

            <Route
              path="nfl"
              element={
                <MainLayoutRoutes
                  navbar_items={[
                    { nombre: "Inicio", path: "/nfl" },
                    { nombre: "Cascos", path: "/nfl/cascos" },
                    { nombre: "Camisetas", path: "/nfl/camisetas" },
                    { nombre: "Pelotas", path: "/nfl/pelotas" },
                  ]}
                  user={true}
                />
              }
            >
                <Route index element={<h1>Bienvenido a NFL</h1>} />
                <Route path="cascos" element={<h1>Seccion de Cascos</h1>} />
                <Route path="camisetas" element={<h1>Seccion de camisetas</h1>} />
                <Route path="pelotas" element={<h1>Seccion de pelotas</h1>} />
            </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
