import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Dropdown from "../DropDown/DropDown";
import Report from '../../../assets/appointmentReport.svg?react'

const FollowupAppointmentModal = ({handleClose}) => {
  const submitButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });
  const [isError, setIsError] = useState(false);
  return (
    <Modal
      modalTitle={"Reschedule Appointment"}
      submitText={"Reschedule Appointment"}
      onClick={() => submitButtonRef.current.click()}
      onClose={handleClose}
    >
      <form className="space-y-6">
      <div className="h-[80px] mb-[32px] rounded-[6px] flex p-[15px] border-l-[4px] border-[#6b5dd3] bg-[#f0effb] justify-start items-center">
          <div className="flex items-center">
            <div className="mr-[16px] bg-primary w-[40px] h-[40px] flex justify-center items-center rounded-[5px]">
             <Report />
            </div>
            <div>
              <p className="text-[15px] font-medium leading-[20px] text-primary mb-[2px]">
                Ovulation Induction
              </p>
              <p className="text-xs text-secondary">Doctor's name: <span className="text-primary">Justin Primus</span></p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-primary text-sm font-bold"
            >
              Select Date <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter first name"
              className="bg-white w-full border focus:border-afColor border-[#dde5e8] mt-[6px]"
              showLeftIcon={false}
              type="date"
              id="firstName"
              name="firstName"
              value={formData.firstname}
              handleChange={(e) =>
                isError
                  ? setIsError(false)
                  : setFormData({ ...formData, firstname: e.target.value })
              }
            />
            <p className="text-red-600 text-sm mt-1">
              {isError && formData.firstname.trim().length < 3
                ? "must be at least 3 letter"
                : ""}
            </p>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-primary text-sm font-bold"
            >
              Select Time <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter last name"
              className="bg-white w-full border focus:border-afColor border-[#dde5e8] mt-[6px]"
              showLeftIcon={false}
              type="time"
              id="lastName"
              name="lastName"
              value={formData.lastname}
              handleChange={(e) =>
                isError
                  ? setIsError(false)
                  : setFormData({ ...formData, lastname: e.target.value })
              }
            />
            <p className="text-red-600 text-sm mt-1">
              {isError && formData.lastname.trim().length < 3
                ? "must be at least 3 letter"
                : ""}
            </p>
          </div>
        </div>
        <div>
          <label className="text-sm font-bold text-primary">
            Reason for reschedule
          </label>
          <textarea
            className="block w-full border border-[#eaecf0] rounded-[6px] mt-[10px]"
            placeholder="enter note"
          ></textarea>
        </div>
 
        <button type="submit" ref={submitButtonRef} className="hidden" />
      </form>
    </Modal>
  );
};

export default FollowupAppointmentModal;
