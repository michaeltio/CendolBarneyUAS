<<<<<<< Updated upstream
=======
import { useState, useEffect } from 'react';


export default function HiWeather() {
  const [weatherData, setWeatherData] = useState(null);
  


  useEffect(() => {
    const apiKey = '1ea38fd0717015b180411760331623ae';
    const city = "bekasi"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);
  
  
  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Conditions: {weatherData.weather[0].description}</p>
          <input id='inputCity' placeholder='type your city..' type='text'></input>
          <button onClick={submitCity}>submit</button>
          <p>hi</p>
        </div>
      ) : (
        <p>Loading Weather Data...</p>
      )}
    </div>
  );
  
}
>>>>>>> Stashed changes
