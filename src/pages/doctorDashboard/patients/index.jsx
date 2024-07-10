import React from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper';
import { useNavigate } from 'react-router-dom';
import { adminPatientsColumns } from '../../../utils/helpers/columns';


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

const PatientManagement = () => {
    const navigate = useNavigate()
    const handleNavigation = () => navigate('/dashboard/doctor/patients/detail')

    const columns = adminPatientsColumns(handleNavigation)
    
  return (
    <div>
        <DashboardWrapper>
        <p className='font-bold text-2xl mb-[44px]'>Patient Management</p>
        <CustomTable columns={columns} data={data}/>
        </DashboardWrapper>
       
    </div>
  )
}
export default PatientManagement