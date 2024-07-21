import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Button from "../ButtonComponent";
import StaffIcon from "../../../assets/sidebar/tracking.svg?react";

const StaffSchedulesDetailsModal = ({ handleClose }) => {
  const submitButtonRef = useRef(null);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    drugName: "",
    dosage: "",
    instructions: "",
  });
  const [selectedItems, setSelectedItems] = useState([{}]);

  const handleSelection = () => {};

  const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  return (
    <Modal
      modalTitle={"Staff Schedules Details"}
      submitText={"Save changes"}
      onClick={() => submitButtonRef.current.click()}
      onClose={handleClose}
    >
      <div
        className="h-[70px] mb-[32px] rounded-[6px] flex p-[15px] border-l-[4px] border-[#6b5dd3] bg-[#f0effb] justify-between items-center"
      >
        <div className="flex items-center">
          <div className="mr-[16px] bg-primary w-[40px] h-[40px] flex justify-center items-center rounded-[5px]">
            <StaffIcon />
          </div>
          <div>
            <p className="text-[15px] font-medium leading-[20px] text-primary mb-[2px]">
              Kaiya Bator
            </p>
            <p className="text-xs text-secondary">Embryologist</p>
          </div>
        </div>
      </div>

      <form className="space-y-6">
        {
            daysOfWeek.map((day, idx) => {
       return <div className="flex gap-x-[52px] items-center" key={idx}>
          <p className="font-medium text-base text-primary">{day}</p>
          <div>
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
          </div>
          <p className="text-[#6b5dd3] text-sm">Edit</p>
        </div>
           })
        }
        <button type="submit" ref={submitButtonRef} className="hidden" />
      </form>
    </Modal>
  );
};

export default StaffSchedulesDetailsModal;
