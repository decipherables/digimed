import React from 'react'
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2'

export default function TopDiseases() {
    return (
        <div className={'TopDiseases'}>
            <h4 className={'subHeader'}>{'The Top Diseases'}</h4>
            <div className={'TopDiseases_container'}>
            <Doughnut
                className={'TopDiseases_graph'}
                data={{
                    labels: ['Kofi', 'Ama', 'Yaw', 'Akosua', 'Kwame'],
                    datasets: [{
                        label: 'Diseases',
                        data: [5, 2, 8, 10, 4],
                        backgroundColor: [
                            '#ff7c52',
                            '#5dd971',
                            '#2e85ff',
                            '#ffbf00',
                            '#ff55bf',
                        ],
                        borderColor: [
                            'rgba(55, 29, 132, 0.2)',
                            'rgba(54, 162, 25, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 25, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 12, 0.2)',
                        ],
                        borderWidth: 0,
                    }]
                }}
                height={350}
                width={500}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: false
                        },
                        x: {
                            display: false
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                color: 'rgb(0,0,0, .6',
                                font: {
                                    family: 'sans arial',
                                    size: 16,
                                    weight: 600,                                    
                                },
                                boxWidth: 10,
                                borderWidth: 1,
                                
                                
                            },
                    },
                    tooltip:{
                        // titleSpacing: 20
                    }
                }
                }}
            />
            </div>
        </div>
    )
}
