import React from "react";
import BackArrow from "../../../assets/backArrow.svg?react";
import Button from "../../../components/dashboard/ButtonComponent";

const MedicalTreatmentHistory = ({handleSelect}) => {
  return (
    <div>
      <div className="mb-[40px] flex items-center cursor-pointer gap-x-[8px]" onClick={() => handleSelect({surgicalHistory: false, medicalHistory: false})}>
        <div className="w-[36px] h-[36px] border border-[#eaecf0] flex justify-center items-center rounded-[5px]">
          <BackArrow />
        </div>
        <p className="text-base text-[#323438]">back</p>
      </div>
      <div className="flex flex-col gap-y-[32px]">
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">Medical History</p>
          <div className="flex items-center gap-x-[20px]">
            <Button className=" bg-primary text-white" text={"Add Treatment"} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[24px]">
          <div className="py-[22px] px-[16px] border border-[#eaecf0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-[7px]">
            <p className="mb-[20px] font-medium">Hypertension</p>
            <div className="rounded-[7px] p-[11px] bg-[#f4f9fb] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Year of Diagnosis</p>
                <p className="font-medium text-sm text-primary">2010</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Medication</p>
                <p className="font-medium text-sm text-primary">Lisonopril</p>
              </div>
            </div>
          </div>
          <div className="py-[22px] px-[16px] border border-[#eaecf0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-[7px]">
            <p className="mb-[20px] font-medium">Hypertension</p>
            <div className="rounded-[7px] p-[11px] bg-[#f4f9fb] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Year of Diagnosis</p>
                <p className="font-medium text-sm text-primary">2010</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Medication</p>
                <p className="font-medium text-sm text-primary">Lisonopril</p>
              </div>
            </div>
          </div>
          <div className="py-[22px] px-[16px] border border-[#eaecf0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-[7px]">
            <p className="mb-[20px] font-medium">Hypertension</p>
            <div className="rounded-[7px] p-[11px] bg-[#f4f9fb] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Year of Diagnosis</p>
                <p className="font-medium text-sm text-primary">2010</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Medication</p>
                <p className="font-medium text-sm text-primary">Lisonopril</p>
              </div>
            </div>
          </div>
          <div className="py-[22px] px-[16px] border border-[#eaecf0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-[7px]">
            <p className="mb-[20px] font-medium">Hypertension</p>
            <div className="rounded-[7px] p-[11px] bg-[#f4f9fb] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Year of Diagnosis</p>
                <p className="font-medium text-sm text-primary">2010</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Medication</p>
                <p className="font-medium text-sm text-primary">Lisonopril</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalTreatmentHistory;
