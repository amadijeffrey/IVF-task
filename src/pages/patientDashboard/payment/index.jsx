import React from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper';
import { useNavigate } from 'react-router-dom';
import { getStatusBadge } from '../../../utils/helpers/commonHelpers';
import { paymentColumns } from '../../../utils/helpers/columns';


  const data = [
    {
        status: 'Pending',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
         amount: 435465
    },
    {
        status: 'Success',
         file_number: "ATS-20240809-001",
         date: new Date().toLocaleDateString(),
         amount:  435465
    },
  
  ]

const PaymentManagement = () => {
    const navigate = useNavigate()

    const handleNavigation  = () => navigate('/dashboard/patient/payments/detail')
    const columns = paymentColumns(handleNavigation)
 
    
  return (
    <div>
        <DashboardWrapper>
        <p className='font-bold text-2xl mb-[44px]'>Payment</p>
        <CustomTable columns={columns} data={data}/>
        </DashboardWrapper>
       
    </div>
  )
}
export default PaymentManagement