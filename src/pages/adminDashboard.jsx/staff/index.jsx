import React, { useState } from "react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Button from "../../../components/dashboard/ButtonComponent";
import CreateAppointmentModal from "../../../components/dashboard/Modal/CreateAppointment";
import Calendar from "../../../components/dashboard/calendar";
import AppointmentDetailsModal from "../../../components/dashboard/Modal/AppointmentDetails";
import FlagAppointmentModal from "../../../components/dashboard/Modal/FlagAppointment";
import RescheduleAppointmentModal from "../../../components/dashboard/Modal/RescheduleAppointment";
import { adminStaffColumns } from "../../../utils/helpers/columns";
import CustomTable from "../../../components/dashboard/Table/CustomTable";

const StaffManagement = () => {
  const [showModal, setShowModal] = useState({
    appointment: false,
    appointmentDetails: false,
    flagAppointment: false,
    rescheduleAppointment: false
  });

  const data = [
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32",
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32"
    },
    {
        name: 'Kayor Bator',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32"
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32"
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32"
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32"
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32"
    }
  ]

  const handleSelect = (item) => {
    setShowModal({ appointmentDetails: true })
  }

  const handleNavigation = () => navigate('/dashboard/admin/staff/detail')

  const columns = adminStaffColumns(handleNavigation)

  return (
    <div>
      {showModal.appointment && (
        <CreateAppointmentModal
          handleClose={() => setShowModal({ appointment: false })}
        />
      )}
      {showModal.appointmentDetails && (
        <AppointmentDetailsModal
          handleClose={() => setShowModal({ appointmentDetails: false })}
          handleOpenSecondModal={() => (
            setShowModal({ appointmentDetails: false }),
            setShowModal({ flagAppointment: true })
          )}
          handleOpenThirdModal={() => (
            setShowModal({ appointmentDetails: false }),
            setShowModal({ rescheduleAppointment: true })
          )}
        />
      )}
        {showModal.rescheduleAppointment && (
        <RescheduleAppointmentModal
          handleClose={() => setShowModal({ rescheduleAppointment: false })}
        />
      )}
         {showModal.flagAppointment && (
        <FlagAppointmentModal
          handleClose={() => setShowModal({flagAppointment: false })}
        />
      )}
      <DashboardWrapper>
        <div className="flex justify-between items-center mb-[44px]">
          <p className="font-bold text-2xl ">Staff</p>
          <Button
            className="bg-primary text-white h-[48px]"
            text="Add new staff"
            onClick={() => setShowModal({ appointment: true })}
          />
        </div>
        <CustomTable columns={columns} data={data}/>
      </DashboardWrapper>
    </div>
  );
};

export default StaffManagement;
