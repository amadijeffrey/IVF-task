import React from "react";
import picture1 from "../../../assets/picture1.png";

const DoctorProfile = () => {
  return (
    <>
      <p className="text-xl font-bold text-primary">Profile</p>
      <div className="py-[32px] px-[24px] border border-[#dde5e8] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex flex-col gap-y-[16px] rounded-[7px]">
        <div className="flex gap-x-[12px]">
          <div className="w-[80px] h-[80px] rounded-full">
            <img src={picture1} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-lg">Haylie Rodser</p>
            <p className="text-sm">ATS-20240701-001</p>
          </div>
        </div>
        <hr className="bg-[#eaecf0] h-[1px]" />
        <div className="flex gap-x-[32px]">
          <div className="w-1/2 flex flex-col gap-y-[16px]">
            <div className="flex justify-between">
              <p className="text-base text-secondary">Phone Number</p>{" "}
              <p className="font-medium text-base">2347066993080</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base text-secondary">Role</p>{" "}
              <p className="font-medium text-base">IVF specialist</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base text-secondary">Clinic/hospital</p>{" "}
              <p className="font-medium text-base">Citadel Clinic</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;
