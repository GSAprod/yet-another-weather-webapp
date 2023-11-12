import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";
import Location from "./components/Location";
import WeatherDetailsArea from "./components/WeatherDetailsArea";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="p-4">
      <Header />

      <p>{location}</p>
      <LocationInput saveLocation={setLocation} />

      <br />
      <Location locationName={location} />
      <br /><br />

      <WeatherDetailsArea />
    </div>
  );
}

export default App;
