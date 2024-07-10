import React from "react";
import CustomTable from "../../../components/dashboard/Table/CustomTable";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import { useNavigate } from "react-router-dom";
import { getStatusBadge } from "../../../utils/helpers/commonHelpers";
import { patientTreatmentsColumns } from "../../../utils/helpers/columns";


const data = [
  {
    name: "Surrogacy",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    prescriptions: "Ongoing",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Conventional IVF",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IUI",
    prescriptions: "Acetaminophen, Ibuprofen",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Surrogacy",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    prescriptions: "Estradiol",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Surrogacy",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    prescriptions: "Clomiphene, Letrozole",
    date: new Date().toLocaleDateString(),
  },
  {
    name: "Mini IVF",
    file_number: "ATS-20240809-001",
    ongoing_treatment: "IVF",
    prescriptions: "Cancelled",
    date: new Date().toLocaleDateString(),
  },

];

const PatientTreatmentManagement = () => {
    const navigate = useNavigate();
    const handleNavigation = () => navigate('/dashboard/patient/treatments/detail')
    const columns = patientTreatmentsColumns(handleNavigation)
  
    return (
      <div>
        <DashboardWrapper>
          <p className="font-bold text-2xl mb-[44px]">Treatments</p>
          <CustomTable columns={columns} data={data} showPagination={true}/>
        </DashboardWrapper>
      </div>
    );
  };
  export default PatientTreatmentManagement;
