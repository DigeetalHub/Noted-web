import React from "react";

const Button = ({ className, label, disabled }) => {
  return <button className={className} disabled={disabled}>{label}</button>;
};

export default Button;
