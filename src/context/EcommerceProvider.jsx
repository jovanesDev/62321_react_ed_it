import { createContext } from "react";
import useCarrito from "../hooks/useCarrito";

export const EcommerceContext = createContext("");

const EcommerceProvider = ({ children }) => {
  const { carrito, agregarAlCarrito, eliminarDelCarrito, estaEnElCarrito } = useCarrito();

  const productos = [
    {
      id: "1",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_2X_605126-MLM51559383638_092022-F.webp",
      nombre: "Iphone",
      version: "14 Pro Max",
      precio: 400000,
      year: 2023,
    },
    {
      id: "2",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_2X_816480-MLA47777273514_102021-F.webp",
      nombre: "Iphone",
      version: "13 Pro Max",
      precio: 300000,
      year: 2022,
    },
    {
      id: "3",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_2X_989311-MLA31922400058_082019-F.webp",
      nombre: "Samsun",
      version: "A 50",
      precio: 160000,
      year: 2019,
    },
  ];
  const nombreDelProfe = "Hovha";

  const saludar = () => {
    console.log("Hola Mundo");
  };

  return (
    <EcommerceContext.Provider
      value={{
        productos,
        carrito,
        nombreDelProfe,
        saludar,
        agregarAlCarrito,
        eliminarDelCarrito,
        estaEnElCarrito,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

export default EcommerceProvider;
