import React from 'react';
import { RiSunCloudyFill } from 'react-icons/ri';

const AppTitle = () => {
  return (
    <div className='flex flex-row lg:pt-8 sm:pt-6 w-11/12 justify-center'>
      <h2 className='text-sm lg:text-2xl font-bold place-self-center'>
        Weather App
      </h2>
      <RiSunCloudyFill size={50} className='inline pl-3 text-yellow-300' />
    </div>
  );
};

export default AppTitle;
