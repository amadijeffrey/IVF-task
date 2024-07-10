import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Dropdown from "../DropDown/DropDown";

const TreatmentTimelineModal = ({handleClose}) => {
    const submitButtonRef = useRef(null);
    const [formData, setFormData] = useState({

    })
    const [isError, setIsError] = useState(false)
  return (
    <Modal modalTitle={"Treatment Timeline"} submitText={"Create Timeline"} onClick={() => submitButtonRef.current.click()} onClose={handleClose} >
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
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Select staff speciality
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
      <button type="submit" ref={submitButtonRef} className="hidden" />
      </form>
    </Modal>
  );
};

export default TreatmentTimelineModal;
