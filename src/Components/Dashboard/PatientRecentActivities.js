import React from 'react'
import image from '../../images/Joe.png'

export default function PatientRecentActivities() {
    const styles={
            profile: {
                background: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                margin: '7px'
            }
    }
    return (
        // PATIENT RECENT ACTIVITIES ( P R A )
        
        <div className={'PRA_main'}>
            <h4 className={'subHeader'}>{'Patient Recent Activities'}</h4>
            <div className={'PRA_innerContainer container'}>
                <section className={'PRA_section-one PRA'}>
                    <div className={'PRA_Profile'}>
                        <aside style={styles.profile}></aside>
                        <aside>
                            {'Joshua'}<br/>{'Ghana'}
                        </aside>
                    </div>
                    <div>{'Insomia'}</div>
                    <div className={'patient_health_status'}>{'In Treatment'}</div>
                </section>
                <section className={'PRA_section-one PRA'}>
                    <div className={'PRA_Profile'}>
                        <aside style={styles.profile}></aside>
                        <aside>
                            {'Joshua'}<br/>{'Ghana'}
                        </aside>
                    </div>
                    <div>{'Insomia'}</div>
                    <div className={'patient_health_status'}>{'In Treatment'}</div>
                </section>
                <section className={'PRA_section-one PRA'}>
                    <div className={'PRA_Profile'}>
                        <aside style={styles.profile}></aside>
                        <aside>
                            {'Joshua'}<br/>{'Ghana'}
                        </aside>
                    </div>
                    <div>{'Insomia'}</div>
                    <div className={'patient_health_status'}>{'In Treatment'}</div>
                </section>
                <section className={'PRA_section-one PRA'}>
                    <div className={'PRA_Profile'}>
                        <aside style={styles.profile}></aside>
                        <aside>
                            {'Joshua'}<br/>{'Ghana'}
                        </aside>
                    </div>
                    <div>{'Insomia'}</div>
                    <div className={'patient_health_status'}>{'In Treatment'}</div>
                </section>
                <section className={'PRA_section-one PRA'}>
                    <div className={'PRA_Profile'}>
                        <aside style={styles.profile}></aside>
                        <aside>
                            {'Joshua'}<br/>{'Ghana'}
                        </aside>
                    </div>
                    <div>{'Insomia'}</div>
                    <div className={'patient_health_status'}>{'In Treatment'}</div>
                </section>
                <section className={'PRA_section-one PRA'}>
                    <div className={'PRA_Profile'}>
                        <aside style={styles.profile}></aside>
                        <aside>
                            {'Joshua'}<br/>{'Ghana'}
                        </aside>
                    </div>
                    <div>{'Insomia'}</div>
                    <div className={'patient_health_status'}>{'In Treatment'}</div>
                </section>
            </div>
        </div>
    )
}
