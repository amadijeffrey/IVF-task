import React, { useState, ChangeEvent } from "react";
import CloseIcon from '../../../assets/close.svg?react'
import InputComponent from "../Input";


const DropDownWithSearch = ({
  objectOptions,
  isFetching,
  keySelector,
  className,
  values,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  

  const handleSelectItem = (item) => {    
    if(values.some(value => value.userID === item.userID)){

      const updatedSet = values.filter((value) => value.userID !== item.userID)
      onChange(updatedSet)
    }else{
      onChange([...values, {fullName: item.fullName, userID: item.userID}])

    }
  };

  
  return (
    <div className={`relative ${className}`}>
      <div
        className=" flex  border border-[#d0d5dd] p-2 rounded-md w-full justify-between text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      >
        <div className="w-[90%] flex flex-wrap gap-[3px]">
        {values.length > 0 ? values.map((value, idx) => {
            return <div key={idx} className="bg-[#9e9e9e14] border border-[#d0d5dd] rounded-[46px] flex gap-x-[3px] items-center h-[28px] px-2"><p className="text-sm inline-block ml-[5px] text-[#1b1c1e]">{value.fullName}</p><CloseIcon onClick={() => handleSelectItem(value)} className="cursor-pointer scale-[0.7]"/></div>
        }) : "Select"}
        </div>
        <span className="cursor-pointer"  onClick={() => {
          setIsOpen(!isOpen)}}>
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
        <div className="absolute top-full bg-white mt-1 rounded-md shadow-md w-full z-50 max-h-[200px] overflow-scroll p-[12px]">
           <InputComponent
          placeholder="Search for employees"
          className={"bg-white border border-[#d0d5dd]"}
          showLeftIcon={true}
          type="text"
          id="lastName"
          name="lastName"
          value={inputValue}
          handleChange={(e) => setInputValue(e.target.value)}
        />
          {!isFetching && keySelector
            ? objectOptions?.map((optionObj, index) => (
                <div
                  key={index}
                  className={`${
                  optionObj.fullName.toLowerCase().startsWith(inputValue)
                      ? "block"
                      : "hidden"
                  }
                  px-2 py-2 cursor-pointer hover:bg-gray-200`}
                >
                 <input type='checkbox' checked={values.some(value => value.userID === optionObj.userID)} onChange={() => handleSelectItem(optionObj)} className="appearance-none h-[20px] w-[20px] border border-[#d0d5dd] cursor-pointer checked:bg-[#7f56d9] rounded-full focus:outline-none focus:ring-transparent mr-[8px]"/> {optionObj?.[keySelector]}
                </div>
              ))
            :  <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-[#0000004d]"><svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg></div>}
        </div>
      )}
    </div>
  );
};

export default DropDownWithSearch
