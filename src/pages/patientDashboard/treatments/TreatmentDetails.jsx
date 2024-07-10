import React, { useState } from "react";
import BackArrow from "../../../assets/backArrow.svg?react";
import Slider from "../../../components/dashboard/Slider";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Prescriptions from "./Prescriptions";
import AddPrescriptionModal from "../../../components/dashboard/Modal/AddPrescription";
import Button from "../../../components/dashboard/ButtonComponent";
import MoreIcon from '../../../assets/more.svg?react'
import UpdateTreatmentStatusModal from "../../../components/dashboard/Modal/UpdateTreatmentStatus";
import UpdateTreatmentDiagnosisModal from "../../../components/dashboard/Modal/UpdateDiagnosis";
import { useNavigate } from "react-router-dom";

const PatientTreatmentDetails = () => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState({
    status: false,
    diagnosis: false,
    prescription: false,
  })
  const [isOpen, setOpen] = useState(false)
  const medicalHistory = [
    {
      illness: "Hypertension",
      treatmentType: "Medical Treatment",
      year: "2010",
      medication: "Lisinopril",
    },
    {
      illness: "Update treatment plan",
      treatmentType: "Medical Treatment",
      year: "2012",
      medication: "Atovastatin",
    },
    {
      illness: "Diabetes Mellitis Type 2",
      treatmentType: "Surgical Treatment",
      year: "2015",
      medication: "Methformin",
    },
    {
      illness: "Appendectomy",
      treatmentType: "Surgical Treatment",
      year: "2016",
      medication: "",
    },
  ];
  return (
    <>
    {showModal.status && <UpdateTreatmentStatusModal handleClose={() => setShowModal({status: false })} /> }
    {showModal.prescription && <AddPrescriptionModal handleClose={() => setShowModal({prescription: false })} /> }
    {showModal.diagnosis && <UpdateTreatmentDiagnosisModal handleClose={() => setShowModal({prescription: false })} /> }
    <div>
      <DashboardWrapper>
        {isOpen && <div className="fixed top-0 bottom-0 right-0 left-0  z-10" onClick={() => setOpen(false)}>
          <div className="bg-white p-[14px] shadow-[0px_1px_4px_1.5px_rgba(16,24,40,0.1)] rounded-[7px] absolute z-100 top-[215px] right-[40px] flex flex-col gap-y-[16px]">
            <p className="text-base text-secondary cursor-pointer" onClick={() => (
              setOpen(false),
              setShowModal({diagnosis: true})
              )}>Update Diagnosis</p>
            <p className="text-base text-secondary cursor-pointer">Cancel Treatment</p>
          </div>
          </div>}
      <div className="mb-[40px] flex items-center cursor-pointer gap-x-[8px]" onClick={() => navigate(-1)}>
        <div className="w-[36px] h-[36px] border border-[#d0d5dd] flex justify-center items-center rounded-[5px]">
          <BackArrow />
        </div>
        <p className="text-base text-[#323438]">back</p>
      </div>
      <div className="flex flex-col gap-y-[32px]">
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">TreatmentDetails</p>
        </div>
        <div>
            <div className="w-[30%] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-base text-secondary">File Number:</p>{" "}
                <p className="font-medium text-base">ATS-20240809-001</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Doctor Name:</p>{" "}
                <p className="font-medium text-base">Patience Oliver</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Start Date:</p>{" "}
                <p className="font-medium text-base">{new Date().toLocaleDateString()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Diagnosis:</p>{" "}
                <p className="font-medium text-base">Hormonal Imbalance</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">IVF plan:</p>{" "}
                <p className="font-medium text-base">Conventional IVF</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Status:</p>{" "}
                <div className="flex items-center border p-2 rounded-[16px] w-[80px] text-[#5925dc] border-[#d9d6fe] bg-[#f4f3ff]">
        <p className="text-sm font-medium">Ongoing</p>
      </div>
              </div>
          </div>
        </div>
        <hr className="bg-[#eaecf0] h-[1px]" />
        <p className="font-bold text-lg">Consent form</p>
        <div>
 
       
        </div>
        <hr className="bg-[#eaecf0] h-[1px]" />
        <div>
        <Slider
                    labels={[
                        'Prescriptions',
                        'Notes',
                    ]}
                    slidesContent={[<Prescriptions showModal={setShowModal}/>]}

                />
        </div>
      </div>
      </DashboardWrapper>
    </div>
    </>
  );
};

export default PatientTreatmentDetails;
