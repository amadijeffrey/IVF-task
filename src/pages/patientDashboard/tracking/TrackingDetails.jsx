import React, { useState } from "react";
import BackArrow from "../../../assets/backArrow.svg?react";
import picture1 from "../../../assets/picture1.png";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import AddPrescriptionModal from "../../../components/dashboard/Modal/AddPrescription";
import Button from "../../../components/dashboard/ButtonComponent";
import MoreIcon from '../../../assets/more.svg?react'
import UpdateTreatmentStatusModal from "../../../components/dashboard/Modal/UpdateTreatmentStatus";
import UpdateTreatmentDiagnosisModal from "../../../components/dashboard/Modal/UpdateDiagnosis";
import SpecimenStatus from "./SpecimenStatus";
import Tracking from "./Tracking";
import Slider from "../../../components/dashboard/Slider";
import { useNavigate } from "react-router-dom";

const TrackingDetails = () => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState({
    status: false,
    diagnosis: false,
    prescription: false,
  })
  const [isOpen, setOpen] = useState(false)

  return (
    <>
    {showModal.status && <UpdateTreatmentStatusModal handleClose={() => setShowModal({status: false })} /> }
    {showModal.prescription && <AddPrescriptionModal handleClose={() => setShowModal({prescription: false })} /> }
    {showModal.diagnosis && <UpdateTreatmentDiagnosisModal handleClose={() => setShowModal({prescription: false })} /> }
    <div>
      <DashboardWrapper>
      <div className="mb-[40px] flex items-center cursor-pointer gap-x-[8px]" onClick={() => navigate(-1)}>
        <div className="w-[36px] h-[36px] border border-[#d0d5dd] flex justify-center items-center rounded-[5px]">
          <BackArrow />
        </div>
        <p className="text-base text-[#323438]">back</p>
      </div>
      <div className="flex flex-col gap-y-[32px]">
        <div>
          <p className="font-bold text-2xl">ATS-20240809-001</p>
        </div>
        <div>
            <div className="w-[30%] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-base text-secondary">Specimen Number(Egg):</p>{" "}
                <p className="font-medium text-base">EG-20240809-001</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Specimen Number(Sperm):</p>{" "}
                <p className="font-medium text-base">SP-20240809-001</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Start Date:</p>{" "}
                <p className="font-medium text-base">{new Date().toLocaleDateString()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">IVF plan:</p>{" "}
                <p className="font-medium text-base">{'Donor IVF'}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Status:</p>{" "}
                <div className="flex items-center border p-2 rounded-[16px] w-[150px] text-[#026aa2] border-[#b9e6fe] bg-[#f0f9ff]">
                    <p className="text-sm font-medium">{"Ready for transfer"}</p>
                  </div>
              </div>
          </div>
        </div>
        <hr className="bg-[#d0d5dd] h-[1px]" />
        <div className="grid grid-cols-2 gap-[24px]">
          <div className="py-[22px] px-[16px] border border-[#eaecf0] shadow-[0px_1px_3px_1px_rgba(16,24,40,0.1)] rounded-[7px]">
            <div className="flex justify-between items-center mb-[20px]">
            <p className="font-bold text-lg text-primary">Eggs</p>
            <p className="font-bold text-base text-[#6b5dd3]">view result</p>
            </div>
           
            <div className="rounded-[7px] p-[11px] bg-[#f0effb] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Number of eggs</p>
                <p className="font-medium text-sm text-primary">2010</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Specimen ID</p>
                <p className="font-medium text-sm text-primary">EG-20240809-001</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Observation</p>
                <p className="font-medium text-sm text-primary">Healthy eggs</p>
              </div>
            </div>
          </div>
          <div className="py-[22px] px-[16px] border border-[#eaecf0] shadow-[0px_1px_3px_1px_rgba(16,24,40,0.1)] rounded-[7px]">
            <div className="flex justify-between items-center mb-[20px]">
            <p className="font-bold text-lg text-primary">Sperm</p>
            <p className="font-bold text-base text-[#6b5dd3]">view result</p>
            </div>
           
            <div className="rounded-[7px] p-[11px] bg-[#f0effb] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Name of donor</p>
                <p className="font-medium text-sm text-primary">Peter Oliver</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Specimen ID</p>
                <p className="font-medium text-sm text-primary">SP-20240809-001</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-secondary">Observation</p>
                <p className="font-medium text-sm text-primary">Active</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-[#d0d5dd] h-[1px]" />
        <Slider
                    labels={[
                        'Tracking',
                        'Specimen status',
                    ]}
                    slidesContent={[<Tracking />, <SpecimenStatus/>]}

                />
      </div>
      </DashboardWrapper>
    </div>
    </>
  );
};

export default TrackingDetails;
