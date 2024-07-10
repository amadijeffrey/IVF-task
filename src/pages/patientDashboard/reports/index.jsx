import React from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper';
import { useNavigate } from 'react-router-dom';


  const data = [
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
         numOfReports: 3
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
         numOfReports: 3
    },
    {
        name: 'Kayor Bator',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
         numOfReports: 3
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
         numOfReports: 3
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
         numOfReports: 3
        
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
         numOfReports: 5
    },
    {
        name: 'Patience Oliver',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
        numOfReports: 4
    }
  ]

const ReportManagement = () => {
    const navigate = useNavigate()
    const columns = [
      {
          title: "File Number",
          key: "file_number",
          width: "40%",
          dataIndex: "file_number",
        },
        {
          title: "Start Date",
          key: "date",
          width: "20%",
          dataIndex: "date",
        },
        {
            title: "Number Of reports",
            key: "numOfReports",
            width: "20%",
            dataIndex: "numOfReports",
          },
      {
        title: 'Action',
        key: 'action',
        width: '20%',
        dataIndex: 'action',
        render: () => <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={() => navigate('/dashboard/doctor/reports/detail')}>View Details</button>,
      },
    ];
    
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