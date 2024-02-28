import React, { useState, useEffect } from 'react';

const useWeatherData = ({ lat, lon }) => {
  const [loading, setLoading] = useState(true);
  const [weatherInfo, setWeatherInfo] = useState({
    main: '',
    desc: '',
    feels_like: 0,
    humidity: 0,
    max_temp: 0,
    min_temp: 0,
    current_temp: 0,
  });
  useEffect(() => {
    const Kelvin = 273.15;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setLoading(false);
          setWeatherInfo({
            main: data.weather[0].main,
            desc: data.weather[0].description,
            current_temp: Math.floor(parseInt(data.main.temp) - Kelvin),
            feels_like: Math.floor(parseInt(data.main.feels_like) - Kelvin),
            humidity: data.main.humidity,
            max_temp: Math.floor(parseInt(data.main.temp_max) - Kelvin),
            min_temp: Math.floor(parseInt(data.main.temp_min) - Kelvin),
          });
        } else {
          setWeatherInfo({
            error: 'Error Getting Weather Info',
          });
        }
      })
      .catch((error) => setWeatherInfo(error));
  }, [lat, lon]);
  return { weatherInfo, loading };
};

export default useWeatherData;
