import "./styles.css";

function WeatherDisplay() {
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
