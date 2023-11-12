import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";
import Location from "./components/Location";
import WeatherDetailsArea from "./components/WeatherDetailsArea";
import CurrentWeatherArea from "./components/CurrentWeatherArea";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="p-4">
      <Header />

      <LocationInput saveLocation={setLocation} />

      <br />
      <Location locationName={location} />
      <br />
      <br />

      <WeatherDetailsArea />

      <br />
      <br />

      <CurrentWeatherArea />
    </div>
  );
}

export default App;
