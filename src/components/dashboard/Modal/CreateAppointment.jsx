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
      submitText={"Book Appointment"}
      onClick={() => submitButtonRef.current.click()}
      onClose={handleClose}
    >
      <form className="space-y-6">
        <div>
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Meeting Type
          </label>
          <Dropdown
            options={["Physical", "Virtual"]}
            value={formData.gender}
            onChange={(item) =>
              isError
                ? setIsError(false)
                : setFormData({ ...formData, gender: item })
            }
          />
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
