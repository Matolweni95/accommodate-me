import React, {useContext, useEffect, useState} from 'react'
import SideNav from './TempSideNav'
import SideProfile from './SideProfile'
import ActivityComponent from './ActivityComponent'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../../src/App.css'


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',  
        ],
        borderColor: [ 
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',    
        ],
        borderWidth: 1,
      },
    ],
  };

function CompanyDashboard() {
    
  return (
    <div>
        <SideNav>
            <div className='h-full flex justify-between gap-5 flex-warp'>
                <div className='w-full flex flex-col gap-6'>
                    <div className='pl-4 pr-4 rounded-md w-full relative flex items-center justify-center'>
                        <div className='top_bubbles flex flex-col md:flex-row  w-full gap-6'>
                            <div className='purplebubble h-[160px] w-full rounded-md'></div>
                            <div className='lightblue h-[160px] w-full rounded-md'></div>
                            <div className='orangebubble h-[160px] w-full rounded-md'></div> 
                        </div>
                    </div>
                    <div className='graphs'>
                    <div className='flex gap-5 flex-wrap p-5 '>
                        <div className='flex flex-col md:flex-row gap-5 w-full'>
                            <div className='w-full md:w-1/2'>
                                <div className='card border border-solid border-gray p-4 rounded-lg h-full'>
                                    <h1>Audience</h1>
                                    <Doughnut data={data} />
                                </div>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <div className='card border border-solid border-gray p-4 rounded-lg h-full'>
                                    <h1>Audience</h1>
                                    <Doughnut data={data} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5 w-full'>
                            <div className='w-full md:w-1/2'>
                                <div className='card border border-solid border-gray p-4 rounded-lg h-full'>
                                    <h1>Audience</h1>
                                    <Doughnut data={data} />
                                </div>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <div className='card border border-solid border-gray p-4 rounded-lg h-full'>
                                    <h1>Audience</h1>
                                    <Doughnut data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </SideNav>
    </div>
  )
}

export default CompanyDashboard;