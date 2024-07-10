import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Button from "../ButtonComponent";
import DrugIcon from '../../../assets/drugs.svg?react'

const AddPrescriptionModal = ({handleClose}) => {
    const submitButtonRef = useRef(null);
    const [isError, setIsError] = useState(false)
    const [formData, setFormData] = useState({
      drugName: '',
      dosage: '',
      instructions: ''
    })
    const [selectedItems, setSelectedItems] = useState([{}])

    const handleSelection = () => {


    }
  return (
    <Modal modalTitle={"Add Prescription"} submitText={"Add prescription"} onClick={() => submitButtonRef.current.click()} onClose={handleClose}>
      {
        selectedItems.length > 0 && selectedItems.map((item, idx) => {
          return  <div className="h-[70px] mb-[32px] rounded-[6px] flex p-[15px] border-l-[4px] border-[#6b5dd3] bg-[#f0effb] justify-between items-center" key={idx}>
          <div className="flex items-center">
            <div className="mr-[16px] bg-primary w-[40px] h-[40px] flex justify-center items-center rounded-[5px]">
             <DrugIcon />
            </div>
            <div>
              <p className="text-[15px] font-medium leading-[20px] text-primary mb-[2px]">
                Acetaminophen
              </p>
              <p className="text-xs text-secondary">3 times daily</p>
            </div>
          </div>
          <div className="flex gap-x-[10px]">
          <p className="text-[#6b5dd3] text-sm">Edit</p>
          <p className="text-[#f42727] text-sm">Delete</p>
          </div>
        </div>
        })
      }
        <form className="space-y-6">
      <div>
        <label className="text-sm font-bold text-primary mb-[10px]">
          Name of drug <span className="text-red-600">*</span>
        </label>
        <InputComponent
          placeholder=""
          className="bg-white w-full"
          showLeftIcon={false}
          type="number"
          id="priceLimit"
          name="priceLimit"
          value={formData.drugName}
          handleChange={(e) =>
            isError
              ? setIsError(false)
              : setFormData({ ...formData, drugName: e.target.value })
          }
        />
        <p className="text-red-600 text-sm mt-1">
          {isError && formData.limit.trim() === "" ? "required" : ""}
        </p>
      </div>
      <div>
        <label className="text-sm font-bold text-primary nb-[10px]">
          Dosage <span className="text-red-600">*</span>
        </label>
        <InputComponent
          placeholder="Enter name of treatment plan"
          className="bg-white w-full"
          showLeftIcon={false}
          type="number"
          id="priceLimit"
          name="priceLimit"
          value={formData.dosage}
          handleChange={(e) =>
            isError
              ? setIsError(false)
              : setFormData({ ...formData, dosage: e.target.value })
          }
        />
        <p className="text-red-600 text-sm mt-1">
          {isError && formData.limit.trim() === "" ? "required" : ""}
        </p>
      </div>
      <div>
        <label className="text-sm font-bold text-primary">Instructions</label>
        <textarea className="block w-full border border-[#eaecf0] rounded-[6px]" placeholder="enter note">

        </textarea>
      </div>
      {(formData.drugName && formData.dosage && formData.instructions) && <p className='bg-white text-[#6b5dd3] w-[40%] cursor-pointer' onClick={() => handleSelection()}>+ Add another drug</p>}
      <button type="submit" ref={submitButtonRef}  className="hidden"/>
      </form>
    </Modal>
  );
};

export default AddPrescriptionModal;
