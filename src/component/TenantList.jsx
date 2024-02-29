import React from 'react';
import hero from '../assets/hero2.jpeg'

function TenantList() {
  return (
    <>
        <div className='tenantList h-fit md:h-screen flex items-center justify-center bg-gray p-5'>
            <div className='bg-white rounded-[10px] p-12 md:w-full lg:w-1/2 flex flex-col gap-6 pt-10'>
              <div className='flex flex-col md:flex-row justify-between border-b-[1px] gap-6 border-gray pb-7 md:items-center'>
              <h1 className='lg:text-3xl text-left'>Tenant List</h1>
              <div className='flex gap-4 items-center rounded'>
                    <input className='bg-lightgray p-3 w-full rounded' placeholder='Search here '/>
                    <button className=' text-white h-fitrounded'>
                      <svg xmlns="http://www.w3.org/2000/svg" width='24px' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
                </div>
              </div>
                <div className='listContainer flex flex-col gap-5'>
                  <div className='list flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-b-[1px] border-gray pb-5'>
                    <img src={hero} className='w-[80px] bg-cover bg-center rounded-[100%]' alt='avatar'/>
                    <h3>Masixole Matolweni</h3>
                    <h3>Student</h3>
                    <button className='bg-transparent border border-black py-2 px-4 rounded'>Room 23</button>
                  </div>
                  <div className='list flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-b-[1px] border-gray pb-5'>
                    <img src={hero} className='w-[80px] bg-cover bg-center rounded-[100%]' alt='avatar'/>
                    <h3>Masixole Matolweni</h3>
                    <h3>Student</h3>
                    <button className='bg-transparent border border-black py-2 px-4 rounded'>Room 23</button>
                  </div>
                  <div className='list flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-b-[1px] border-gray pb-5'>
                    <img src={hero} className='w-[80px] bg-cover bg-center rounded-[100%]' alt='avatar'/>
                    <h3>Masixole Matolweni</h3>
                    <h3>Student</h3>
                    <button className='bg-transparent border border-black py-2 px-4 rounded'>Room 23</button>
                  </div>
                  <div className='list flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-b-[1px] border-gray pb-5'>
                    <img src={hero} className='w-[80px] bg-cover bg-center rounded-[100%]' alt='avatar'/>
                    <h3>Masixole Matolweni</h3>
                    <h3>Student</h3>
                    <button className='bg-transparent border border-black py-2 px-4 rounded'>Room 23</button>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TenantList