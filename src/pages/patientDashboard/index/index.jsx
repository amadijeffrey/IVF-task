import React from "react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Button from "../../../components/dashboard/ButtonComponent";
import Medications from "./Medications";
import Treatments from "./Treatment";
import Results from "./Result";
import ProgressBar from "../../../components/dashboard/ProgressBar";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const PatientDashboardPage = () => {
  return (
    <DashboardWrapper>
      <div>
        <p className="text-2xl font-bold mb-[32px]">Welcome, Oriaku</p>
        <div className="p-[20px] text-white flex justify-between items-center mb-[24px] bg-primary rounded-[5px]">
          <div>
            <p className="text-xl font-medium">Let us help you get started</p>
          </div>
          <div className="flex gap-x-[26px]">
          <div>
             <p className="font-medium text-[15px] mb-[9px]">You are 15% setup</p>
             <ProgressBar />
          </div>
          <Button text={'Go to profile'} className='bg-white text-[#6b5dd3]' />
          </div>
        </div>
        <div className="flex gap-x-[24px]">
          <div className="w-[70%] flex flex-col gap-y-[16px]">
           <Medications />
           <Results />
           <Treatments />
          </div>
          <div className="w-[30%]">
          <div className="p-[20px] w-full flex flex-col gap-y-[16px] border border-[#eaecf0] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <p className="font-bold text-lg">Today's appointment</p>
            <div className="flex flex-col gap-y-[16px] max-h-[80%]">
              <div className="h-[124px] rounded-[6px] flex p-[12px] bg-[#090f47] text-white flex flex-col justify-between">
                <p className="text-[10px]">now</p>
                <div className="flex justify-between">
                  <p className="font-bold text-sm">Ovulation Induction</p>
                  <p className="text-xs">Lana Robinson</p>
                </div>
                <hr className="bg-white h-[1px]" />
                <div>
                  <p className="font-bold text-lg">12pm - 1pm</p>
                  <p className="text-[10px]">{new Date().toDateString()}</p>
                </div>
              </div>
              <div className="h-[64px] rounded-[6px] flex p-[12px] border-l-[4px] border-[#090f47] bg-[#f0effb] justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-[16px] ">
                    <p className="text-xs text-secondary mb-[2px] leading-[18px]">
                      {daysOfWeek[new Date().getDay()]}
                    </p>
                    <p className="text-lg text-primary font-medium">
                      {new Date().getDate()}
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] font-medium leading-[20px] text-primary mb-[2px]">
                      Follow up care
                    </p>
                    <p className="text-xs text-secondary">12pm - 1pm</p>
                  </div>
                </div>
                <p className="text-primary text-xs">Lana Robinson</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default PatientDashboardPage;
