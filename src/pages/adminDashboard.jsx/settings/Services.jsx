import React, { useState } from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import { adminServicesColumns } from '../../../utils/helpers/columns'
import Button from '../../../components/dashboard/ButtonComponent'
import AddServicesModal from '../../../components/dashboard/Modal/AddServices'
import EditServicesModal from '../../../components/dashboard/Modal/EditServices'

const Services = () => {
    const [showModal, setShowModal] = useState({
        addService: false,
        editService: false
    })
    const [selectedService, setSelectedService] = useState({})
    const handleSelection = (data) => {
        setShowModal({editService: true})
        setSelectedService(data)
    }
    const columns = adminServicesColumns(handleSelection)
    const data = [
        {
            name: 'Couple Initial assessment',
            amount: 657890,
            id: 1
        },
        {
            name: 'IVF treatment with own egg',
            amount: 5265678,
            id: 2
        },
        {
            name: 'Donor sperm',
            amount: 3465687,
            id: 3
        },
        {
            name: 'Couple Initial assessment',
            amount: 657890,
            id: 4
        },
        {
            name: 'IVF treatment with own egg',
            amount: 5265678,
            id: 5
        },
        {
            name: 'Donor sperm',
            amount: 3465687,
            id: 6
        },
    ]

  return (
    <>
     { showModal.addService && <AddServicesModal handleClose={() => setShowModal({ addService: false })}/>}
     { showModal.editService && <EditServicesModal handleClose={() => setShowModal({ editService: false })} selectedService={selectedService} />}
    <div>
        <div className='mb-[44px] flex justify-between items-center'>
        <p className='text-2xl font-bold'>Services</p>
        <Button text={'Add services'}  className='bg-primary text-white' onClick={() => setShowModal({ addService: true })}/>
        </div>
        <CustomTable columns={columns} data={data} showPagination={true}/>
    </div>
    </>
  )
}

export default Services