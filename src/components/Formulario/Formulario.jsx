import React, { useState, useEffect } from "react";
import Input from "../../shared/Input";

const Formulario = (props) => {
  const {
    initialState,
    inputs,
    formTitle,
    onSubmit,
    toggleEnviado,
    handleSetText,
  } = props;

  // ejeplo como viene los props
  // props => {
  // name:'fulano'
  // value:'fulano'
  // showForm : true,
  // initalState : {email:'',password:'',repeatPass:''}
  //}

  // props.name

  const [form, setForm] = useState(initialState);

  const handleSubmit = (e) => {
    onSubmit(e, form);
    toggleEnviado();
  };

  useEffect(() => {
    setForm(initialState);
  }, [initialState]);
  // validacion
  // => LOGIN || SI
  // => REGISTRO || NO
  // => DATOS  || NO

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleSetText(e.target.value)} />
      <form onSubmit={handleSubmit}>
        <h1>{formTitle || "Titulo"}</h1>
        {/* Inputs */}
        {inputs?.map(({ name, type, id, placeholder, required }) => (
          <Input
            name={name}
            type={type}
            key={id}
            placeholder={placeholder}
            required={required}
            onChange={handleChange}
          />
        ))}
        {/* <input type="email" />
        <input type="password" /> */}
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
