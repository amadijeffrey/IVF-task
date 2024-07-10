import React from "react";
import ScanIcon from "../../../assets/search.svg?react";


const InputComponent = ({
  placeholder,
  name,
  type,
  showLeftIcon,
  className,
  value,
  id,
  handleChange,
  required,
  error,
  readOnly
}) => {
  return (
    <>
      <div
        className={`${className} relative md:flex items-center rounded-[5px] justify-between w-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#d0d5dd]`}
      >
        {showLeftIcon ? (
          <div className="px-2 bg-inherit">
            <ScanIcon />
          </div>
        ) : (
          <></>
        )}
        <input
          style={{outline:'none'}}
          type={type}
          name={name}
          id={id}
          readOnly ={readOnly}
          required={required}
          value={value ?? ''}
          onChange={handleChange}
          placeholder={placeholder}
          className={`p-2 w-full outline-none border-none focus:border-none focus:outline-none bg-inherit rounded-[5px]`}
        />
        
      </div>
      {error &&(
      <p className=" text-red-500">{error}</p>)
}
    </>
  );
};

export default InputComponent;
