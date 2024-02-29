import React from 'react'
import hero from '../assets/newhero.avif'

function Hero() {
  return (
    <>
    {/* style={{ backgroundImage: `url('${hero}')` }} */}
        <div className="bg-cover bg-center h-[50vh] lg:h-screen bg-gray" >
            <div className='flex items-center justify-center h-[100%] flex-col gap-5 p-3'>
                <h1>Find your perfect apartment</h1>
                <div className='flex gap-5 items-center bg-white md:w-2/3 rounded'>
                    <input className='bg-white p-3 w-full' placeholder='Search here'/>
                    <button className='bg-orange text-white h-fit p-1 mr-3 rounded'>Search</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero