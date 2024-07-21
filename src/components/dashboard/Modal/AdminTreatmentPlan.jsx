import React, { useRef, useState } from "react";
import Modal from ".";
import DropDownWithSearch from "../DropDown/DropDownWithSearch";
import InputComponent from "../Input";

const AdminTreatmentPlanModal = ({handleClose}) => {
    const submitButtonRef = useRef(null);
    const [createdTimeline, setCreatedTimeline] = useState(false)
    const [formData, setFormData] = useState({

    })
    const [isError, setIsError] = useState(false)
  return (
    <Modal modalTitle={"Add New Treatment Plan"} submitText={"Create Plan"} onClick={() => submitButtonRef.current.click()} onClose={handleClose}>
        <form className="space-y-6">
      <div>
        <label className="text-sm font-bold text-primary">
          Name of Treatment <span className="text-red-600">*</span>
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
          <label className="text-sm font-bold text-primary">
           Description
          </label>
          <textarea
            className="block w-full border border-[#eaecf0] rounded-[6px] mt-[10px]"
            placeholder="enter note"
          ></textarea>
        </div>
        {/* <div>
            <label className="text-sm font-semibold text-[#1e1e1e]">
              Select services
            </label>
            <DropDownWithSearch
            //   isFetching={}
              className="mt-[6px]"
              values={formData.employeesData}
            //   objectOptions={employeesData?.data}
              onChange={(selectedItems) =>
                setFormData({ ...formData, employeesData: selectedItems })
              }
              keySelector={"fullName"}
            />
             <p className="text-red-600 text-sm mt-1">{isError && formData.employeesData.length < 1
                  ? "required"
                  : ""}
              </p>
          </div> */}
          <div>
        <label className="text-sm font-bold text-primary">
         Amount
        </label>
        <InputComponent
          placeholder="Enter amount"
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
      <button type="submit" ref={submitButtonRef} className="hidden"/>
      </form>
    </Modal>
  );
};

export default AdminTreatmentPlanModal;
