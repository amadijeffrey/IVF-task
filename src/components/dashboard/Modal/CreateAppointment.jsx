import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Dropdown from "../DropDown/DropDown";

const CreateAppointmentModal = ({handleClose}) => {
  const submitButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });
  const [isError, setIsError] = useState(false);
  return (
    <Modal
      modalTitle={"Book Appointment"}
      submitText={"Create Plan"}
      onClick={() => submitButtonRef.current.click()}
      onClose={handleClose}
    >
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-primary text-sm font-bold mb-[10px]"
            >
              First Name <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter first name"
              className="bg-white w-full"
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
              className="block text-primary text-sm font-bold mb-[10px]"
            >
              Last Name <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter last name"
              className="bg-white w-full"
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
              className="block text-primary text-sm font-bold mb-[10px]"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter email"
              className="bg-white w-full"
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
              className="block text-primary text-sm font-bold mb-[10px]"
            >
              Phone Number <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter phone number"
              className="bg-white w-full"
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
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Meeting Type
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
        </div>
        <div>
          <label className="text-sm font-bold text-primary mb-[10px]">
            Additional Information
          </label>
          <textarea
            className="block w-full border border-[#eaecf0] rounded-[6px]"
            placeholder="enter note"
          ></textarea>
        </div>
        <div>
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Time Zone
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
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-primary text-sm font-bold mb-[10px]"
            >
              Select Date
            </label>
            <InputComponent
              placeholder="Enter email"
              className="bg-white w-full"
              showLeftIcon={false}
              type="date"
              id="date"
              name="date"
              value={formData.dob}
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
              htmlFor="email"
              className="block text-primary text-sm font-bold mb-[10px]"
            >
              Select Time
            </label>
            <InputComponent
              placeholder="Enter email"
              className="bg-white w-full"
              showLeftIcon={false}
              type="time"
              id="date"
              name="date"
              value={formData.dob}
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
        </div>
        <button type="submit" ref={submitButtonRef} className="hidden" />
      </form>
    </Modal>
  );
};

export default CreateAppointmentModal;
