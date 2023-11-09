import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="p-4">
      <Header />

      <LocationInput saveLocation={setLocation} />
      <p>Selected location: {location}</p>
    </div>
  );
}

export default App;
