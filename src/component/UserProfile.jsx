import React from 'react';
import hero from '../assets/heroimg.jpg'

function UserProfile() {
  return (
    <div className='h-full flex items-center justify-center'>
      <div className='flex'>
        <div className='usercard w-fit h-fit p-5 bg-lightgray h-[617px] flex flex-col justify-around rounded-[20px]'>
          <div className='hero w-[337px]'>
            <img src={hero} />
          </div>
          <div className='moreinfo flex flex-col items-end'>
            <p>Last Updated: 03 Feebruary 2024</p>
            <p>Gauteng, Joh</p>
          </div>
          <div className='userdetails '>
            <div>
              <div>
                <p>Sipho Matolweni</p>
                <p>0693662092</p>
              </div>
              <p>masixolematolweni.1@gmail</p>
            </div>
            <div>
              <p>Emergency Contact</p>
              <div>
                <p>Nomsa Matolweni</p>
                <p>0693662092</p>
              </div>
            </div>
          </div>
        </div>

        <div className='userinfo h-[100%] justify-center items-center w-[760px] flex  flex-col gap-7'>
          <div className='residenceinfo bg-lightgray w-[565px] h-[311px] flex flex-col justify-around p-5 rounded-[20px]'>
            <div>
              <h1>Housing Details</h1>
              <p>Room no: 23</p>
              <p>Room Type: Single</p>
              <p>Date Moved in: 07 February 2024</p>
              <p>Duration:year</p>
            </div>
            <div className='flex justify-center w-full'>
              <button className='bg-transparent border border-black text-black py-2 px-4 rounded'>Cancel Residence</button>
            </div>
          </div>
          <div className='fundinginfo bg-lightgray w-[565px] h-[251px] rounded-[20px] p-5'>
            <h1>Funding</h1>
            <div className='h-full '>
              <p>Funded by: NSFAS</p>
              <p>Instituation: WITS University</p>
              <p>Year of study: 2nd Year</p>
              <p>Humanities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile