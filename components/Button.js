import React from "react";

const Button = ({ className, label, disabled, onClick }) => {
  return <button onClick={onClick} className={className} disabled={disabled}>{label}</button>;
};

export default Button;
