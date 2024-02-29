import React from 'react'

function Estate() {
  return (
    <div className='bg-lightgray'>
        <div className='pt-8 pb-6'>
            <div>
                <div className='flex flex-col md:flex-row md:justify-between lg:justify-around'>
                    <div className='flex flex-col gap-6 p-7 md:w-3/6 lg:w-1/3 lg:p-0 text-base'>
                        <h1 className='lg:text-4xl'>We’re SA’s number one residence webisite</h1>
                        <h3>Accommodate me is South Africa's largest residence
                            search portal and is the first place to start your 
                            residence search!
                        </h3>
                        
                        <h3>
                            Accommodate me lists houses and flats from all of 
                            SA's Accredited building, so whether you're looking 
                            to buy or rent, you'll find your perfect home 
                            on Accommodate me.
                        </h3>
                        <button className='text-left'>More about Accommodate me</button>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='mini bg-white w-[125px] h-[105px] relative left-[50px] md:left-[-40px] rounded'>

                        </div>
                        <div className='medium mini bg-gray w-[155px] h-[135px] relative top-[-20px] right-[60px] md:right-[170px] rounded'>
                            
                        </div>
                        <div className='large mini bg-white relative left-[50px] top-[-40px] w-[185px] h-[135px] md:left-[-50px]  rounded'>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='p-7 flex flex-col md:flex-row-reverse md:justify-between lg:justify-around'>
                            <div className='flex flex-col gap-5 md:w-2/5 text-base mb-9'>
                                <h1>Find a trusted Estate Agent in your area</h1>
                                <h3>
                                    Find your perfect residence on Accommodate me
                                    by searching through the largest database of 
                                    private property to let by estate agents 
                                    throughout South Africa. 
                                </h3>
                                <h3>
                                    To list your property on Accommodate me 
                                    contact one of our trusted Estate Agents.
                                </h3>
                                <button className='text-left'>Search for Agents</button>
                            </div>
                            <div>
                                <div className='bg-white w-full md:w-[370px] h-[250px] rounded'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Estate