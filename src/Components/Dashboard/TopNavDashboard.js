import React from 'react'

import bed from '../../images/icons/bed.svg';
import expense from '../../images/icons/expense.svg';
import healtCareTools from '../../images/icons/healthCareTools.svg';
import income from '../../images/icons/income.svg';
import profit from '../../images/icons/profit.svg';
import syringe from '../../images/icons/syringe.svg';
import patient from '../../images/icons/Patient.svg';

export default function TopNavDashboard() {
    const TopNavs = [
        {
            icon: bed,
            title: 'Our Beds',
            number: 45
        },
        {
            icon: patient,
            title: "Today's Patients",
            number: 45
        },
        {
            icon: healtCareTools,
            title: 'Our Doctors',
            number: 45
        },
        {
            icon: syringe,
            title: "Today's Operation",
            number: 45
        },
    ]
    return (
        <div className={'TopNav-container scrolling-wrapper row flex-row flex-nowrap'}>
            {TopNavs.map((val)=>{
                return(
                    <section className={'TopNav scroll-col'}>
                        <div className={'TopNav-icon'}>
                            <img src={val.icon} width={'50%'}/>
                        </div>
                        <div className={'TopNav-detail'}>
                        {val.title}<br/>{val.number}
                        </div>
                    </section>
                )
            })};
            </div>
        )
}
