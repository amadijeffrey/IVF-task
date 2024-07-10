import React from 'react'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper'
import Slider from '../../../components/dashboard/Slider'
import DoctorProfile from './Profile'
import Password from './Pasword'

const DoctorAccount = () => {
    return (
        <DashboardWrapper >
            <div>
                <Slider
                    labels={[
                        'Profile',
                        'Password',
                    ]}
                    slidesContent={[<DoctorProfile />, <Password />]}

                />

            </div>
        </DashboardWrapper>
    )
}

export default DoctorAccount