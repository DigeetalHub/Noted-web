import React from "react";

const Button = ({className, label}) => {
    return <button className={className}>
        {label}
    </button>;
};

export default Button;
