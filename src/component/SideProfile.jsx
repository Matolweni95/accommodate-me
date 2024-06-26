import React from 'react';
import hero from '../assets/hero2.jpeg'

function SideProfile() {
  return (
    <>
        <div>
            <div className=''>
                <div className='bg-gray h-fit flex flex-col w-[245px] gap-3 items-center p-9 rounded-[25px]'>
                    <img className='w-[105px] rounded-[100px]' src={hero} alt='avatar'/>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-md text-center'>Masixole Matolweni</h1>
                        <h3 className='opacity-60 text-sm'>Johannesburg, Gauteng</h3>
                    </div>

                    {/* <div className='flex flex-col items-center opacity-60 py-3 '>
                        <h1 className='text-base'>masixolematolweni.1@gmail.com</h1>
                        <h1 className='text-base'>0613662092</h1>
                        <h1 className='text-base'>Student</h1>
                    </div> */}
                    <button className='bg-transparent border border-lightblue py-2 px-4 rounded text-lightblue'>See Profile</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideProfile