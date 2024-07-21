import React from 'react'
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper'
import Slider from '../../../components/dashboard/Slider'
import AdminProfile from './Profile'
import ActivityLogs from './ActivityLogs'
import Services from './Services'


const AdminSettings = () => {
    return (
        <DashboardWrapper >
            <div>
                <Slider
                    labels={[
                        'Profile',
                        'Services',
                        'Logs'
                    ]}
                    slidesContent={[<AdminProfile />, <Services />, <ActivityLogs />]}

                />

            </div>
        </DashboardWrapper>
    )
}

export default AdminSettings