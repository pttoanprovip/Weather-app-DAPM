import { useEffect, useState } from "react";
import "./styles.css";

function WeatherDisplay(props) {
    const [weather , setWeather] = useState(null);
    useEffect (() => {
        const featchWeather = async () =>{
            const API_Key = "01806323009c06702ba3db6c70d586c5";
            const url = "https://api.openweathermap.org/data/2.5/"; 

            try {
                const response = await fetch(`${url}weather?q=${props.city}&appid=${API_Key}&units=metric`);
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("message", error.message);
            }
        }
        featchWeather();
    }, );










  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-80 bg-gray-800 text-white rounded-lg shadow-xl">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold">HCM</h1>
              <p className="text-sm capitalize">Sunny</p>
            </div>
            <div className="mt-4">
              <p className="text-6xl font-bold">32°C</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <div className="w-16 h-16 bg-gray-600 rounded-full mb-4">
              {/* img */}
            </div>
            <div className="text-sm space-y-2 text-right">
              <p>Humidity: 12%</p>
              <p>Wind: 100 m/s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
