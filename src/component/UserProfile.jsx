import React from 'react';
import hero from '../assets/heroimg.jpg'
import SideNav from './TempSideNav';

function UserProfile() {
  return (
    <>
    <SideNav>
      <div className='h-full flex items-center justify-center'>
        <div className='flex'>
          <div className='usercard w-fit h-[100%] p-5 bg-lightgray h-[617px] flex flex-col justify-around rounded-[15px]'>
            <div className='hero '>
              <img className='rounded-[15px] h-[250px] w-[337px]' src={hero} />
            </div>
            <div className='moreinfo flex flex-col items-end opacity-40'>
              <p>Last Updated: 03 Feebruary 2024</p>
              <p>Gauteng, Johannesburg</p>
            </div>
            <div className='userdetails flex flex-col gap-6'>
              <div>
                <div className='flex justify-between'>
                  <p>Sipho Matolweni</p>
                  <p>0693662092</p>
                </div>
                <p>masixolematolweni.1@gmail</p>
              </div>
              <div>
                <p className='text-sm'>Emergency Contact</p>
                <div className='flex justify-between'>
                  <p>Nomsa Matolweni</p>
                  <p>0693662092</p>
                </div>
              </div>
            </div>
          </div>

          <div className='userinfo h-[100%] justify-center items-center w-[760px] flex  flex-col gap-7'>
            <div className='residenceinfo bg-lightgray w-[565px] h-[311px] flex flex-col justify-around p-5 rounded-[20px]'>
            <h1 className='border-b-[1px] border-gray pb-5'>Housing Details</h1>
              <div>
                  <div className="flex items-center">
                    <span className="mr-2 font-semibold">Room no:</span>
                    <h3 className="m-0">23</h3>
                  </div>
                <div className='items-center flex'>
                  <span className="mr-2 font-semibold">Room Type:</span>
                  <h3 className="m-0">Single</h3> 
                </div>
                <div className='items-center flex'>
                  <span className="mr-2 font-semibold">Date Moved in:</span>
                  <h3 className="m-0">07 February 2024</h3> 
                </div>
                <div className='items-center flex'>
                  <span className="mr-2 font-semibold">Duration:</span>
                  <h3 className="m-0">year</h3>
                </div>
              </div>
              <div className='items-center flex justify-center w-full'>
                <button className='bg-transparent border border-black text-black py-2 px-9 rounded'>Cancel Residence</button>
              </div>
            </div>
            <div className='fundinginfo bg-lightgray w-[565px] h-[277px] rounded-[20px] p-5'>
              <h1 className='border-b-[1px] border-gray pb-5'>Funding</h1>
              <div className='flex flex-col h-[100%] mt-5'>
                <div className='items-center flex'>
                  <span className="mr-2 font-semibold">Funded by:</span>
                  <h3 className="m-0">NSFAS</h3>
                </div>
                <div>
                <div className='items-center flex'>
                  <span className="mr-2 font-semibold">Instituation:</span>
                  <h3 className="m-0">WITS University</h3>
                </div>
                </div>
                <div>
                <div className='items-center flex'>
                  <span className="mr-2 font-semibold">Year of study:</span>
                  <h3 className="m-0">2 year</h3>
                </div>
                </div>
                <div>
                <div className='items-center flex'>
                  <span className="mr-2 font-semibold">Department:</span>
                  <h3 className="m-0">Humanities</h3>
                </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideNav>
    </>
  )
}

export default UserProfile