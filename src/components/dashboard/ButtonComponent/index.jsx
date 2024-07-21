import React from "react";

const Button = ({text, className, border, disabled, onClick, Icon}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`py-[10px] px-[16px] ${border ? "border border-[#d0d5dd]" : ""} focus:outline-0 ${disabled ? "opacity-50" : "opacity-100"} rounded-md ${className} shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]`}>
              {text}
            </button>
    )
}

export default Button