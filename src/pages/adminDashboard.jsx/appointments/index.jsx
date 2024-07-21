import React, { useState } from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import { adminAppointmentsColumns } from '../../../utils/helpers/columns'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper'
import Dropdown from '../../../components/dashboard/DropDown/DropDown'
import { useNavigate } from 'react-router-dom'

const data = [
    {
        patientName: 'Patience Oliver',
        staffName: 'Kayor Bator',
        type: 'initial consultation',
        date: new Date().toLocaleDateString(),
    },
    {
        patientName: 'Patience Oliver',
        staffName: 'Kayor Bator',
        type: 'initial consultation',
        date: new Date().toLocaleDateString(),
    },
    {
        patientName: 'Patience Oliver',
        staffName: 'Kayor Bator',
        type: 'initial consultation',
        date: new Date().toLocaleDateString(),
    },
    {
        patientName: 'Patience Oliver',
        staffName: 'Kayor Bator',
        type: 'initial consultation',
        date: new Date().toLocaleDateString(),
    },
    {
        patientName: 'Patience Oliver',
        staffName: 'Kayor Bator',
        type: 'initial consultation',
        date: new Date().toLocaleDateString(),
    },
    {
        patientName: 'Patience Oliver',
        staffName: 'Kayor Bator',
        type: 'initial consultation',
        date: new Date().toLocaleDateString(),
    },

  ]

const AdminAppointments = () => {
    const [filterParams, setFilterParams] = useState({})
    const navigate = useNavigate()
    const handleNavigation = () => navigate('/dashboard/admin/schedules/appointments/detail')
    const columns = adminAppointmentsColumns(handleNavigation)

    return (
        <div>
      <DashboardWrapper>
        <p className="font-bold text-2xl mb-[44px]">Apppointments</p>
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

export default AdminAppointments