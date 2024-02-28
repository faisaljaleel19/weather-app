import React, { useState, useEffect } from 'react';

const useLocation = () => {
  const [locationInfo, setLocationInfo] = useState({
    latitude: 0,
    longitude: 0,
    location: '',
    error: '',
    loading: false,
  });

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;
    let latitude = parseFloat(crd.latitude).toFixed(4);
    let longitude = parseFloat(crd.longitude).toFixed(4);
    getLocationInfo(latitude, longitude);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  function getLocationInfo(latitude, longitude) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${
      import.meta.env.VITE_GEO_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          setLocationInfo({
            latitude: latitude,
            longitude: longitude,
            location: data.results[0].components.city,
          });
        } else {
          setLocationInfo({ error: 'Reverse geolocation request failed.0' });
        }
      })
      .catch((error) => setLocationInfo({ error: error }));
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          if (result.state === 'granted') {
            console.log('granted');
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === 'prompt') {
            console.log('prompt');
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === 'denied') {
            console.log('denied');
          }
        });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);
  return locationInfo;
};

export default useLocation;
