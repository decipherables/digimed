import React from 'react'

import joe from '../../images/Joe.png'

export default function TopDoctors() {

    const styles={
        doc_profile: {
            background: `url(${joe})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50px',
            borderRadius: '50%',
            width: '50px'
        }
    }
    return (
        <div className={'TopDoctors'}>
            <h4 className={'subHeader'}>{'Top Doctors'}</h4>
            <div className={'TopDoctors-container'}>
            <ul className={'container'}>
                <li>
                    <section className={'doc-details'}>
                        <aside className={'doc-img'} style={styles.doc_profile}></aside>
                        <aside className={'doc-name-and-spec'}>
                            <b className={'doc-name'}>{'Joshua'}</b>
                            <p className={'doc-spec'}>{'Gynecologist'}</p>
                        </aside>
                    </section>
                    <section className={'doctor_review'}>
                        <aside>
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                        </aside>
                        <aside>
                            {'234 Reviews'}
                        </aside>
                    </section>
                </li>
                <li>
                    <section className={'doc-details'}>
                        <aside className={'doc-img'} style={styles.doc_profile}></aside>
                        <aside className={'doc-name-and-spec'}>
                            <b className={'doc-name'}>{'Joshua'}</b>
                            <p className={'doc-spec'}>{'Gynecologist'}</p>
                        </aside>
                    </section>
                    <section className={'doctor_review'}>
                        <aside>
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                        </aside>
                        <aside>
                            {'234 Reviews'}
                        </aside>
                    </section>
                </li>
                <li>
                    <section className={'doc-details'}>
                        <aside className={'doc-img'} style={styles.doc_profile}></aside>
                        <aside className={'doc-name-and-spec'}>
                            <b className={'doc-name'}>{'Joshua'}</b>
                            <p className={'doc-spec'}>{'Gynecologist'}</p>
                        </aside>
                    </section>
                    <section className={'doctor_review'}>
                        <aside>
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                        </aside>
                        <aside>
                            {'234 Reviews'}
                        </aside>
                    </section>
                </li>
                <li>
                    <section className={'doc-details'}>
                        <aside className={'doc-img'} style={styles.doc_profile}></aside>
                        <aside className={'doc-name-and-spec'}>
                            <b className={'doc-name'}>{'Joshua'}</b>
                            <p className={'doc-spec'}>{'Gynecologist'}</p>
                        </aside>
                    </section>
                    <section className={'doctor_review'}>
                        <aside>
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                        </aside>
                        <aside>
                            {'234 Reviews'}
                        </aside>
                    </section>
                </li>
                <li>
                    <section className={'doc-details'}>
                        <aside className={'doc-img'} style={styles.doc_profile}></aside>
                        <aside className={'doc-name-and-spec'}>
                            <b className={'doc-name'}>{'Joshua'}</b>
                            <p className={'doc-spec'}>{'Gynecologist'}</p>
                        </aside>
                    </section>
                    <section className={'doctor_review'}>
                        <aside>
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                        </aside>
                        <aside>
                            {'234 Reviews'}
                        </aside>
                    </section>
                </li>
                <li>
                    <section className={'doc-details'}>
                        <aside className={'doc-img'} style={styles.doc_profile}></aside>
                        <aside className={'doc-name-and-spec'}>
                            <b className={'doc-name'}>{'Joshua'}</b>
                            <p className={'doc-spec'}>{'Gynecologist'}</p>
                        </aside>
                    </section>
                    <section className={'doctor_review'}>
                        <aside>
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                        </aside>
                        <aside>
                            {'234 Reviews'}
                        </aside>
                    </section>
                </li>
                <li>
                    <section className={'doc-details'}>
                        <aside className={'doc-img'} style={styles.doc_profile}></aside>
                        <aside className={'doc-name-and-spec'}>
                            <b className={'doc-name'}>{'Joshua'}</b>
                            <p className={'doc-spec'}>{'Gynecologist'}</p>
                        </aside>
                    </section>
                    <section className={'doctor_review'}>
                        <aside>
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                            {<i className={'fas fa-star'}/>}
                        </aside>
                        <aside>
                            {'234 Reviews'}
                        </aside>
                    </section>
                </li>
                </ul>
            </div>
        </div>
    )
}
