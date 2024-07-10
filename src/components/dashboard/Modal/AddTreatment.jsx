import React, { useRef } from "react";
import Modal from ".";
import InputComponent from "../Input";

const AddTreatmentModal = ({ type, handleClose}) => {
  const submitButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    diagnosisYear: "",
    treatmentYear: "",
    medication: "",
  });
  return (
    <Modal
      modalTitle={"Add Treatment"}
      submitText={"Add treatment"}
      onClick={() => submitButtonRef.current.click()}
      onClose={handleClose}
    >
      <form className="space-y-6">
        {type === "medication" && (
          <div>
            <label className="text-sm font-bold text-primary mb-[10px]">
              Year of Diagnosis
            </label>
            <InputComponent
              placeholder=""
              className="bg-white w-full"
              showLeftIcon={false}
              type="date"
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
        )}
        {type === "treatment" && (
          <div>
            <label className="text-sm font-bold text-primary mb-[10px]">
              Year of Treatment <span className="text-red-600">*</span>
            </label>
            <InputComponent
              placeholder="Enter name of treatment plan"
              className="bg-white w-full"
              showLeftIcon={false}
              type="date"
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
        )}
        {type === "medication" && (
          <div>
            <label className="text-sm font-bold text-primary">Medication</label>
            <textarea className="block w-full border border-[#eaecf0] rounded-[6px]"></textarea>
          </div>
        )}
        <button type="submit" ref={submitButtonRef} />
      </form>
    </Modal>
  );
};

export default AddTreatmentModal;
