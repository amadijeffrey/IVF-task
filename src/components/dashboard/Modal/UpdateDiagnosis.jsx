import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";

const UpdateTreatmentDiagnosisModal = ({handleClose}) => {
    const submitButtonRef = useRef(null);
    const [formData, setFormData] = useState({

    })
    const [isError, setIsError] = useState(false)
  return (
    <Modal modalTitle={"Update Diagnosis"} submitText={"Update Diagnosis"} onClick={() => submitButtonRef.current.click()} onClose={handleClose}>
        <form className="space-y-6">
      <div>
        <label className="text-sm font-bold text-primary">
          Patient Name
        </label>
        <InputComponent
           readOnly={true}
          placeholder=""
          className="bg-[#f8f9fa] w-full mt-[6px]"
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
          Diagnosis 
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
          {isError && formData.limit.trim() === "" ? "required" : ""}
        </p>
      </div>
      <div>
        <label className="text-sm font-bold text-primary">Note (optional)</label>
      </div>
      <button type="submit" ref={submitButtonRef} className="hidden" />
      </form>
    </Modal>
  );
};

export default UpdateTreatmentDiagnosisModal;
