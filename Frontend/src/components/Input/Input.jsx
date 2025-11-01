import React from "react";

const Input = ({
  type = "text",
  placeholder = "Enter Your Text",
  onChangeHandler,
  required = false,
  value,
  name,
  disabled = false,
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 sm:text-sm md:text-base lg:text-lg placeholder:text-sm"
      />
    </div>
  );
};

export default Input;
