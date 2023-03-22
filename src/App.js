import "./App.css";
import ProductosContainer from "./components/ProductosContainer";
import EcommerceProvider from "./context/EcommerceProvider";
import Rutas from './routes'
function App() {
  return (
    <div className="App">
      <EcommerceProvider>
       <Rutas/>
      </EcommerceProvider>
    </div>
  );
}

export default App;
