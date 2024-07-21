import React, { useState } from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import { adminAppointmentsColumns, adminRequestSchedulesColumns } from '../../../utils/helpers/columns'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper'
import Dropdown from '../../../components/dashboard/DropDown/DropDown'

const data = [
    {
        name: 'Patience Oliver',
        staffName: 'Kayor Bator',
        requestType: 'Rescheduled Appointment',
        date: new Date().toLocaleDateString(),
    },
    {
        name: 'Patience Oliver',
        staffName: 'Kayor Bator',
        requestType: 'initial consultation',
        date: new Date().toLocaleDateString(),
    },
    {
        name: 'Patience Oliver',
        staffName: 'Kayor Bator',
        requestType: 'Flagged Appointment',
        date: new Date().toLocaleDateString(),
    },
    {
        name: 'Patience Oliver',
        staffName: 'Kayor Bator',
        requestType: 'Flagged Appointment',
        date: new Date().toLocaleDateString(),
    },
    {
        name: 'Patience Oliver',
        staffName: 'Kayor Bator',
        requestType: 'Flagged Appointment',
        date: new Date().toLocaleDateString(),
    },
    {
        name: 'Patience Oliver',
        staffName: 'Kayor Bator',
        requestType: 'initial consultation',
        date: new Date().toLocaleDateString(),
    },

  ]

const AdminAppointmentRequests = () => {
    const [filterParams, setFilterParams] = useState({})
    const handleNavigation = () => navigate('/dashboard/admin/patients/detail')
    const columns = adminRequestSchedulesColumns(handleNavigation)

    return (
        <div>
      <DashboardWrapper>
        <p className="font-bold text-2xl mb-[44px]">Apppointment Requests</p>
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
    )
}

export default AdminAppointmentRequests