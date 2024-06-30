import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import imgMetadata from "./imgMetadata.json";

import Location from "./components/Location";
import WeatherDetailsArea from "./components/WeatherDetailsArea";
import CurrentWeatherArea from "./components/CurrentWeatherArea";
import TemperatureArea from "./components/TemperatureArea";
import AlertsArea from "./components/AlertsArea";
import ForecastArea from "./components/ForecastArea";
import UnsplashCredits from "./components/UnsplashCredits";
import ApiCredits from "./components/ApiCredits";
import SettingsButton from "./components/SettingsButton";
import ErrorPopup from "./components/ErrorPopup";
import LoadingPopup from "./components/LoadingPopup";
import LocationPicker from "./components/locationPicker/LocationPicker";
import SettingsModal from "./components/settingsModal/SettingsModal";
import { useSettingsContext } from "./context/SettingsContext";
import useWallpaper from "./hooks/useWallpaper";

function App() {
  const { settings } = useSettingsContext();

  const [errorData, setErrorData] = useState(undefined);
  const [weatherData, setWeatherData] = useState();
  const { wallpaper, changeWallpaper } = useWallpaper();

  const [modalOpen, setModalOpen] = useState(null);

  // Prepare the endpoint where the requests to get the weather will be made
  const backend_ip = import.meta.env.VITE_BACKEND_IP || "localhost";
  const backend_port = import.meta.env.VITE_BACKEND_PORT || 3000;
  const client = axios.create({
    baseURL: `http://${backend_ip}:${backend_port}`,
  });

  // Fetch the weather data as soon as the page loads up
  useEffect(() => {
    fetchWeatherData();
  }, []);

  // Get the background image as soon as the weather is fetched
  function getBackgroundImage() {
    // TODO Change picture depending on weather forecast
    return wallpaper.href || wallpaper.path;
  }

  function getStoredLocation() {
    let locationData = localStorage.getItem("location");
    let location;

    if (!locationData) {
      // Add a default location for the 1st access to the website
      location = {
        id: 2267057,
        latitude: 38.71667,
        longitude: -9.13333,
        name: "Lisbon",
        description: "Portugal",
      };
      localStorage.setItem("location", JSON.stringify(location));
    } else {
      location = JSON.parse(locationData);
    }
    return location;
  }

  async function fetchWeatherData(attempt = 1) {
    const location = getStoredLocation();
    try {
      const response = await client.get("/get_weather", {
        timeout: 5000 * (attempt * 0.75),
        params: {
          latitude: location.latitude,
          longitude: location.longitude,
          name: location.name + ", " + location.description,
          temp_unit: settings.temp_unit,
          speed_unit: settings.speed_unit,
        },
      });
      setWeatherData(response.data);
      setErrorData(undefined);
      changeWallpaper(
        response.data.current.condition,
        response.data.current.is_day
      );
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the 200 range
        console.log("Error: ", error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
        setWeatherData(undefined);
        setErrorData(error.response.data);
      } else if (error.request) {
        // The request was sent but no response was received
        if (attempt < 3) {
          // Request timed out. Retry with a longer timeout
          fetchWeatherData(attempt + 1);
          return;
        }
        // After 3 attempts, show an internal error
        setWeatherData(undefined);
        setErrorData({
          error: true,
          type: "internal",
          reason: "Request timed out. Please try again later.",
        });
      }
    }
  }

  function refreshWeatherData() {
    // When we want to refresh the page, instead of completely starting the entire page
    // loading process, we will just do another api request
    setWeatherData(undefined);
    setErrorData(undefined);
    fetchWeatherData();
  }

  function handleModalSubmit() {
    setModalOpen(null);
    refreshWeatherData();
  }

  return (
    <div
      className={`webapp-container p-6 border-box min-h-full flex flex-col 
      bg-cover bg-center ${
        weatherData ? "justify-between" : "justify-center"
      }`}>
      <img
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={getBackgroundImage("")}
      />

      {weatherData && !weatherData.error ? (
        <>
          <div className="grid grid-cols-5 gap-y-10 max-md:grid-cols-2">
            <div className="max-sm:col-span-2 max-sm:flex max-sm:justify-center">
              <Location
                locationName={weatherData.location}
                openPickerFunction={() => setModalOpen("location_picker")}
              />
            </div>

            <div
              className="col-span-3 row-span-2 max-md:order-2 max-md:row-span-1 
        max-md:col-span-2">
              <CurrentWeatherArea currentWeather={weatherData.current} />
            </div>

            <div className="max-md:order-2 max-md:col-span-2">
              <TemperatureArea
                maxTemp={weatherData.details.temp_max}
                minTemp={weatherData.details.temp_min}
              />
            </div>

            <div
              className="max-md:order-2 max-md:col-span-2 max-md:flex 
        max-md:justify-center max-md:mb-10">
              <WeatherDetailsArea weatherDetails={weatherData.details} />
            </div>

            <div className="max-md:order-1 max-sm:hidden">
              <AlertsArea alerts={weatherData.alerts} />
            </div>
          </div>

          <div className="grid grid-cols-5">
            <div className="flex flex-col justify-end gap-1 max-sm:col-span-4 max-sm:order-2">
              <ApiCredits
                name={weatherData.api_name}
                href={weatherData.api_url}
              />
              <UnsplashCredits
                meta={{ imageUrl: "#", authorName: "Author", authorUrl: "#" }}
              />
            </div>

            <ForecastArea forecastData={weatherData.forecast} />

            <div className="self-end justify-self-end max-sm:order-2">
              <SettingsButton
                openSettingsFunction={() => setModalOpen("settings_page")}
              />
            </div>
          </div>

          {modalOpen === "location_picker" && (
            <LocationPicker
              closeFunction={() => setModalOpen(null)}
              onSelect={handleModalSubmit}
            />
          )}

          {modalOpen === "settings_page" && (
            <SettingsModal
              onClose={() => setModalOpen(null)}
              onChanged={handleModalSubmit}
            />
          )}
        </>
      ) : errorData ? (
        <ErrorPopup
          errorData={errorData}
          refreshFunction={refreshWeatherData}
        />
      ) : (
        <LoadingPopup />
      )}
    </div>
  );
}

export default App;
