import React from "react";

const Button = ({text, className, border, disabled, handleClick, Icon}) => {
    return (
        <button onClick={handleClick} disabled={disabled} className={`py-[10px] px-[16px] ${border ? "border border-[#d0d5dd]" : ""}  ${disabled ? "opacity-50" : "opacity-100"} rounded-md ${className} shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:outline-none`}>
              {text}
            </button>
    )
}

export default Button