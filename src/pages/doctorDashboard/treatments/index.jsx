import React, { useState } from "react";
import CustomTable from "../../../components/dashboard/Table/CustomTable";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import { useNavigate } from "react-router-dom";
import { getStatusBadge } from "../../../utils/helpers/commonHelpers";
import { doctorTreatmentsColumns } from "../../../utils/helpers/columns";
import Button from "../../../components/dashboard/ButtonComponent";
import CreateTreatmentPlanModal from "../../../components/dashboard/Modal/CreateTreatmentPlan";


const data = [
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "Estrogen Hormone",
    treatment_status: "Completed",
    date: new Date().toLocaleDateString(),
    id: 1
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Ongoing",
    date: new Date().toLocaleDateString(),
    id:2
  },
  {
    name: "Kayor Bator",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IUI",
    treatment_status: "Cancelled",
    date: new Date().toLocaleDateString(),
    id:3
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Completed",
    date: new Date().toLocaleDateString(),
    id:4
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Ongoing",
    date: new Date().toLocaleDateString(),
    id:5
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Cancelled",
    date: new Date().toLocaleDateString(),
    id:6
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Completed",
    date: new Date().toLocaleDateString(),
    id:7
  },
];

const TreatmentManagement = () => {
  const navigate = useNavigate();
  const handleNavigation = (id) => navigate(`/dashboard/doctor/treatments/${id}/detail`)
  const columns = doctorTreatmentsColumns(handleNavigation)
  const [showmodal, setShowModal] = useState({
  addTreatmentPlan : false
  })

  return (
    <div>
      {showmodal.addTreatmentPlan && <CreateTreatmentPlanModal handleClose={() => setShowModal({addTreatmentPlan: false})}/>}
      <DashboardWrapper>
        <div className="flex justify-between items-center mb-[44px]">
        <p className="font-bold text-2xl ]">Treatment Plans</p>
        <Button className="bg-primary text-white" text='Create Treatment Plan' onClick={() => setShowModal({addTreatmentPlan: true})}/>
        </div>
        
        <CustomTable columns={columns} data={data}  showPagination={true}/>
      </DashboardWrapper>
    </div>
  );
};
export default TreatmentManagement;
