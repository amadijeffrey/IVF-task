import React, { useState } from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import { adminServicesColumns, adminTreatmentPlanColumns } from '../../../utils/helpers/columns'
import Button from '../../../components/dashboard/ButtonComponent'
import AddServicesModal from '../../../components/dashboard/Modal/AddServices'
import EditServicesModal from '../../../components/dashboard/Modal/EditServices'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper'
import AdminTreatmentPlanModal from '../../../components/dashboard/Modal/AdminTreatmentPlan'
import { useNavigate } from 'react-router-dom'

const TreatmentPlans = () => {
    const [showModal, setShowModal] = useState({
        newPlan: false,
        editService: false
    })
    const navigate = useNavigate()
  
    const handleNavigation = (id) => navigate(`/dashboard/admin/treatmentPlans/${id}/detail`)
    const columns = adminTreatmentPlanColumns(handleNavigation)
    const data = [
        {
            name: 'Male and Female Infertility Diagnosis',
            amount: 657890,
            id: 1
        },
        {
            name: 'Artificial Insemination',
            amount: 5265678,
            id: 2
        },
        {
            name: 'In-vitro Fertilization',
            amount: 3465687,
            id: 3
        },
        {
            name: 'Gamete And Embryo Cryopreservation',
            amount: 3465687,
            id: 3
        },
    ]

  return (
    <>
     { showModal.newPlan && <AdminTreatmentPlanModal handleClose={() => setShowModal({ addService: false })}/>}
     { showModal.editService && <EditServicesModal handleClose={() => setShowModal({ editService: false })} selectedService={selectedService} />}
    <div>
        <DashboardWrapper>
        <div className="flex justify-between items-center mb-[44px]">
          <p className="font-bold text-2xl ">Treatment Plans</p>
          <Button text={'Create new plan'}  className='bg-primary text-white' onClick={() => setShowModal({ newPlan: true })}/>

        </div>
        <CustomTable columns={columns} data={data} showPagination={true}/>
      </DashboardWrapper>
    </div>
    </>
  )
}

export default TreatmentPlans