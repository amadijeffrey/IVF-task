import React, { useState } from "react";

const Dropdown = ({
  objectOptions,
  options,
  keySelector,
  className,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectItem = (item) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)}}
        className=" flex border border-[#d0d5dd] p-2 px-4 rounded-md w-full justify-between items-center text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      >
        {value || "Select"}
        <span className="">
          {isOpen ? (
            <svg
              className="w-6 h-6 scale-[0.4] xl:scale-[0.5] text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 scale-[0.4] xl:scale-[0.5] text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full bg-white mt-1 rounded-md shadow-md w-full z-50 max-h-[200px] overflow-scroll">
          {objectOptions && keySelector
            ? objectOptions?.map((optionObj, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectItem(optionObj)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {optionObj?.[keySelector]}
                </div>
              ))
            : options?.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelectItem(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {option}
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
