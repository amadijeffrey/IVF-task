import React, { useState } from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper';
import { useNavigate } from 'react-router-dom';
import { adminPatientsColumns } from '../../../utils/helpers/columns';
import Dropdown from '../../../components/dashboard/DropDown/DropDown';
import InputComponent from '../../../components/dashboard/Input';


  const data = [
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32",
        id: 1
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32",
        id: 2
    },
    {
        name: 'Kayor Bator',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32",
        id: 3
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32",
        id: 4
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32",
        id:5
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32",
        id:6
    },
    {
        name: 'Patience Oliver',
        patient_id: 'user_54643243',
        gender: "Female",
        age: "32",
        id:7
    }
  ]

const PatientManagement = () => {
    const navigate = useNavigate()
    const handleNavigation = (id) => navigate(`/dashboard/doctor/patients/${id}/detail`)
    const columns = adminPatientsColumns(handleNavigation)
    const [filterParams, setFilterParams] = useState({})
    
  return (
    <div>
        <DashboardWrapper>
        <p className='font-bold text-2xl mb-[44px]'>Patient Management</p>
        <div className="flex items-center mb-[24px]">
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
        </div>
        <CustomTable columns={columns} data={data} showPagination={true}/>
        </DashboardWrapper>
       
    </div>
  )
}
export default PatientManagement