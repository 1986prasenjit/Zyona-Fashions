import React from "react";

const Button = ({ children, buttonType, type, onClickHandler }) => {
  const buttonStyles = {
    danger: "bg-red-500 hover:bg-red-600",
    primary: "bg-blue-500 hover:bg-blue-600",
    success: "bg-green-500 hover:bg-green-600",
    black: "bg-black hover:bg-black/70",
  };

  const baseStyles =
    "px-4 py-2 sm:w-48 w-32 md:w-68 text-sm sm:text-md lg:text-lg text-white rounded transition-colors duration-200 cursor-pointer";

  const finalClassName = `${baseStyles} ${
    buttonStyles[buttonType] || buttonStyles.primary
  }`;
  return (
    <div>
      <button type={type} onClick={onClickHandler} className={finalClassName}>
        {children}
      </button>
    </div>
  );
};

export default Button;
