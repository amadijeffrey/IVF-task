import React from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper';
import { useNavigate } from 'react-router-dom';
import { doctorReportsColumns } from '../../../utils/helpers/columns';


  const data = [
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
        
    },
    {
        name: 'Kayor Bator',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
        
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
        
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
        
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
        
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
        
    }
  ]

const ReportManagement = () => {
    const navigate = useNavigate()
    const handleNavigation = () => navigate('/dashboard/doctor/reports/detail')
    const columns = doctorReportsColumns(handleNavigation)
    
  return (
    <div>
        <DashboardWrapper>
        <p className='font-bold text-2xl mb-[44px]'>Report</p>
        <CustomTable columns={columns} data={data}/>
        </DashboardWrapper>
       
    </div>
  )
}
export default ReportManagement