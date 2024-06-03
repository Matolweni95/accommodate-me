import React from 'react';
import '../residence.css'
import SideNav from './TempSideNav';

function Residenceapplication() {
  return (
    <SideNav>
    <div className='bg-newbg h-screen flex items-center justify-center'>
        <div className='flex bg-white p-4 rounded-lg gap-8'>
            <div className='banner flex pl-8'>
                <div className='flex flex-col gap-5 mt-10'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <div className='cricle border border-solid border-gray rounded-[50%] h-[35px] w-[35px] flex items-center justify-center text-white'>
                                <h1>1</h1>
                            </div>
                        </div>
                        <div className='text-white flex flex-col '>
                            <div>
                                <h1 className='text-sm opacity-[0.6]'>STEP 1</h1>
                            </div>
                            <div className='text-sm'>
                                <h1>YOUR INFO</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <div className='cricle border border-solid border-gray rounded-[50%] h-[35px] w-[35px] flex items-center justify-center text-white'>
                                <h1>2</h1>
                            </div>
                        </div>
                        <div className='text-white flex flex-col '>
                            <div>
                                <h1 className='text-sm opacity-[0.6]'>STEP 2</h1>
                            </div>
                            <div className='text-sm'>
                                <h1>YOUR INFO</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <div className='cricle border border-solid border-gray rounded-[50%] h-[35px] w-[35px] flex items-center justify-center text-white'>
                                <h1>3</h1>
                            </div>
                        </div>
                        <div className='text-white flex flex-col '>
                            <div>
                                <h1 className='text-sm opacity-[0.6]'>STEP 3</h1>
                            </div>
                            <div className='text-sm'>
                                <h1>YOUR INFO</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <div className='cricle border border-solid border-gray rounded-[50%] h-[35px] w-[35px] flex items-center justify-center text-white'>
                                <h1>4</h1>
                            </div>
                        </div>
                        <div className='text-white flex flex-col '>
                            <div>
                                <h1 className='text-sm opacity-[0.6]'>STEP 4</h1>
                            </div>
                            <div className='text-sm'>
                                <h1>YOUR INFO</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[440px] pr-3'>
                <p className='text-newblue text-3xl font-semibold pt-12'>Personal Info</p>
                <p className='text-gray text-base '>Please provide your name, email address, and phone number</p>
                <div className='flex flex-col h-[410px] justify-between'>
                    <div className='flex flex-col gap-3 pt-8'>
                        <div className='flex flex-col'>
                            <label className='text-newblue text-base'>Name</label>
                            <input className='outline-none border border-solid border-gray p-2 rounded-[5px]' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-newblue text-base'>E-mail Address</label>
                            <input className='outline-none border border-solid border-gray p-2 rounded-[5px]' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-newblue text-base'>Phone Number</label>
                            <input className='outline-none border border-solid border-gray p-2 rounded-[5px]' />
                        </div>
                        {/* <div className='flex flex-col'>
                            <label className='text-newblue'>Name</label>
                            <input className='outline-none border border-solid border-gray p-2 rounded-[5px]' />
                        </div> */}
                    </div>
                    <div className='flex justify-between'>
                        <button className='bg-newblue text-white px-6 py-3 rounded-[5px]'>Go Back</button>
                        <button className='bg-newblue text-white px-6 py-3 rounded-[5px] hover:bg-white hover:text-newblue border border-solid border-newblue'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </SideNav>
  )
}

export default Residenceapplication