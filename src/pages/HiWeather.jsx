import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from "../components/Logo/Logo";

export default function HiWeather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = '1ea38fd0717015b180411760331623ae';
    const city = 'bekasi';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
      .then(response => response.data)
      .then(data => setWeatherData(data))
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div>
      <Logo />
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Conditions: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading Weather Data...</p>
      )}
    </div>
  );
}
