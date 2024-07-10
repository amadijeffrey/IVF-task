import React from "react";
import CustomTable from "../../../components/dashboard/Table/CustomTable";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import { useNavigate } from "react-router-dom";
import { getStatusBadge } from "../../../utils/helpers/commonHelpers";
import { trackingColumns } from "../../../utils/helpers/columns";


const data = [
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "Estrogen Hormone",
    treatment_status: "Completed",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Ongoing",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Kayor Bator",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IUI",
    treatment_status: "Cancelled",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Completed",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Ongoing",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Cancelled",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Patience Oliver",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    treatment_status: "Completed",
    date: new Date().toLocaleDateString(),
  },
];

const TrackingManagement = () => {
  const navigate = useNavigate();
const handleNavigation = () => navigate('/dashboard/patient/tracking/detail')

  const columns = trackingColumns(handleNavigation)

  return (
    <div>
      <DashboardWrapper>
        <p className="font-bold text-2xl mb-[44px]">Tracking</p>
        <CustomTable columns={columns} data={data} />
      </DashboardWrapper>
    </div>
  );
};
export default TrackingManagement;