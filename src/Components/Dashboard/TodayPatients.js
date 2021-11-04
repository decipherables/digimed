import React from 'react'

import { Bar } from 'react-chartjs-2'

export default function TodayPatients() {
    return (
        <div className={'TodayPatients'}>
            <h4 className={'subHeader'}>{"Today's Patients"}</h4>
            <Bar 
                className={'T_P_graph'}
                data={{
                    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    datasets: [{
                        label: 'Admitted',
                        data: [9, 5, 2, 14, 7, 12, 3],
                        backgroundColor: [
                            'rgb(23, 343, 28, 0.5',
                            'rgb(21, 31, 213, 0.5',
                            'rgb(25, 353, 25, 0.5',
                            'rgb(23, 33, 23, 0.5',
                            'rgb(273, 37, 27, 0.5',
                            'rgb(26, 363, 26, 0.5',
                            'rgb(13, 14, 183, 0.5',
                        ],
                        borderWidth:0,
                        borderColor: [
                            // 'rgb(212, 343, 28, 0.5',
                            // 'rgb(212, 319, 21, 0.5',
                            // 'rgb(271, 379, 27, 0.5',
                            // 'rgb(203, 36, 234, 0.5',
                            // 'rgb(13, 182, 18, 0.5',
                            // 'rgb(253, 35, 195, 0.5',
                            // 'rgb(23, 333, 23, 0.5',
                        ]
                    },
                    {
                        label: 'Discharge',
                            data: [4, 7, 9, 8, 3, 15, 6],
                            backgroundColor: [
                                'rgb(273, 37, 27, 0.5',
                                'rgb(26, 163, 26, 0.5',
                                'rgb(13, 14, 183, 0.5',
                                'rgb(23, 143, 28, 0.5',
                                'rgb(21, 31, 213, 0.5',
                                'rgb(200, 183, 25, 0.5',
                                'rgb(23, 33, 23, 0.5',
                            ],
                            borderWidth:0,
                            borderColor: [
                                // 'rgb(13, 182, 18, 0.5',
                                // 'rgb(253, 35, 195, 0.5',
                                // 'rgb(23, 333, 23, 0.5',
                                // 'rgb(212, 343, 28, 0.5',
                                // 'rgb(212, 319, 21, 0.5',
                                // 'rgb(271, 379, 27, 0.5',
                                // 'rgb(203, 36, 234, 0.5',
                            ]
                    }]
                }}
                height={400}
                width={600}
                options={{
                    scales: {
                        
                    },
                    datasets: {
                        bar: {
                            barThickness: 15,
                        }
                    },
                    elements: {
                        bar: {
                            // borderWidth: 3,
                            // borderColor: 'rgb(32, 43, 84)',
                            // borderRadius: 20,
                            inflateAmount: -3
                        }
                    }
                }}
            />
        </div>
    )
}
