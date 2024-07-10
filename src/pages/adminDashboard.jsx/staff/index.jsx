import React, { useState } from "react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Button from "../../../components/dashboard/ButtonComponent";
import CreateAppointmentModal from "../../../components/dashboard/Modal/CreateAppointment";
import Calendar from "../../../components/dashboard/calendar";
import AppointmentDetailsModal from "../../../components/dashboard/Modal/AppointmentDetails";
import FlagAppointmentModal from "../../../components/dashboard/Modal/FlagAppointment";
import RescheduleAppointmentModal from "../../../components/dashboard/Modal/RescheduleAppointment";

const StaffManagement = () => {
  const [showModal, setShowModal] = useState({
    appointment: false,
    appointmentDetails: false,
    flagAppointment: false,
    rescheduleAppointment: false
  });

  const events = [
    { date: "2024-06-28", title: "Specimen collection", time: "10 AM" },
    { date: "2024-06-26", title: "Ovulation Induction", time: "1 PM" },
    { date: "2024-06-06", title: "Check up", time: "1 PM" },
    { date: "2024-06-11", title: "Embryo transfer", time: "1 PM" },
  ];

  const handleSelect = (item) => {
    setShowModal({ appointmentDetails: true })
  }

  const handleNavigation = () => navigate('/dashboard/admin/patients/detail')

  const columns = adminPatientsColumns(handleNavigation)

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
