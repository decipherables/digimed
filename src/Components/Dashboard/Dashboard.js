import React from 'react'
import TopNavDashboard from './TopNavDashboard'
import './Dashboard.css'
import PatientHistory from './PatientHistory'
import TopDiseases from './TopDiseases'
import TodayPatients from './TodayPatients'
import TopDoctors from './TopDoctors'
import PatientRecentActivities from './PatientRecentActivities'
import Revenue from './Revenue'

export default function Dashboard() {
    return (
        <div className={'dashboard'}>
            <h4 className={'subHeader welcome'}>{'Welcome'}</h4><br/>

            {/* top navigators dashboard...... */}
            <TopNavDashboard/>

            {/* Patient History and Top diseases */}
            <div className={'patientHistoryAndTopDiseases'}>
                <PatientHistory/>
                <TopDiseases/>
            </div>

            {/* Today's Patients and Top Doctors */}
            <div className={"TodayPatientsAndTopDoctors"}>
                <TodayPatients/>
                <TopDoctors/>
            </div>

            {/* Patient Recent activities and revenue */}
            <div className={'P_RecentActivitiesAndRevenue'}>
                <PatientRecentActivities/>
                <Revenue/>
            </div>
            
            <br/>
        </div>
    )
}
