/* eslint-disable react/prop-types */
import "./styles.css";
import { useState, useEffect } from "react";

function ForecastDisplay({ city }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const API_Key = "01806323009c06702ba3db6c70d586c5";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const dayliData = data.list
          .filter((reading) => reading.dt_txt.includes("12:00:00"))
          .slice(0, 4);
        setForecast(dayliData);
      } catch (error) {
        console.error("message: ", error.message);
      }
    };
    fetchForecast();
  }, [city]);

  return (
    <div className="flex space-x-4 mt-4">
      {forecast.map((day, index) => (
        <div className="text-center bg-gray-300 p-4 w-28 rounded-md" key={index}>
          <h3>{new Date(day.dt_txt).toLocaleDateString()}</h3>
          <p>{Math.round(day.main.temp - 273.15)}°C</p>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );  
}

export default ForecastDisplay;
