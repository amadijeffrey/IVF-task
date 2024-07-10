import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";

const CreateTreatmentPlanModal = ({handleClose, handleOpenSecondModal}) => {
    const submitButtonRef = useRef(null);
    const [createdTimeline, setCreatedTimeline] = useState(false)
    const [formData, setFormData] = useState({

    })
    const [isError, setIsError] = useState(false)
  return (
    <Modal modalTitle={"Create Treatment Plan"} submitText={"Create Plan"} onClick={() => submitButtonRef.current.click()} onClose={handleClose}>
        <form className="space-y-6">
      <div>
        <label className="text-sm font-bold text-primary">
          Patient ID/File Number <span className="text-red-600">*</span>
        </label>
        <InputComponent
          placeholder=""
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
        <label className="text-sm font-bold text-primary">
          Name of Treatment Plan <span className="text-red-600">*</span>
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
          {isError && formData.li.trim() === "" ? "required" : ""}
        </p>
      </div>
      <div>
        <label className="text-sm font-bold text-primary">Test requests</label>
        <textarea className="block w-full border border-[#d0d5dd] rounded-[6px]">

        </textarea>
      </div>
      {createdTimeline && <p className="font-bold text-xl text-primary mb-[32px]">Treatment Timeline</p>}
      <p onClick={handleOpenSecondModal} className="text-base text-[#6b5dd3] font-bold cursor-pointer">
        Add Treatment timeline
      </p>
      <button type="submit" ref={submitButtonRef} className="hidden"/>
      </form>
    </Modal>
  );
};

export default CreateTreatmentPlanModal;
