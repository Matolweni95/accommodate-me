import React from 'react';
import hero from '../assets/hero2.jpeg'

function SideProfile() {
  return (
    <>
        <div>
            <div className=''>
                <div className='bg-gray h-fit flex flex-col w-[220px] gap-3 items-center p-9 rounded-[25px]'>
                    <img className='w-[90px] rounded-[100px]' src={hero} alt='avatar'/>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-[15px]'>Masixole Matolweni</h1>
                        <h3 className='opacity-60 text-[10px]'>Johannesburg, Gauteng</h3>
                    </div>

                    <div className='flex flex-col items-center opacity-60 py-1 '>
                        <h1 className='text-[12px]'>masixolematolweni.1@gmail.com</h1>
                        <h1 className='text-[12px]'>0613662092</h1>
                        <h1 className='text-[12px]'>Student</h1>
                    </div>
                    <button className='bg-transparent border border-lightblue py-1 px-2 rounded text-lightblue text-[11px]'>See Profile</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideProfile