import React from 'react'

function Discover() {
  return (
    <div className='bg-lightgray relative h-[1240px] md:h-[490px]'>
        <div className='pt-12 pl-4 pb-4 pr-4'>
            <h1 className='text-center mb-11'>Discover all things property</h1>
            <div className='cards m-7 rounded flex flex-col md:flex-row gap-4 bg-white pb-12 relative'>
                <div className='card flex flex-col justify-center items-center mt-8'>
                    <div className='circle avatar bg-gray'>

                    </div>
                    <h3 className='mt-5'>Property Alerts</h3>
                    <p className='p-4 text-center text-base'>
                        Sign up for an account and receive property
                        alerts when new properties match your search
                        criteria.
                    </p>
                    <button className='mb-12 text-base'>See More</button>
                    <hr/>
                </div>
                <div className='card flex flex-col justify-center items-center mt-8'>
                    <div className='circle avatar bg-gray'>
                        </div>
                        <h3 className='mt-5'>Property Alerts</h3>
                        <p className='p-4 text-center text-base'>
                            Sign up for an account and receive property
                            alerts when new properties match your search
                            criteria.
                        </p>
                        <button className='mb-12 text-base'>See More</button>
                        <hr/>
                    </div>
                <div className='card flex flex-col justify-center items-center mt-8'>
                <div className='circle avatar bg-gray'>
                    </div>
                    <h3 className='mt-5'>Property Alerts</h3>
                    <p className='p-4 text-center text-base'>
                        Sign up for an account and receive property
                        alerts when new properties match your search
                        criteria.
                    </p>
                    <button className='mb-12 text-base'>See More</button>
                    <hr/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover