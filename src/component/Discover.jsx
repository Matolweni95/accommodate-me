import React from 'react'

function Discover() {
  return (
    <div className='bg-lightgray relative h-[1240px] lg:h-[78vh] 2xl:h-[60vh] md:h-[490px]'>
        <h1 className='text-center lg:text-3xl lg:mb-0 lg:pt-[70px]'>Discover all things property</h1>
        <div className='pt-12 pl-4 pr-4 lg:justify-center lg:items:center lg:flex'>
            
            <div className='cards m-7 p-5 rounded-[24px] flex flex-col md:flex-row gap-4 bg-white relative relative lg:top-[-1vh] 2xl:top-[4vh] lg:h-[450px] 2xl:w-3/4 lg:w-3/4 '>
                <div className='card flex flex-col justify-around  items-center'>
                    <div className='circle avatar bg-gray'>

                    </div>
                    <h3 className='mt-5'>Property Alerts</h3>
                    <p className='p-4 text-center text-base 2xl:w-3/4 text-discovertext'>
                        Sign up for an account and receive property
                        alerts when new properties match your search
                        criteria.
                    </p>
                    <button className='text-base border border-red py-3 px-5 rounded-md'>See More</button>
                    
                </div>
                <div className='card flex flex-col justify-around  items-center '>
                    <div className='circle avatar bg-gray'>
                        </div>
                        <h3 className='mt-5'>Property Alerts</h3>
                        <p className='p-4 text-center text-base 2xl:w-3/4 text-discovertext'>
                            Sign up for an account and receive property
                            alerts when new properties match your search
                            criteria.
                        </p>
                        <button className='text-base border border-red py-3 px-5 rounded-md'>See More</button>
                       
                    </div>
                <div className='card flex flex-col justify-around items-center justify-between '>
                <div className='circle avatar bg-gray'>
                    </div>
                    <h3 className='mt-5'>Property Alerts</h3>
                    <p className='p-4 text-center text-base 2xl:w-3/4 text-discovertext'>
                        Sign up for an account and receive property
                        alerts when new properties match your search
                        criteria.
                    </p>
                    <button className='text-base border border-red py-3 px-5 rounded-md'>See More</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover