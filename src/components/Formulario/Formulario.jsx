import React, { useContext } from "react";
import useFormulario from "../../hooks/useFormulario";
import Input from "../../shared/Input";
import { defineIfIsRequired, defineInputType } from "../../helper";
import { ProductContext } from "../../context/ProductProvider";
const Formulario = (props) => {
  const { saveProduct } = useContext(ProductContext);

  const {
    initalState,
    buttonText = "Submit",
    buttonClassName = "btn btn-primary w-100",
  } = props;
  const { form, handleChange } = useFormulario(initalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveProduct(form);
  };
  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      {Object.entries(form)?.map(([key, value]) => (
        <Input
          type={defineInputType(key)}
          key={key}
          name={key}
          value={value}
          required={defineIfIsRequired(key)}
          onChange={handleChange}
        />
      ))}
      <button type="submit" className={buttonClassName}>
        {buttonText}
      </button>
    </form>
  );
};

export default Formulario;
