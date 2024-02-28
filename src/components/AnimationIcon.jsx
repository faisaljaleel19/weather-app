import React, { useRef, useEffect, Suspense, useState } from 'react';
import Clouds from '../assets/Clouds.json';
import ClearNight from '../assets/ClearNight.json';
import FewClouds from '../assets/FewClouds.json';
import Sunny from '../assets/Sunny.json';
import CloudDay from '../assets/CloudDay.json';
import RainDay from '../assets/RainDay.json';
import RainNight from '../assets/RainNight.json';
import Snow from '../assets/Snow.json';
import Haze from '../assets/Haze.json';
import NotAvailable from '../assets/NotAvailable.json';

import lottie from 'lottie-web';
import Skeleton from 'react-loading-skeleton';
import useDayNight from './custom-hooks/useDayNight';
import 'react-loading-skeleton/dist/skeleton.css';

const AnimationIcon = ({ weatherIcon, day_status, country }) => {
  const container = useRef(null);

  const getWeatherIcon = (icon) => {
    console.log('icon ', icon);
    console.log('day_status ', day_status);
    let animationData = '';
    switch (icon) {
      case 'Clear':
        animationData = day_status ? Sunny : ClearNight;
        break;

      case 'Clear Night':
        animationData = ClearNight;
        break;

      case 'Clouds':
        animationData = day_status ? CloudDay : Clouds;
        break;

      case 'Rain':
        animationData = day_status ? RainDay : RainNight;
        break;

      case 'Snow':
        animationData = Snow;
        break;

      case 'Haze':
        animationData = Haze;
        break;

      case 'Mist':
        animationData = Haze;
        break;

      default:
        animationData = NotAvailable;
        break;
    }
    return animationData;
  };

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: getWeatherIcon(weatherIcon),
    });
    // console.log("Animtaion Lottie Called");
    return () => instance.destroy();
  }, [weatherIcon]);

  return (
    <Suspense fallback={<Skeleton circle={true} />}>
      <div ref={container} className='w-40 h-40'></div>
    </Suspense>
  );
};

export default AnimationIcon;
