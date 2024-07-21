import React, { useRef, useState } from "react";
import Modal from ".";
import InputComponent from "../Input";
import Button from "../ButtonComponent";
import DrugIcon from '../../../assets/drugs.svg?react'

const AddStaffScheduleModal = ({handleClose}) => {
    const submitButtonRef = useRef(null);
    const [isError, setIsError] = useState(false)
    const [formData, setFormData] = useState({
      drugName: '',
      dosage: '',
      instructions: ''
    })
    const [selectedItems, setSelectedItems] = useState([{}])

    const handleSelection = () => {

    }

    const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

  return (
    <Modal modalTitle={"Add Staff Schedules"} submitText={"Save"} onClick={() => submitButtonRef.current.click()} onClose={handleClose}>
        <form className="space-y-6">
        <div>
          <label className="block text-primary text-sm font-bold mb-[10px]">
            Select Staff
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
            Speciality
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
            <div className="flex gap-x-52">
                <p className="font-medium text-base text-primary">sun</p>
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
     <p className="text-[#6b5dd3] text-sm">Edit</p>
     </div>
      <button type="submit" ref={submitButtonRef}  className="hidden"/>
      </form>
    </Modal>
  );
};

export default AddStaffScheduleModal;
