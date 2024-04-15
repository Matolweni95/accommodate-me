import React, { useState } from 'react';
import SideNav from './TempSideNav';

function RoomAddition() {
  const [roomValue, setRoomValue] = useState('');

  const handleInputChange = (event) => {
    setRoomValue(event.target.value);
  };

  return (
    <div className=''>
      <SideNav>
        <h1 className='md:text-lg'>Room Numbers</h1>
        <div className='flex flex-col justify-center relative h-fit items-center gap-5' style={{ height: 'calc(100% - 6rem)' }} >
          <div className='flex flex-col justify-center items-center'>
            <h2 className=''>Room 1 of 25</h2>
            <p className='text-base'>Single</p>
          </div>
          <div className='bubble orangebubble flex h-[270px] w-[270px] items-center justify-center rounded-[15px]'>
            <h1 className='text-white'>{roomValue || 'Room 00'}</h1>
          </div>
          <div>
            <input
              className='bg-lightblue px-4 py-3 rounded-md text-white text-center'
              placeholder='Enter Room'
              value={roomValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </SideNav>
    </div>
  );
}

export default RoomAddition;
