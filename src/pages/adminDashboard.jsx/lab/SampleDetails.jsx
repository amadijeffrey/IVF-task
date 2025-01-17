import React, { useState } from "react";
import BackArrow from "../../../assets/backArrow.svg?react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import AddPrescriptionModal from "../../../components/dashboard/Modal/AddPrescription";
import UpdateTreatmentStatusModal from "../../../components/dashboard/Modal/UpdateTreatmentStatus";
import UpdateTreatmentDiagnosisModal from "../../../components/dashboard/Modal/UpdateDiagnosis";
import { useNavigate } from "react-router-dom";

const SampleDetails = () => {
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
        <div className="flex justify-start items-center">
          <p className="font-bold text-2xl">Sample Details</p>
        </div>
        <div>
            <div className="w-[30%] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-base text-secondary">File Number:</p>{" "}
                <p className="font-medium text-base">ATS-20240809-001</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Patient Name:</p>{" "}
                <p className="font-medium text-base">Patience Oliver</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Start Date:</p>{" "}
                <p className="font-medium text-base">{new Date().toLocaleDateString()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Test Type</p>{" "}
                <p className="font-medium text-base">Hormone Levels</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Status:</p>{" "}
                <div className="flex items-center border p-2 rounded-[16px] text-[#067647] border-[#abefc6] bg-[#ecfdf3]">
          <p className="text-sm font-medium">Completed</p>
        </div>
              </div>
          </div>
        </div>
        <hr className="bg-[#eaecf0] h-[1px]" />
        <p className="font-bold text-lg">Results</p>
        <div>
 
       
        </div>
      </div>
      </DashboardWrapper>
    </div>
    </>
  );
};

export default SampleDetails;
