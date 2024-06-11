import React from "react";

const InputField = ({ type, icon, placeholder, label, ...rest }) => {
  return (
    <div>
      <div className="m-4 ">
        <label>{label}</label>
        <input
          icon={icon}
          type={type ?? "text"}
          placeholder={placeholder}
          required
          className="my-1 mx-4 rounded-full w-96 outline-none 
          bg-[#570C69] px-2 py-1 
          "
          {...rest}
        />
      </div>
    </div>
  );
};

export default InputField;
