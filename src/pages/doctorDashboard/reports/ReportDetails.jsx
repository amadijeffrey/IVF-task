import React from "react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import BackArrow from "../../../assets/backArrow.svg?react";
import Button from "../../../components/dashboard/ButtonComponent";
import ReportIcon from '../../../assets/report.svg?react'


const ReportDetails = () => {
  return (
    <div>
      <DashboardWrapper>
        <div
          className="mb-[40px] flex items-center cursor-pointer gap-x-[8px]"
          onClick={() => navigate(-1)}
        >
          <div className="w-[36px] h-[36px] border border-[#d0d5dd] flex justify-center items-center rounded-[4px]">
            <BackArrow />
          </div>
          <p className="text-base text-[#323438]">back</p>
        </div>
        <div className="flex flex-col gap-y-[24px]">
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">{`Report - ATS-20240809-001`}</p>
            <Button
              className="bg-primary text-white"
              text="Upload Report"
              onClick={() => setShowModal({ addTreatmentPlan: true })}
            />
          </div>
          <div className="grid grid-cols-3 gap-[16px]">
            <div className="border border-[#eaecf0] rounded-[5px] shadow-[0px_1px_3px_1px_rgba(16,24,40,0.1)] flex flex-col p-[24px] gap-y-[20px] items-center">
              <ReportIcon className="w-[48px] h-[48px]" />
              <p className="font-medium text-base text-primary">
                Specimen Report
              </p>
              <p className="font-normal text-base text-primary">
                {new Date().toLocaleDateString()}
              </p>
              <Button
                className="border border-[#6b5dd3] text-[#6b5dd3] bg-white"
                text="View result"
              />
            </div>
            <div className="border border-[#eaecf0] rounded-[5px] shadow-[0px_1px_3px_1.5px_rgba(16,24,40,0.1)] flex flex-col p-[24px] gap-y-[20px] items-center">
              <ReportIcon className="w-[48px] h-[48px]" />
              <p className="font-medium text-base text-primary">
                Specimen Report
              </p>
              <p className="font-normal text-base text-primary">
                {new Date().toLocaleDateString()}
              </p>
              <Button
                className="border border-[#6b5dd3] text-[#6b5dd3] bg-white"
                text="View result"
              />
            </div>
            <div className="border border-[#eaecf0] rounded-[5px] shadow-[0px_1px_3px_1.5px_rgba(16,24,40,0.1)] flex flex-col p-[24px] gap-y-[20px] items-center">
              <ReportIcon className="w-[48px] h-[48px]" />
              <p className="font-medium text-base text-primary">
                Specimen Report
              </p>
              <p className="font-normal text-base text-primary">
                {new Date().toLocaleDateString()}
              </p>
              <Button
                className="border border-[#6b5dd3] text-[#6b5dd3] bg-white"
                text="View result"
              />
            </div>
            <div className="border border-[#eaecf0] rounded-[5px] shadow-[0px_1px_3px_1.5px_rgba(16,24,40,0.1)] flex flex-col p-[24px] gap-y-[20px] items-center">
              <ReportIcon className="w-[48px] h-[48px]" />
              <p className="font-medium text-base text-primary">
                Specimen Report
              </p>
              <p className="font-normal text-base text-primary">
                {new Date().toLocaleDateString()}
              </p>
              <Button
                className="border border-[#6b5dd3] text-[#6b5dd3] bg-white"
                text="View result"
              />
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default ReportDetails;
