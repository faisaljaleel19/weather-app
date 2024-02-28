import React, { useEffect, useRef, useState } from 'react';
import { FaLocationCrosshairs, FaLocationPin } from 'react-icons/fa6';

const SearchCity = ({ getSearchedCity, getCurrentCity }) => {
  const [countryList, setCountryList] = useState([]);
  const searchRef = useRef();

  const getCountryList = (e) => {
    if (e.target.value !== '') {
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=5&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setCountryList((countryList) => [
              { name: data[0].name, lon: data[0].lon, lat: data[0].lat },
            ]);
          } else {
            console.log('Error: not found');
          }
        })
        .catch((error) => console.log(error));
    } else {
      setCountryList([]);
    }
  };

  const clearList = () => {
    searchRef.current.value = '';
    setCountryList([]);
  };
  return (
    <div className='flex flex-col w-[900px]'>
      <div className='flex lg:flex-col md:flex-row justify-center items-center p-2 rounded-lg'>
        <input
          className='p-2 rounded-lg bg-white bg-opacity-30 font-bold text-center outline-none focus:border-white focus:border-2'
          placeholder='Search..'
          onChange={(e) => getCountryList(e)}
          ref={searchRef}
        />
        <div className='lg:flex lg:flex-row my-2'>
          <button
            className='ml-2 p-2 rounded-lg hover:bg-slate-200 bg-slate-300'
            onClick={clearList}
          >
            Clear
          </button>
          <button
            className='ml-2 p-2 rounded-lg hover:bg-slate-200 bg-slate-300'
            onClick={getCurrentCity}
          >
            <FaLocationCrosshairs style={{ display: 'inline' }} />
          </button>
        </div>
      </div>
      <div className='group absolute top-[155px] left-[15px] lg:top-[180px] lg:left-[563px] md:top-[175px] md:left-[235px] w-56 text-center'>
        <ul
          className={`${
            countryList.length > 0
              ? 'bg-white bg-opacity-95 shadow-md cursor-pointer'
              : null
          }  justify-center items-center p-1 rounded-lg`}
        >
          {countryList.length > 0
            ? countryList.map((country, index) => {
                return (
                  <li
                    key={index}
                    className='hover:bg-[#8EC5FC] group-hover:text-white'
                    onClick={() => {
                      setCountryList([]);
                      searchRef.current.value = '';
                      getSearchedCity(country);
                    }}
                  >
                    <FaLocationPin style={{ display: 'inline' }} /> &nbsp;
                    {country.name}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default SearchCity;
