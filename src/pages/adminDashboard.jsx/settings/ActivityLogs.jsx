import React, { useState } from "react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Button from "../../../components/dashboard/ButtonComponent";
import CreateAppointmentModal from "../../../components/dashboard/Modal/CreateAppointment";
import Calendar from "../../../components/dashboard/calendar";
import AppointmentDetailsModal from "../../../components/dashboard/Modal/AppointmentDetails";
import FlagAppointmentModal from "../../../components/dashboard/Modal/FlagAppointment";
import RescheduleAppointmentModal from "../../../components/dashboard/Modal/RescheduleAppointment";
import { adminLogsColumns, adminStaffColumns } from "../../../utils/helpers/columns";
import CustomTable from "../../../components/dashboard/Table/CustomTable";

const ActivityLogs = () => {
  const [showModal, setShowModal] = useState({
    appointment: false,
    appointmentDetails: false,
    flagAppointment: false,
    rescheduleAppointment: false
  });

  const data = [
    {
        initiator: 'Patience Oliver',
        details: 'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
        date: new Date().toLocaleString(),
    },
    {
        initiator: 'Patience Oliver',
        details: 'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
        date: new Date().toLocaleString(),
    },
    {
        initiator: 'Patience Oliver',
        details: 'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
        date: new Date().toLocaleString(),
    },
    {
        initiator: 'Patience Oliver',
        details: 'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
        date: new Date().toLocaleString(),
    },
    {
        initiator: 'Patience Oliver',
        details: 'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
        date: new Date().toLocaleString(),
    },
    {
        initiator: 'Patience Oliver',
        details: 'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
        date: new Date().toLocaleString(),
    },
    {
        initiator: 'Patience Oliver',
        details: 'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
        date: new Date().toLocaleString(),
    },
    {
        initiator: 'Patience Oliver',
        details: 'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
        date: new Date().toLocaleString(),
    },
  ]

  const handleSelect = (item) => {
    setShowModal({ appointmentDetails: true })
  }

  const handleNavigation = () => navigate('/dashboard/admin/staff/detail')

  const columns = adminLogsColumns()

  return (
    <div>
        <CustomTable columns={columns} data={data}/>
    </div>
  );
};

export default ActivityLogs;
