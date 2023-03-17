import React from "react";
import { Navigate, Outlet, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const MainLayoutRoutes = (props) => {
    const {user,title,navbar_items} = props
  return (
    <>
     <h1>{title}</h1>
      <Navbar
        navbar_items={ navbar_items || [
        { nombre: "Inicio de todo", path: "/" },
        { nombre: "Nosotros", path: "/nosotros" },
        { nombre: "Contacto", path: "/contacto" },

          { nombre: "basket", path: "/basket" },
          { nombre: "NFL", path: "/nfl" },
          
        ]}
      />

        {!user && <Navigate to='/login' />}
        { user && <Outlet />}

      {/* Footer */}
    </>
  );
};

export default MainLayoutRoutes;
