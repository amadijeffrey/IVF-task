import React, { useState } from 'react'
import Profile from './Profile'
import Slider from '../../../components/dashboard/Slider'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper'
import MedicalHistory from './MedicalHistory'
import MedicalTreatmentHistory from './MedicalTreatmentHistory'
import SurgicalTreatmentHistory from './SurgicalTreatmentHistory'
import AddTreatmentModal from '../../../components/dashboard/Modal/AddTreatment'

const PatientAccount = () => {
    const [selected, setSelected] = useState({
        medicalHistory: false,
        surgicalHistory: false
      })
      const [type, setType] = useState('')
     const [showModal, setShowModal] = useState(false)
    return (
        <DashboardWrapper>
            {showModal && <AddTreatmentModal type={type} />}
            <div>
                {
                    (!selected.medicalHistory && !selected.surgicalHistory) ?
                    <Slider
                    labels={[
                        'Profile',
                        'Medical History',
                    ]}
                    slidesContent={[<Profile />, <MedicalHistory handleSelect={setSelected}/>]}

                />
                :
                (selected.medicalHistory && !selected.surgicalHistory) ? <MedicalTreatmentHistory handleSelect={setSelected} setType={setType} /> : <SurgicalTreatmentHistory handleSelect={setSelected} setType={setType} />
                }
            </div>
        </DashboardWrapper>
    )
}

export default PatientAccount