import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import AnimationIcon from './AnimationIcon';

const WeatherComponent = ({
  main,
  desc,
  current_temp,
  day_status,
  country,
}) => {
  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className='text-center'>
          <div>{main}</div>
          <div className='text-2xl'>{desc}</div>
          <div className='text-4xl'>{current_temp} &deg;C</div>
          <AnimationIcon
            weatherIcon={main}
            day_status={day_status}
            country={country}
          />
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
