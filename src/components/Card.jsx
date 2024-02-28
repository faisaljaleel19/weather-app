import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className='flex flex-col justify-center border-1 rounded-md border-gray-600 bg-slate-100 shadow-xl h-auto p-5 mb-5'>
      <div className='flex flex-row justify-center py-2'>
        <h3 className='text-xl font-bold'>{title}</h3>
      </div>
      <div className='flex flex-col justify-center items-center w-56'>
        {children}
      </div>
    </div>
  );
};

export default Card;
