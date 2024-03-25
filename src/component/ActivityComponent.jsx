import React from 'react'

function ActivityComponent() {
  return (
    <>
        <div className=''>
            <div className='bg-gray w-[220px] p-9 flex flex-col gap-5  rounded-[25px]'>
                <div className='border-b-[1px] border-gray pb-2'>
                    <h1 className='text-center text-[15px]'>Recent Activities</h1>
                </div>
                <div>
                    <h1 className='text-left'>Today</h1>
                    <div className='text-base flex flex-col gap-3opacity-60'>
                        <h3 className='border-b-[2px] border-gray pb-2 text-[12px]'>Logged In 12:00am</h3>
                        <h3 className='border-b-[2px] border-gray pb-2 text-[12px]'>Application Accepted: 1:00pm</h3>
                        <h3 className='border-b-[2px] border-gray pb-2 text-[12px]'>Logged Out: 3:00pm</h3>
                        <h3 className='border-b-[2px] border-gray pb-2text-[12px]'>Logged In: 3:50pm</h3>
                    </div>
                </div>
                <div className='flex items-center justify-center '>
                    <button className='bg-transparent border border-lightblue py-1 px-2 rounded text-lightblue text-[11px]'>See all activities</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ActivityComponent