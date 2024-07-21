import React, { useState } from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper';
import { useNavigate } from 'react-router-dom';
import { adminPatientsColumns } from '../../../utils/helpers/columns';
import InputComponent from '../../../components/dashboard/Input';
import Dropdown from '../../../components/dashboard/DropDown/DropDown';


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

const AdminPatientManagement = () => {
    const navigate = useNavigate()
    const handleNavigation = () => navigate('/dashboard/admin/patients/detail')
    const columns = adminPatientsColumns(handleNavigation)
    const [filterParams, setFilterParams] = useState({})
    const [formData, setFormData] = useState({
        plan: "",
      });
    
  return (
    <div>
        <DashboardWrapper>
        <p className='font-bold text-2xl mb-[44px]'>Patient Management</p>
        <div className="flex justify-between items-center mb-[24px]">
          <div className="relative flex items-center rounded-[5px] md:w-[30%] ">
            <InputComponent
              placeholder="search by name"
              className={"bg-white"}
              showLeftIcon={true}
              type="search"
              id="employeeSearch"
              // name="lastName"
              value={name}
              handleChange={(e) => setName(e.target.value?.trim())}
            />
          </div>
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
        <CustomTable columns={columns} data={data}/>
        </DashboardWrapper>
       
    </div>
  )
}
export default AdminPatientManagement