import React from 'react'
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2'

export default function PatientHistory() {
    return (
        <div className={'P-history'}>
            <h4 className={'subHeader'}>{'The Patient'}</h4>
            <div className={'P_history_container'}>
            <Line
                className={'P-history-graph'}
                data={{
                    labels: ['RED', 'YELLOW', 'GREEN', 'BLUE', 'YELLOW', 'GREEN', 'BLUE'],
                    datasets: [{
                        label: 'Votes',
                        data: [12, 5, 9, 20, 2, 13, 17],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 25, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 12, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 25, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 12, 235, 1)',
                            'rgba(255, 26, 86, 1)',
                            'rgba(75, 12, 192, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 12, 235, 1)',
                            'rgba(255, 26, 86, 1)',
                        ],
                        borderWidth: 4,
                        
                        
                    },
                    {
                        label: 'vote 2',
                        data: [2, 7,3,1,6,8,4],
                        borderColor:['red','pink','indigo','lime','gray','green','white'],
                        backgroundColor: ['lime','red','yellow','red','yellow','green','pink',],
                        borderWidth: 2
                    },
                
                ],
                }}
                
                
                height={400}
                width={600}
                options= {{
                    scales: {
                        y: {
                            beginAtZero: true,
                        },                        
                    },
                    elements: {
                        line: {
                            tension: 0.25,
                        },
                    },  
                    plugins: {
                        legend: {
                            labels: {
                                color: 'rgb(23, 32, 291)',
                                // boxWidth:10,                              
                                font: {
                                    size: 12
                                },
                                usePointStyle: true,
                                
                            },
                        }
                    }
                }}                

            />
            </div>
        </div>
    )
}