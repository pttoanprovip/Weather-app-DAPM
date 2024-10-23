import "./styles.css";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  function handleSearch(input) {
    setCity(input);
  }

  return (
    <div >
      
      <Search onSearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
