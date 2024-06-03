import React from 'react'
import hero from '../assets/newhero.avif'

function Hero() {
  return (
    <>
    {/* style={{ backgroundImage: `url('${hero}')` }} */}
    <div className='bg-blue h-[500px]'>
        <div className="bg-cover bg-center h-[50vh] lg:h-[320px] bg-gray" >
            <div className='flex items-center justify-center h-[100%] flex-col gap-5 p-3'>
                <h1>Find your perfect apartment</h1> 
            </div>
            <div className='flex justify-center'>
              <div className='flex gap-5 mt-[-40px] items-center bg-white md:w-2/3 rounded'>
                      <input className='bg-white rounded-lg p-7 w-full outline-none' placeholder='Search here'/>
                      <button className='bg-orange text-white h-fit py-5 px-12 mr-2 rounded'>Search</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero