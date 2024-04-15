import React from 'react';
import hero from '../assets/hero2.jpeg'
import ActivityComponent from './ActivityComponent';
import SideProfile from './SideProfile';
import SideNav from './TempSideNav';
import { Link } from 'react-router-dom';

function ApplicationList() {
  return (
    <>
      <SideNav>
      <div className='  flex flex-col gap-6'>
            <div className='flex w-full  gap-8 items-center'>
              <div className='flex w-full h-[100vh] relative items-center'>
                <div className='flex w-full'>
                  <div className='w-full'>
                    <div className='bg-white p-7 w-full h-fit rounded-[15px] flex flex-col gap-6'>
                      <div className=''>
                          <div className='orangebubble w-[256px] h-[151px] rounded-[15px]'>
                              
                          </div>
                          </div>
                          <div className='listContainer flex flex-col gap-5 bg-gray p-5 gap-5 rounded-[15px]'>
                          <div className='list flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-b-[1px] border-gray pb-5'>
                          <img src={hero} className='w-[80px] bg-cover bg-center rounded-[100%]' alt='avatar'/>
                          <h3>Masixole Matolweni</h3>
                          <h3>Student</h3>
                          <Link to="/view">
                          <button className='bg-transparent border border-black py-2 px-4 rounded'>View</button>
                          </Link>                          </div>
                          <div className='list flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-b-[1px] border-gray pb-5'>
                          <img src={hero} className='w-[80px] bg-cover bg-center rounded-[100%]' alt='avatar'/>
                          <h3>Masixole Matolweni</h3>
                          <h3>Student</h3>
                          <Link to="/view">
                          <button className='bg-transparent border border-black py-2 px-4 rounded'>View</button>
                          </Link>                          </div>
                          <div className='list flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-b-[1px] border-gray pb-5'>
                          <img src={hero} className='w-[80px] bg-cover bg-center rounded-[100%]' alt='avatar'/>
                          <h3>Masixole Matolweni</h3>
                          <h3>Student</h3>
                          <Link to="/view">
                          <button className='bg-transparent border border-black py-2 px-4 rounded'>View</button>
                          </Link>
                          </div>
                          <div className='list flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-b-[1px] border-gray pb-5'>
                          <img src={hero} className='w-[80px] bg-cover bg-center rounded-[100%]' alt='avatar'/>
                          <h3>Masixole Matolweni</h3>
                          <h3>Student</h3>
                          <Link to="/view">
                          <button className='bg-transparent border border-black py-2 px-4 rounded'>View</button>
                          </Link>                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  {/* <div className='flex flex-col gap-7 justify-around'>
                    <div className=''>
                        <SideProfile />
                    </div>
                    <div className=''>
                          <ActivityComponent />
                    </div>
                  </div> */}
              </div>
              </div>
        </div>
      </SideNav>
    </>
  )
}

export default ApplicationList