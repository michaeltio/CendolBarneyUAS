import React, { useState, useEffect } from 'react';
import "../components/SearchButton/SearchButton.css"
import axios from 'axios';
import background from "../assets/images/sky.jpg"
import Logo from '../components/Logo/Logo';

export default function HiWeather() {
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('Tangerang Selatan');

  // OpenWeatherMap API Fetch
  useEffect(() => {
    const apiKey = '1ea38fd0717015b180411760331623ae';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
      .then(response => response.data)
      .then(data => setForecastData(data))
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });

  }, [city]);

  // Search submit
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setCity(event.target.value);
    }
  };

  //background
  const styles = {
    "backgroundImage" : `url(${background})`
  }

  return (
    <div style={styles} className='absolute top-0 left-0 h-screen w-screen bg-sky-500 text-white font-poppins z--9'>
      <div>
        <h1 className='text-5xl text-center'>Hi Weather</h1>
        <div className="group mb-6 mx-auto">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          <input
            type="text"
            id="default-input"
            className="input bg-slate-50 border border-black rounded w-48 mt-4 text-center placeholder-center text-black"
            onKeyPress={handleKeyPress}
            placeholder="Enter City..."
          />
        </div>
      </div>
      {/* Current Weather */}
      {forecastData && (
        <div className='text-center items-center mt-5'>
          <h2 className='text-5xl mb-10'>{forecastData.city.name}</h2>
          <div key={forecastData.list[0].dt}>
            {/* <img
              src={`http://openweathermap.org/img/wn/${forecastData.list[0].weather[0].icon}.png`}
              alt="Weather Icon"
              className='mx-auto w-64'
            /> */}
            <p className='text-6xl mb-10'>{forecastData.list[0].main.temp} °C</p>
            <p className='text-5xl mb-5'>{forecastData.list[0].weather[0].description}</p>
            <p className='text-5xl mb-10'>Humidity: {forecastData.list[0].main.humidity}%</p>
          </div>
        </div>
      )}
      {/* Weather Forecast */}
      {forecastData ? (
        <div className='flex sm:justify-center text-center overflow-x-auto whitespace-nowrap bg-slate-50 bg-opacity-50 backdrop-filter backdrop-blur-lg md:w-1/3 mx-auto rounded-full md:pl-20 pr-10'>
          {forecastData.list
            .filter((forecast, index) => index < 7)
            .map((forecast, index) => (
              <div className='m-3 ml-10 inline-block' key={index}>
                <h1>{forecast.dt_txt.substring(11, 16)}</h1>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt="Weather Icon"
                  className='mx-auto'
                />
                <p>{forecast.main.temp} °C</p>
                <p>{forecast.weather[0].description}</p>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading Weather Forecast...</p>
      )}
    </div>
  );
}
