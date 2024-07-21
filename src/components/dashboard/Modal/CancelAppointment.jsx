import React, { useRef, useState } from "react";
import Modal from ".";
import CalendarIcon from '../../../assets/sidebar/calendar.svg?react'

const CancelAppointmentModal = ({handleClose}) => {
  const submitButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    diagnosisYear: "",
    treatmentYear: "",
    medication: "",
  });
  return (
    <Modal
      modalTitle={"Flag Meeting"}
      submitText={"Submit"}
      onClick={() => submitButtonRef.current.click()}
      onClose={handleClose}
    >
           <div className="mb-[32px] rounded-[6px] flex p-[15px] border-l-[4px] border-[#6b5dd3] bg-[#fafafb]">
          <div className="flex items-center">
            <div className="mr-[16px] bg-primary w-[40px] h-[40px] flex justify-center items-center rounded-[5px]">
             <CalendarIcon fill='white' />
            </div>
            <div>
              <p className="text-[20px] font-bold leading-[26px] text-primary mb-[2px]">
                Ovulation Induction
              </p>
              <p className="text-sm flex gap-x-[10px]"><span className="text-secondary">Doctor's name:</span><span className="text-primary">Justin Septimus</span></p>
              <p className="text-sm flex gap-x-[10px]"><span className="text-secondary">Date & time:</span><span className="text-primary">{new Date().toLocaleString()}</span></p>
            </div>
          </div>
        </div>
      <form className="space-y-6">
        <div>
          <label className="text-sm font-bold text-primary">Reason</label>
          <textarea
            className="block w-full border border-[#eaecf0] rounded-[6px]"
          ></textarea>
        </div>
        <button type="submit" ref={submitButtonRef}  className="hidden"/>
      </form>
    </Modal>
  );
};

export default CancelAppointmentModal;
