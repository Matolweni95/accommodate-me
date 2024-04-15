import React from 'react'
import SideNav from './TempSideNav'

function ApplicationView() {
  return (
    <div>
        <SideNav>
            <div className='card_container bg-lightgray w-full h-full rounded-[15px]'>
                <div className='flex flex-col h-full justify-around'>
                    <div className='flex p-10'>
                        <div className='w-1/2'>
                            <div>
                                <p className='text-base'>1 February 2024</p>
                                <h1 className='md:text-4xl'>XTC675</h1>
                            </div>

                            <div className='mt-5 flex flex-col gap-3'>
                                <h3>Masixole Matolweni</h3>
                                <h3>9512255845088</h3>
                                <h3>masixolematolweni.1@gmail.com</h3>
                                <div>
                                    <h3>77 Victoria Road</h3>
                                    <h3>Plumstead</h3>
                                    <h3>Cape Town</h3>
                                    <h3>7800</h3>
                                </div>
                                <h3>NSFAS Funded</h3>
                                <h3>WITS University</h3>
                                <h3>1st Year</h3>
                                <h3>Single Room / Double</h3>
                            </div>
                        </div>
                        <div className='flex flex-col justify-end'>
                            <div>
                                <div>
                                    <h1>Proof of Registration</h1>
                                    <div>

                                    </div>
                                </div>
                                <div>
                                    <h1>ID Copy</h1>
                                    <div>
                                        
                                    </div>
                                </div>
                                <div>
                                    <h1>Student Card</h1>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <button className='bg-blue px-8 py-2 rounded-lg text-white'>Accept</button>
                        <p className='text-center'>Or</p>
                        <button className='bg-blue px-8 py-2 rounded-lg text-white'>Reject</button>
                    </div>
                </div>
            </div>
        </SideNav>
    </div>
  )
}

export default ApplicationView