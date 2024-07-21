import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Dropdown from "../DropDown/DropDown";
import CalendarIcon from '../../../assets/sidebar/calendar.svg?react'

const CreateTreatmentPlanModal = ({handleClose, handleOpenSecondModal}) => {
    const submitButtonRef = useRef(null);
    const [createdTimeline, setCreatedTimeline] = useState(false)
    const [formData, setFormData] = useState({
       title: '',
       specialty: "",
       date: ''
    })
    const [isError, setIsError] = useState(false)
    const [nextStep, setNextStep] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])


    const createTreatmentTimeline = () => {
       setSelectedItems([...selectedItems, formData])
       setNextStep(false)
    }

    const handleSelection = (item) => {
      if(selectedItems.some(value => value.title === item.title)){

        const updatedSet = selectedItems.filter((value) => value.title !== item.title)
        setSelectedItems(updatedSet)
      }
    }

  return (
    <>
    {!nextStep ? <Modal modalTitle={"Create Treatment Plan"} submitText={"Create Plan"} onClick={() => setNextStep(true)} onClose={handleClose}>
        <form className="space-y-6">
      <div>
        <label className="text-sm font-bold text-primary">
          Patient ID/File Number <span className="text-red-600">*</span>
        </label>
        <InputComponent
          placeholder=""
          className="bg-white w-full mt-[6px]"
          showLeftIcon={false}
          type="number"
          id="priceLimit"
          name="priceLimit"
          value={formData.limit}
          handleChange={(e) =>
            isError
              ? setIsError(false)
              : setFormData({ ...formData, limit: e.target.value })
          }
        />
        <p className="text-red-600 text-sm mt-1">
          {isError && formData.limit.trim() === "" ? "required" : ""}
        </p>
      </div>
      <div>
        <label className="text-sm font-bold text-primary">
          Name of Treatment <span className="text-red-600">*</span>
        </label>
        <InputComponent
          placeholder="Enter name of treatment plan"
          className="bg-white w-full mt-[6px]"
          showLeftIcon={false}
          type="number"
          id="priceLimit"
          name="priceLimit"
          value={formData.limit}
          handleChange={(e) =>
            isError
              ? setIsError(false)
              : setFormData({ ...formData, limit: e.target.value })
          }
        />
        <p className="text-red-600 text-sm mt-1">
          {isError && formData.li.trim() === "" ? "required" : ""}
        </p>
      </div>
      <div>
        <label className="text-sm font-bold text-primary">Test requests</label>
        <textarea className="block w-full border border-[#d0d5dd] rounded-[6px] mt-[10px]">

        </textarea>
      </div>
      {selectedItems.length > 0 && <p className="font-bold text-xl text-primary mb-[32px]">Treatment Timelines</p>}
      {
        selectedItems.length > 0 && selectedItems.map((item, idx) => {
          return  <div className="h-[70px] mb-[32px] rounded-[6px] flex p-[15px] border-l-[4px] border-[#6b5dd3] bg-[#f0effb] justify-between items-center" key={idx}>
          <div className="flex items-center">
            <div className="mr-[16px] bg-primary w-[40px] h-[40px] flex justify-center items-center rounded-[5px]">
             <CalendarIcon />
            </div>
            <div>
              <p className="text-[15px] font-medium leading-[20px] text-primary mb-[2px]">
                {item.title}
              </p>
              <p className="text-xs text-secondary">{item.date}</p>
            </div>
          </div>
          <div className="flex gap-x-[10px]">
          <p className="text-[#f42727] text-sm cursor-pointer" onClick={() => handleSelection(item)}>Delete</p>
          </div>
        </div>
        })
      }
      <p onClick={() => setNextStep(true)} className="text-base text-[#6b5dd3] font-bold cursor-pointer">
        Add Treatment timeline
      </p>
      <button type="submit" ref={submitButtonRef} className="hidden"/>
      </form>
    </Modal>
    :
    <Modal modalTitle={"Treatment Timeline"} submitText={"Create Timeline"} onClick={createTreatmentTimeline} onClose={() => setNextStep(false)} disabled={!formData.title || !formData.specialty || !formData.date}>
        <form className="space-y-6">
        <div>
            <label
              htmlFor="email"
              className="block text-primary text-sm font-bold mb-[10px]"
            >
              Title
            </label>
            <InputComponent
              placeholder="title"
              className="bg-white w-full"
              showLeftIcon={false}
              type="text"
              id="date"
              name="date"
              value={formData.title}
              handleChange={(e) =>
                isError
                  ? setIsError(false)
                  : setFormData({ ...formData, title: e.target.value })
              }
            />
            <p className="text-red-600 text-sm mt-1">
              {isError && !validateEmail(formData.email.trim())
                ? "enter a valid email"
                : ""}
            </p>
          </div>
      <div>
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Select staff speciality
          </label>
          <Dropdown
            options={["Embryologist", "Lab Technician"]}
            value={formData.specialty}
            onChange={(item) =>
              isError
                ? setIsError(false)
                : setFormData({ ...formData, specialty: item })
            }
          />
        </div>
        <div>
            <label
              htmlFor="email"
              className="block text-primary text-sm font-bold mb-[10px]"
            >
              Select Date
            </label>
            <InputComponent
              placeholder="Enter date"
              className="bg-white w-full"
              showLeftIcon={false}
              type="date"
              id="date"
              name="date"
              value={formData.date}
              handleChange={(e) =>
                isError
                  ? setIsError(false)
                  : setFormData({ ...formData, date: e.target.value })
              }
            />
            <p className="text-red-600 text-sm mt-1">
              {isError && !validateEmail(formData.email.trim())
                ? "enter a valid email"
                : ""}
            </p>
          </div>
      <button type="submit" ref={submitButtonRef} className="hidden" />
      </form>
    </Modal>
        }
        </>
  );
};

export default CreateTreatmentPlanModal;
