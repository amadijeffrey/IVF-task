import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Dropdown from "../DropDown/DropDown";

const EditStaffModal = ({handleClose}) => {
    const submitButtonRef = useRef(null);
    const [isError, setIsError] = useState(false)
    const [formData, setFormData] = useState({
        diagnosisYear: '',
        treatmentYear: '',
        medication: ''
    })
  return (
    <Modal modalTitle={"Change Staff"} submitText={"Submit"} onClick={() => submitButtonRef.current.click()} onClose={handleClose}>
        <form className="space-y-6">
          <div>
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Select Staff Name
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

export default EditStaffModal;
