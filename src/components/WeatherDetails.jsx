import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  FaDroplet,
  FaWind,
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
} from 'react-icons/fa6';
import { IconContext } from 'react-icons';

const WeatherDetails = ({ feels_like, humidity, min_temp, max_temp }) => {
  return (
    <IconContext.Provider
      value={{
        style: {
          display: 'inline',
          verticalAlign: 'middle',
          fontSize: '0.7em',
        },
      }}
    >
      <div className='flex flex-col align-middle'>
        {humidity ? (
          <>
            <div>
              Humidity: {humidity}% <FaDroplet />
            </div>
            <div>
              Feels Like: {feels_like}&deg;C <FaWind />
            </div>
            <div>
              Min Temp: {min_temp}&deg;C <FaTemperatureArrowDown />
            </div>
            <div>
              Max Temp: {max_temp}&deg;C <FaTemperatureArrowUp />
            </div>
          </>
        ) : (
          <Skeleton count={4} />
        )}
      </div>
    </IconContext.Provider>
  );
};

export default WeatherDetails;
