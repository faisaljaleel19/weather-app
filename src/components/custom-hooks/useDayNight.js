import React, { useState, useEffect } from 'react';
import moment from 'moment';

const useDayNight = ({ lat }) => {
  const [isDayNight, setIsDayNight] = useState(false);
  const currentTime = moment();
  const sunriseTime = moment().set({ hour: 6, minute: 0 }); // Example sunrise time (6:00 AM)
  const sunsetTime = moment().set({ hour: 18, minute: 0 });

  useEffect(() => {
    if (currentTime.isBetween(sunriseTime, sunsetTime)) {
      setIsDayNight(true);
    } else {
      setIsDayNight(false);
    }
  }, [lat]);
  return { isDayNight };
};

export default useDayNight;
