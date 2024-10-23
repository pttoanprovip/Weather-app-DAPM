/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles.css";
import ForecastDisplay from "./ForecastDisplay";

function WeatherDisplay({city}) {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const featchWeather = async () => {
      const API_Key = "01806323009c06702ba3db6c70d586c5";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("message: ", error.message);
      }
    };
    featchWeather();
  }, [city]);

  if (!weather) {
    return <p className="text-center">Please</p>;
  }

  if (!weather.weather || weather.weather.length === 0) {
    return (
      <p className="text-center">
          Please enter your city
      </p>
    );
  }

  function getCurrentDate(){
    const currentdate = new Date().toLocaleDateString();
    return currentdate;
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="p-4 w-3/6 h-72 bg-gray-800 text-white rounded-lg shadow-xl">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <div className="mb-4">
                <h1 className="text-2xl font-semibold">{weather.name}</h1>
                <p className="text-sm capitalize">
                  {weather.weather[0].description}
                </p>
                <p>{getCurrentDate()}</p>
              </div>
              <div className="mt-6 top-10">
                <p className="text-6xl font-bold ">
                  {Math.floor(weather.main.temp - 273.15)}°C
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <div className="w-16 h-16 bg-gray-600 rounded-full mb-4">
                <img src="../images/sun.jpg" className="rounded-full"/>
              </div>
              <div className="text-sm space-y-2 text-right">
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind: {Math.round(weather.wind.speed)} m/s</p>
              </div>
            </div>
          </div>
      </div>
      <div>
        <ForecastDisplay/ >
      </div>
    </div>
  );
}

export default WeatherDisplay;
