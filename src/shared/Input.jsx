import React from "react";

const Input = (props) => {
  const { type = "text", name, value, required, onChange } = props;
  return (
    <div className="mb-3">
      <label className="form-label">{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default Input;
