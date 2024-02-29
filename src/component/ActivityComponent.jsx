import React from 'react'

function ActivityComponent() {
  return (
    <>
        <div className='bg-gray h-screen flex justify-center items-center'>
            <div className='bg-white w-[300px] p-9 flex flex-col gap-5  rounded-[25px]'>
                <div className='border-b-[1px] border-gray pb-7'>
                    <h1 className='text-center text-3xl'>Recent Activities</h1>
                </div>
                <div>
                    <h1 className='text-left'>Today</h1>
                    <div className='text-base flex flex-col gap-3 pt-4 opacity-60'>
                        <h3 className='border-b-[2px] border-gray pb-2'>Logged In 12:00am</h3>
                        <h3 className='border-b-[2px] border-gray pb-2'>Application Accepted: 1:00pm</h3>
                        <h3 className='border-b-[2px] border-gray pb-2'>Logged Out: 3:00pm</h3>
                        <h3 className='border-b-[2px] border-gray pb-2'>Logged In: 3:50pm</h3>
                    </div>
                </div>
                <div className='flex items-center justify-center '>
                    <button className='bg-transparent border border-lightblue py-2 px-4 rounded text-lightblue'>See all activities</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ActivityComponent