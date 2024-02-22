// WeatherApp.js
import React, { useState } from 'react';
import axios from 'axios';
import './WeatherApp.css'; // Import the CSS file for styling

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiEndpoint = 'https://api.api-ninjas.com/v1/weather?city=';
  const apiKey = 'iEdaAEbXun3EMH+1fIVwfw==8pDSLbv4K566WmQN';

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`${apiEndpoint}${city}`, {
        headers: {
          'x-api-key': apiKey,
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="weather-app">
      <h1>Weather Wave</h1>
      <h3>"Surfing the Skies for Instant Forecast Insights."</h3><br/>
      <form onSubmit={handleSubmit} className='label-input-container'>
        <label>
          Enter City 
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <button type="submit">Get Weather</button>
        
      </form>
      

      {weatherData && (
    
        <div className="weather-info">
          <h2>{weatherData.city}</h2>
          <p>{city}<img src='https://clipart-library.com/img/272220.png'/></p>
          <p><i class="fa-solid fa-sun fa-beat"></i> {weatherData.temp} °C</p>
          <p><i class="fa-solid fa-wind fa-beat"></i> {weatherData.wind_speed} m/s</p>
         
          <p><i class="fa-solid fa-cloud-sun-rain fa-beat"></i> {weatherData.humidity}%</p>
          <p><i class="fa-solid fa-cloud fa-beat"></i> {weatherData.cloud_pct}%</p>
          <p><i class="fa-solid fa-temperature-three-quarters fa-beat"></i>{weatherData.feels_like} °C</p>
         
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
