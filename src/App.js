import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Formulario from './components/Formulario/Formulario';
import Navbar from './components/Navbar/Navbar';

import Productos from './views/Productos';
function App() {
  const [showForms,setShowForms] = useState(false)
  const [datos,setDatos] = useState({
    nombre:'',
    apellido:'',
    materia:''
  })

  // Brake hasta 21:35

  useEffect(() => {
    
    if(showForms){
      setDatos({
        nombre:'Profe',
        apellido:'Profe',
        materia:'React.js'
      })
    }
  
    return () => {
      setDatos({
        nombre:'',
        apellido:'',
        materia:''
      })
    }
  }, [showForms])
  

  //:10 => Formulario completo
  return (
    <div className="App text-danger">
      <Navbar navbar_items={["Item","Home","Link","Disabled","Tomas"]}/>
      <button onClick={() => setShowForms(!showForms)}>{ showForms ? 'Ocultar' : 'Mostrar'}</button>
      {showForms &&
      <>
      <Formulario/>
      <Formulario condicional={true}/>
      </>
      }
      {showForms && (
        <>
          <h1>{datos.nombre}</h1>
          <h1>{datos.apellido}</h1>
          <h1>{datos.materia}</h1>
        </>
      )}
    </div>
  );
}

export default App;