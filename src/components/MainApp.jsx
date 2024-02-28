import React, { useState } from 'react';
import Card from './Card';
import WeatherComponent from './WeatherComponent';
import useLocation from './custom-hooks/useLocation';
import useWeatherData from './custom-hooks/useWeatherData';
import WeatherDetails from './WeatherDetails';
import SearchCity from './SearchCity';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AppTitle from './AppTitle';
import useDayNight from './custom-hooks/useDayNight';

const MainApp = () => {
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const { longitude, latitude, location } = useLocation();
  const { weatherInfo, loading } = useWeatherData({
    lat: lat !== 0 ? lat : latitude,
    lon: lon !== 0 ? lon : longitude,
  });
  const { isDayNight } = useDayNight({ lat: lat !== 0 ? lat : latitude });

  const getSearchedCity = (country) => {
    setCountry(country.name);
    setLat(country.lat);
    setLon(country.lon);
  };

  const getCurrentCity = () => {
    setCountry('');
    setLat(0);
    setLon(0);
  };

  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] px-28 py-10'>
      <AppTitle />
      <SearchCity
        getSearchedCity={getSearchedCity}
        getCurrentCity={getCurrentCity}
      />
      <>
        <Card title={country !== '' ? country : location}>
          {!loading ? (
            <WeatherComponent
              main={weatherInfo.main}
              desc={weatherInfo.desc}
              current_temp={weatherInfo.current_temp}
              day_status={isDayNight}
              country={country !== '' ? country.name : location}
            />
          ) : (
            <Skeleton count={6} containerClassName='flex-1' />
          )}
        </Card>
        <Card title={'Weather Details'}>
          {!loading ? (
            <WeatherDetails
              feels_like={weatherInfo.feels_like}
              humidity={weatherInfo.humidity}
              min_temp={weatherInfo.min_temp}
              max_temp={weatherInfo.max_temp}
            />
          ) : (
            <Skeleton count={6} containerClassName='flex-1' />
          )}
        </Card>
      </>
    </div>
  );
};

export default MainApp;
