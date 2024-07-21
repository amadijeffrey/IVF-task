import React, { useState } from "react";
import BackArrow from "../../../assets/backArrow.svg?react";
import picture1 from "../../../assets/picture1.png";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Button from "../../../components/dashboard/ButtonComponent";
import TreatmentTimelineModal from "../../../components/dashboard/Modal/TreatmentTimeline";
import CreateTreatmentPlanModal from "../../../components/dashboard/Modal/CreateTreatmentPlan";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../components/dashboard/Table/CustomTable";
import { adminAppointmentTimelineColumns } from "../../../utils/helpers/columns";

const AdminAppointmentDetails = () => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState({
    addTreatmentPlan: false,
    editStaff: false
  })
  const columns = adminAppointmentTimelineColumns(() => setShowModal({editStaff: true}))
  const data = [
    {
      title: "Embryo transfer",
      specialty: "Embryologist",
      date: new Date().toLocaleString(),
      type: "Physical appointment",
    },
    {
        title: "Embryo transfer",
        specialty: "Embryologist",
        date: new Date().toLocaleString(),
        type: "Physical appointment",
      },
      {
        title: "Embryo transfer",
        specialty: "Embryologist",
        date: new Date().toLocaleString(),
        type: "Physical appointment",
      },
      {
        title: "Embryo transfer",
        specialty: "Embryologist",
        date: new Date().toLocaleString(),
        type: "Physical appointment",
      },
      {
        title: "Embryo transfer",
        specialty: "Embryologist",
        date: new Date().toLocaleString(),
        type: "Physical appointment",
      },
      {
        title: "Embryo transfer",
        specialty: "Embryologist",
        date: new Date().toLocaleString(),
        type: "Physical appointment",
      },
  ];

  return (
    <div>
      <DashboardWrapper>
      <div className="mb-[40px] flex items-center cursor-pointer gap-x-[8px]" onClick={() => navigate(-1)}>
        <div className="w-[36px] h-[36px] border border-[#d0d5dd] flex justify-center items-center rounded-[5px]">
          <BackArrow />
        </div>
        <p className="text-base text-[#323438]">back</p>
      </div>
      <div className="flex flex-col gap-y-[32px]">
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">Treatment Plan Details</p>
          <div className="flex items-center gap-x-[20px]">
            <Button className=" bg-primary text-white" text={'Reschedule Appointment'} onClick={() => setShowModal({status: true})} />
          </div>
        </div>
        <div>
            <div className="w-[30%] flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-base text-secondary">Title of Appointment:</p>{" "}
                <p className="font-medium text-base">ATS-20240809-001</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Patient Name:</p>{" "}
                <p className="font-medium text-base">Patience Oliver</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Time:</p>{" "}
                <p className="font-medium text-base">{new Date().toLocaleDateString()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Meeting Type:</p>{" "}
                <p className="font-medium text-base">85kg</p>
              </div>
          </div>
        </div>
        <div className="bg-[#f8f9fa80] border border-[#eaecf0] p-[12px] rounded-[4px]">
          <p className="mb-[8px] text-primary font-bold text-sm">Additional Information</p>
          <p className="text-secondary text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla id tempora nihil officia delectus, laborum eius hic cum optio ab blanditiis eligendi. Voluptate enim repellendus, eveniet inventore ipsum beatae?</p>
        </div>
        <hr className="bg-[#eaecf0] h-[1px]" />
        <p className="font-bold text-lg">Appointment Timeline</p>
       <CustomTable columns={columns} data={data} />
      </div>
      </DashboardWrapper>
    </div>
  );
};

export default AdminAppointmentDetails;
