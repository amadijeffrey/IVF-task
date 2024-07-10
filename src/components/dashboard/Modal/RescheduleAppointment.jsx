import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Dropdown from "../DropDown/DropDown";
import Report from '../../../assets/appointmentReport.svg?react'

const RescheduleAppointmentModal = () => {
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
    >
      <form className="space-y-6">
      <div className="h-[80px] mb-[32px] rounded-[6px] flex p-[15px] border-l-[4px] border-[#6b5dd3] bg-[#f0effb] justify-start items-center" key={idx}>
          <div className="flex items-center">
            <div className="mr-[16px] bg-primary w-[40px] h-[40px] flex justify-center items-center rounded-[5px]">
             <Report />
            </div>
            <div>
              <p className="text-[15px] font-medium leading-[20px] text-primary mb-[2px]">
                Acetaminophen
              </p>
              <p className="text-xs text-secondary">3 times daily</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-primary text-sm font-bold"
            >
              First Name <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter first name"
              className="bg-white w-full border focus:border-afColor border-[#dde5e8] mt-[6px]"
              showLeftIcon={false}
              type="text"
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
              Last Name <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter last name"
              className="bg-white w-full border focus:border-afColor border-[#dde5e8] mt-[6px]"
              showLeftIcon={false}
              type="text"
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-primary text-sm font-bold"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter email"
              className="bg-white w-full border focus:border-afColor border-[#dde5e8] mt-[6px]"
              showLeftIcon={false}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              handleChange={(e) =>
                isError
                  ? setIsError(false)
                  : setFormData({ ...formData, email: e.target.value })
              }
            />
            <p className="text-red-600 text-sm mt-1">
              {isError && !validateEmail(formData.email.trim())
                ? "enter a valid email"
                : ""}
            </p>
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-primary text-sm font-bold"
            >
              Phone Number <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter phone number"
              className="bg-white w-full border focus:border-afColor border-[#dde5e8] mt-[6px]"
              showLeftIcon={false}
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phone_number}
              handleChange={(e) =>
                isError
                  ? setIsError(false)
                  : setFormData({ ...formData, phone_number: e.target.value })
              }
            />
            <p className="text-red-600 text-sm mt-1">
              {isError && formData.phone_number.trim() === "" ? "required" : ""}
            </p>
          </div>
        </div>
        <div>
          <label className="text-sm font-semibold text-[#1e1e1e]">
            Type of Consultation <span className="text-red-600">*</span>
          </label>
          <Dropdown
            options={["Male", "Female"]}
            value={formData.gender}
            onChange={(item) =>
              isError
                ? setIsError(false)
                : setFormData({ ...formData, gender: item })
            }
          />
          <p className="text-red-600 text-sm mt-1">
            {isError && formData.gender.trim() === "" ? "required" : ""}
          </p>
        </div>
        <div>
        <label className="text-sm font-bold text-primary">Additional Information</label>
        <textarea className="block w-full border border-[#eaecf0] rounded-[6px]" placeholder="enter note">

        </textarea>
      </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-primary text-sm font-bold"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter email"
              className="bg-white w-full border focus:border-afColor border-[#dde5e8] mt-[6px]"
              showLeftIcon={false}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              handleChange={(e) =>
                isError
                  ? setIsError(false)
                  : setFormData({ ...formData, email: e.target.value })
              }
            />
            <p className="text-red-600 text-sm mt-1">
              {isError && !validateEmail(formData.email.trim())
                ? "enter a valid email"
                : ""}
            </p>
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-primary text-sm font-bold"
            >
              Phone Number <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter phone number"
              className="bg-white w-full border focus:border-afColor border-[#dde5e8] mt-[6px]"
              showLeftIcon={false}
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phone_number}
              handleChange={(e) =>
                isError
                  ? setIsError(false)
                  : setFormData({ ...formData, phone_number: e.target.value })
              }
            />
            <p className="text-red-600 text-sm mt-1">
              {isError && formData.phone_number.trim() === "" ? "required" : ""}
            </p>
          </div>
        </div>
        <button type="submit" ref={submitButtonRef} className="hidden" />
      </form>
    </Modal>
  );
};

export default RescheduleAppointmentModal;
