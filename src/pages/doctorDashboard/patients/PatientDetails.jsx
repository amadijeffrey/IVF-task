import React, { useState } from "react";
import BackArrow from "../../../assets/backArrow.svg?react";
import picture1 from "../../../assets/picture1.png";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Button from "../../../components/dashboard/ButtonComponent";
import TreatmentTimelineModal from "../../../components/dashboard/Modal/TreatmentTimeline";
import CreateTreatmentPlanModal from "../../../components/dashboard/Modal/CreateTreatmentPlan";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../components/dashboard/Table/CustomTable";
import { patientAppointmentsColumns, patientMedicalHistoryColumns } from "../../../utils/helpers/columns";

const PatientDetails = () => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState({
    addTreatmentPlan: false,
    treatmentTimeline: false
  })
  const medicalHistoryColumns = patientMedicalHistoryColumns()
  const appointmentsColumns = patientAppointmentsColumns()
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

  const appointmentHistory = [
    {
      illness: "Hypertension",
      type: "Initial co",
      year: "2010",
      medication: "Lisinopril",
    },
    {
      illness: "Update treatment plan",
      type: "Medical Treatment",
      year: "2012",
      medication: "Atovastatin",
    },
    {
      illness: "Diabetes Mellitis Type 2",
      type: "Surgical Treatment",
      year: "2015",
      medication: "Methformin",
    },
    {
      illness: "Appendectomy",
      type: "Surgical Treatment",
      year: "2016",
      medication: "",
    },
  ];
  return (
    <div>
      {showModal.addTreatmentPlan && <CreateTreatmentPlanModal handleClose={() => setShowModal({addTreatmentPlan: false })} handleOpenSecondModal={() => (
          setShowModal({ addTreatmentPlan: false }),
          setShowModal({ treatmentTimeline: true })
      )}/>}
      {showModal.treatmentTimeline && <TreatmentTimelineModal handleClose={() => setShowModal({treatmentTimeline: false })}/>}
    <DashboardWrapper>
      <div className="mb-[40px] flex items-center cursor-pointer gap-x-[8px]" onClick={() => navigate(-1)}>
        <div className="w-[36px] h-[36px] border border-[#d0d5dd] flex justify-center items-center rounded-[4px]">
          <BackArrow />
        </div>
        <p className="text-base text-[#323438]">back</p>
      </div>
      <div className="flex flex-col gap-y-[24px]">
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">Patient Details</p>
          <Button className="bg-primary text-white" text='Add Treatment Plan' onClick={() => setShowModal({addTreatmentPlan: true})}/>
        </div>
        <div className="py-[32px] px-[24px] border border-[#d0d5dd] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex flex-col gap-y-[16px] rounded-[7px]">
          <div className="grid grid-cols-4">
            <div className="flex flex-col gap-y-[12px]">
              <p className="text-secondary text-sm">Patient's Name</p>
              <p className="font-medium text-lg">Haylie Rodser</p>
            </div>
            <div className="flex flex-col gap-y-[12px]">
              <p className="text-secondary text-sm">Treatment Status</p>
              <div className="flex items-center border justify-center py-1 rounded-[16px] w-[80px] text-[#026aa2] border-[#b9e6fe] bg-[#f0f9ff]">
                    <p className="text-sm font-medium">{"Ongoing"}</p>
                  </div>
            </div>
            <div className="flex flex-col gap-y-[12px]">
            <p className="text-secondary text-sm">Treatment Plan</p>
            <p className="font-medium text-sm">Estrogen Hormone Therapy</p>
            </div>
            <div className="flex flex-col gap-y-[12px]">
            <p className="text-secondary text-sm">Start Date</p>
            <p className="font-medium text-sm">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <hr className="bg-[#d0d5dd] h-[1px]" />
          <div className="flex gap-x-[32px]">
            <div className="w-1/2 flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-base text-secondary">Genotype</p>{" "}
                <p className="font-bold text-base">AA</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Blood group</p>{" "}
                <p className="font-bold text-base">O+</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Rhesus Factor</p>{" "}
                <p className="font-bold text-base">RH+</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Weight</p>{" "}
                <p className="font-bold text-base">85kg</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-base text-secondary">Height</p>{" "}
                <p className="font-bold text-base">176cm</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Viral Status(HIV)</p>{" "}
                <p className="font-bold text-base">Negative</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Hepatitis Status</p>{" "}
                <p className="font-bold text-base">AA</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-bold text-lg">Medical History</p>
        <div>
      <CustomTable columns={medicalHistoryColumns} data={medicalHistory} />
        </div>
        <div className="flex justify-between items-center">
        <p className="text-lg font-bold">Appointments</p>
        <Button text={'Schedule Follow-up'} className='text-[#6b5dd3] bg-white' border={true}/>
        </div>
        <CustomTable columns={appointmentsColumns} data={appointmentHistory} />
      </div>
    </DashboardWrapper>
    </div>
  );
};

export default PatientDetails;
