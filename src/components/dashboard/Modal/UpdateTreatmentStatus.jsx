import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Dropdown from "../DropDown/DropDown";

const UpdateTreatmentStatusModal = ({handleClose}) => {
    const submitButtonRef = useRef(null);
    const [isError, setIsError] = useState(false)
    const [formData, setFormData] = useState({
        diagnosisYear: '',
        treatmentYear: '',
        medication: ''
    })
  return (
    <Modal modalTitle={"Update Status"} submitText={"Save Status"} onClick={() => submitButtonRef.current.click()} onClose={handleClose}>
        <form className="space-y-6">
        <div>
            <label
              htmlFor="lastName"
              className="block text-primary text-sm font-bold mb-[10px]"
            >
              Patient Name <span className="text-red-600">*</span>
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
          <div>
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Select Status
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
      <button type="submit" ref={submitButtonRef} className="hidden"/>
      </form>
    </Modal>
  );
};

export default UpdateTreatmentStatusModal;
