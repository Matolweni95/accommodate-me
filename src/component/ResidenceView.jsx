import React from 'react'
import SideNav from './TempSideNav'
import SouthPoint from '../assets/southpoint.svg'
import homi from '../assets/homii_logo.webp'
import res365 from '../assets/res365demo.png'
import site from '../assets/Site_Logo.svg'

function ResidenceView() {
  return (
    <div>
        <SideNav>
            <div className='card flex flex-wrap gap-5 items-center justify-around' style={{ height: 'calc(100% - 1rem)' }}>
                <div className='card_holder bg-blue flex rounded-lg justify-around flex-col w-[300px] h-[300px] items-center'>
                    <h1 className='text-center'>South Point</h1>
                    <div>
                        <img src={SouthPoint} width={250}/>
                    </div>
                </div>

                <div className='card_holder bg-blue flex rounded-lg justify-around flex-col w-[300px] h-[300px] items-center'>
                    <h1 className='text-center'>South Point</h1>
                    <div>
                        <img src={homi} width={250}/>
                    </div>
                </div>

                <div className='card_holder bg-blue flex rounded-lg justify-around flex-col w-[300px] h-[300px] items-center'>
                    <h1 className='text-center'>South Point</h1>
                    <div>
                        <img src={res365} width={250}/>
                    </div>
                </div>

                <div className='card_holder bg-blue flex rounded-lg justify-around flex-col w-[300px] h-[300px] items-center'>
                    <h1 className='text-center'>South Point</h1>
                    <div>
                        <img src={site} width={250}/>
                    </div>
                </div>

                <div className='card_holder bg-blue flex rounded-lg justify-around flex-col w-[300px] h-[300px] items-center'>
                    <h1 className='text-center'>South Point</h1>
                    <div>
                        <img src={SouthPoint} width={250}/>
                    </div>
                </div>

                <div className='card_holder bg-blue flex rounded-lg justify-around flex-col w-[300px] h-[300px] items-center'>
                    <h1 className='text-center'>South Point</h1>
                    <div>
                        <img src={SouthPoint} width={250}/>
                    </div>
                </div>
            </div>
        </SideNav>
    </div>
  )
}

export default ResidenceView