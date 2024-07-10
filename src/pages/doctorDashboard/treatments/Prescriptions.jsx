import React from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'


const Prescriptions = ({showModal}) => {
  return (
    <div>
      <div className='flex justify-between items-center mb-[32px]'>
      <p className='font-bold text-lg'>Prescriptions</p>
      <button className='bg-primary text-white' onClick={() => showModal({prescription: true})}>Add Prescriptions</button>
      </div>
       <CustomTable  data={[]} />
    </div>
  )
}

export default Prescriptions