import { useState } from "react";

const useFormulario = (initalState) => {
  const [form, setForm] = useState(initalState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
        ...form,
      [name]: value,
    });
  };
  return {
    form,
    handleChange
  };
};

export default useFormulario;
