import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Dropdown from "../DropDown/DropDown";

const AddStafffModal = ({handleClose}) => {
    const submitButtonRef = useRef(null);
    const [isError, setIsError] = useState(false)
    const [formData, setFormData] = useState({
        diagnosisYear: '',
        treatmentYear: '',
        medication: ''
    })
  return (
    <Modal modalTitle={"Add Staff"} submitText={"Submit"} onClick={() => submitButtonRef.current.click()} onClose={handleClose}>
        <form className="space-y-6">
          <div>
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Title
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
         Staff Name<span className="text-red-600">*</span>
        </label>
        <InputComponent
          placeholder=""
          className="bg-white w-full"
          showLeftIcon={false}
          type="number"
          id="priceLimit"
          name="priceLimit"
          value={formData.drugName}
          handleChange={(e) =>
            isError
              ? setIsError(false)
              : setFormData({ ...formData, drugName: e.target.value })
          }
        />
        <p className="text-red-600 text-sm mt-1">
          {isError && formData.limit.trim() === "" ? "required" : ""}
        </p>
      </div>
        <div>
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Specialty
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
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Gender
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
         Phone Number<span className="text-red-600">*</span>
        </label>
        <InputComponent
          placeholder=""
          className="bg-white w-full"
          showLeftIcon={false}
          type="number"
          id="priceLimit"
          name="priceLimit"
          value={formData.drugName}
          handleChange={(e) =>
            isError
              ? setIsError(false)
              : setFormData({ ...formData, drugName: e.target.value })
          }
        />
        <p className="text-red-600 text-sm mt-1">
          {isError && formData.limit.trim() === "" ? "required" : ""}
        </p>
      </div>
      <div>
        <label className="text-sm font-bold text-primary mb-[10px]">
         Email Addresss<span className="text-red-600">*</span>
        </label>
        <InputComponent
          placeholder=""
          className="bg-white w-full"
          showLeftIcon={false}
          type="number"
          id="priceLimit"
          name="priceLimit"
          value={formData.drugName}
          handleChange={(e) =>
            isError
              ? setIsError(false)
              : setFormData({ ...formData, drugName: e.target.value })
          }
        />
        <p className="text-red-600 text-sm mt-1">
          {isError && formData.limit.trim() === "" ? "required" : ""}
        </p>
      </div>
      <button type="submit" ref={submitButtonRef} className="hidden"/>
      </form>
    </Modal>
  );
};

export default AddStafffModal;
