import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Button from "../ButtonComponent";


const AddServicesModal = ({ handleClose }) => {
  const submitButtonRef = useRef(null);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    drugName: "",
    dosage: "",
    instructions: "",
  });

  return (
    <Modal
    modalTitle={"Add Service"}
    submitText={"Save"}
    onClick={() => submitButtonRef.current.click()}
    onClose={handleClose}
  >
    <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-primary text-sm font-bold mb-[10px]"
          >
            Name of Services
          </label>
          <InputComponent
            placeholder="Enter service name"
            className="bg-white w-full"
            showLeftIcon={false}
            type="text"
            id="service"
            name="service"
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
            Amount
          </label>
          <InputComponent
            placeholder="Enter email"
            className="bg-white w-full"
            showLeftIcon={false}
            type="number"
            id="amount"
            name="amount"
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

export default AddServicesModal;
