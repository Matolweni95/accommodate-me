import React from 'react'

function Footer() {
  return (
    <div className='bg-darkblue text-white'>
        <div className='p-7'>
            <h1>Accommodate Me</h1>
            <div className='flex justify-between mt-5'>
                <div className='flex flex-col gap-3 text-base'>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Services</h3>
                    <h3>More Info</h3>
                    <h3>Contact</h3>
                </div>
                <div className='flex flex-col gap-3 text-base'>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Services</h3>
                </div>
                <div className='flex flex-col gap-3 text-base'>
                    <h3>Home</h3>
                    <h3>About</h3>
                </div>
            </div>
            <h3 className='text-center mt-6 text-base'>Copyright © 2024 Accommodate me</h3>
        </div>
    </div>
  )
}

export default Footer