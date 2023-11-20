import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";
import Location from "./components/Location";
import WeatherDetailsArea from "./components/WeatherDetailsArea";
import CurrentWeatherArea from "./components/CurrentWeatherArea";
import TemperatureArea from "./components/TemperatureArea";
import AlertsArea from "./components/AlertsArea";

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
      <br />
      <br />

      <TemperatureArea maxTemp="20º C" minTemp="5º C" />

      <br /><br />

      <AlertsArea />

      <br /><br />
      
    </div>
  );
}

export default App;
