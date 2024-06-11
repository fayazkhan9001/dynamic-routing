import React from "react";

const InputField = ({ type, label, placeholder, ...rest }) => {
  return (
    <div className="my-2">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default InputField;
