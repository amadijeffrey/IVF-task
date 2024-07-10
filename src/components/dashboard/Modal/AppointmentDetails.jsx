import React from "react";
import Modal from ".";
import FlagIcon from '../../../assets/flag.svg?react'
import CalendarIcon from '../../../assets/sidebar/calendar.svg?react'
import Button from "../ButtonComponent";

const AppointmentDetailsModal = ({handleClose, handleOpenSecondModal, handleOpenThirdModal}) => {
  return (
    <Modal
      modalTitle={"Appointment details"}
      submitText={"Reschedule Appointment"}
      onClick={handleOpenThirdModal}
      onClose={handleClose}
    >
      <div className="flex flex-col gap-y-[24px]">
        <p className="text-2xl font-bold text-primary">Ovulation Induction</p>
        <div>
          <div className="w-[50%] flex flex-col gap-y-[16px]">
            <div className="flex justify-between">
              <p className="text-base text-secondary">Date:</p>{" "}
              <p className="font-medium text-base">{new Date().toDateString()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base text-secondary">Time:</p>{" "}
              <p className="font-medium text-base">{new Date().toLocaleTimeString()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base text-secondary">Doctor's Name:</p>{" "}
              <p className="font-medium text-base">Justin Septimus</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base text-secondary">Meeting Type:</p>{" "}
              <p className="font-medium text-base"></p>
            </div>
          </div>
        </div>
        <div className="text-[#f42727] flex gap-x-[15px] font-medium text-base cursor-pointer" onClick={handleOpenSecondModal}>
          <FlagIcon />
          <p>Flag as not held</p>
        </div>
        <div className="h-[70px] mb-[32px] rounded-[6px] flex p-[15px] border-l-[4px] border-[#6b5dd3] bg-[#f0effb] justify-between items-center">
          <div className="flex items-center">
            <div className="mr-[16px] bg-primary w-[40px] h-[40px] flex justify-center items-center rounded-[5px]">
             <CalendarIcon fill='white' />
            </div>
            <div>
              <p className="text-[15px] font-medium leading-[20px] text-primary mb-[2px]">
                Ovulation Induction
              </p>
              <p className="text-xs text-secondary flex gap-x-[10px]"><span>{new Date().toLocaleTimeString()}</span><span className="text-[#98a2b3]">|</span> <span>{new Date().toDateString()}</span></p>
            </div>
          </div>
          <Button text='Join' className='bg-primary text-white' />
        </div>
        <div className="bg-[#f8f9fa80] border border-[#eaecf0] p-[12px] rouned-[4px]">
          <p className="mb-[8px] text-primary font-bold text-sm">Additional Information</p>
          <p className="text-secondary text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla id tempora nihil officia delectus, laborum eius hic cum optio ab blanditiis eligendi. Voluptate enim repellendus, eveniet inventore ipsum beatae?</p>
        </div>
      </div>
    </Modal>
  );
};

export default AppointmentDetailsModal;
