import React, { useState } from "react";
import CustomTable from "../../../components/dashboard/Table/CustomTable";
import {
  adminAppointmentsColumns,
  adminStaffSchedulesColumns,
} from "../../../utils/helpers/columns";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Dropdown from "../../../components/dashboard/DropDown/DropDown";
import AddStaffScheduleModal from "../../../components/dashboard/Modal/AddStaffSchedule";
import StaffSchedulesModal from "../../../components/dashboard/Modal/StaffSchedulesDetails";
import StaffSchedulesDetailsModal from "../../../components/dashboard/Modal/StaffSchedulesDetails";
import Button from "../../../components/dashboard/ButtonComponent";

const data = [
  {
    patientName: "Patience Oliver",
    staffName: "Kayor Bator",
    specialty: "embryologist",
    date: new Date().toLocaleDateString(),
  },
  {
    patientName: "Patience Oliver",
    staffName: "Kayor Bator",
    specialty: "lab scientist",
    date: new Date().toLocaleDateString(),
  },
  {
    patientName: "Patience Oliver",
    staffName: "Kayor Bator",
    specialty: "doctor",
    date: new Date().toLocaleDateString(),
  },
  {
    patientName: "Patience Oliver",
    staffName: "Kayor Bator",
    specialty: "doctor",
    date: new Date().toLocaleDateString(),
  },
  {
    patientName: "Patience Oliver",
    staffName: "Kayor Bator",
    specialty: "doctor",
    date: new Date().toLocaleDateString(),
  },
  {
    patientName: "Patience Oliver",
    staffName: "Kayor Bator",
    specialty: "doctor",
    date: new Date().toLocaleDateString(),
  },
];

const AdminStaffSchedules = () => {
  const [filterParams, setFilterParams] = useState({});
  const [showModal, setShowModal] = useState({
    schedule: false,
    scheduleDetails: false,
  });
  const handleNavigation = () => navigate("/dashboard/admin/patients/detail");
  const columns = adminStaffSchedulesColumns(() => setShowModal({ scheduleDetails: true }));

  return (
    <div>
      {showModal.schedule && (
        <AddStaffScheduleModal
          handleClose={() => setShowModal({ schedule: false })}
        />
      )}
      {showModal.scheduleDetails && (
        <StaffSchedulesDetailsModal
          handleClose={() => setShowModal({ scheduleDetails: false })}
        />
      )}
      <DashboardWrapper>
        <div className="flex justify-between items-center">
        <p className="font-bold text-2xl mb-[44px]">Staff Schedules</p>
        <Button text={'Add Schedule'} className="bg-primary text-white h-[48px]" onClick={() => setShowModal({ schedule: true })}/>
        </div>
        <div className="flex  items-center mb-[24px]">
          <div className="flex gap-x-[5px]">
            <Dropdown
              className="bg-white"
              options={["Active", "Inactive", "All"]}
              value={
                filterParams?.has_active_lite === 1
                  ? "Active"
                  : filterParams?.has_active_lite === 0
                  ? "Inactive"
                  : "Lite plan"
              }
              onChange={(option) =>
                setFilterParams({
                  ...filterParams,
                  has_active_lite:
                    option === "Active" ? 1 : option === "All" ? "" : 0,
                })
              }
            />
            <Dropdown
              className="bg-white"
              options={["Active", "Inactive", "All"]}
              value={
                filterParams?.is_active_account_status === 1
                  ? "Active"
                  : filterParams?.is_active_account_status === 0
                  ? "Inactive"
                  : "Acct status"
              }
              onChange={(option) =>
                setFilterParams({
                  ...filterParams,
                  is_active_account_status:
                    option === "Active" ? 1 : option === "All" ? "" : 0,
                })
              }
            />
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </DashboardWrapper>
    </div>
  );
};

export default AdminStaffSchedules;
