import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from "../components/Logo/Logo";
import { data } from 'autoprefixer';

export default function HiWeather() {
  const [forecastData, setForecastData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('bekasi');

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
      console.log(forecastData);

  }, [city]);

  // Search submit
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setCity(event.target.value);
    }
  };

  return (
    <div>
      <div className='flex'>
        <Logo />
        <div className="mb-6">
          <input
            type="text"
            id="default-input"
            className="bg-slate-50 border border-black rounded"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter text..."
          />
        </div>
      </div>
      <div>
       
       
      </div>
      {/*Weather ForeCast */}
      {forecastData ? (
        <div className='flex'>
          {forecastData.list
            .filter((forecast, index) => index < 7)
            .map((forecast, index) => (
              <div key={index}>
                <p>{forecast.dt_txt}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt="Weather Icon"
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
