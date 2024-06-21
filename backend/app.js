import express, { response } from "express";
import cors from "cors";
import ExampleAPI from "./services/example_api.js";
import OpenMeteoAPI from "./services/open_weather_api.js";

const app = express();

app.use(cors());

app.get("/get_weather", async (req, res) => {
  let service = new OpenMeteoAPI();

  let locationParams = {
    name: req.query.name,
    latitude: req.query.latitude,
    longitude: req.query.longitude,
  }

  let optionParams = {
    temp_unit: req.query.temp_unit,
    speed_unit: req.query.speed_unit,
  }

  const response = await service.get_weather(locationParams, optionParams);
  res.status(response[0]).send(response[1]);
});

app.get("/search_location", async (req, res) => {
  let service = new OpenMeteoAPI();
  const searchTerm = req.query.name;

  const response = await service.search_geolocations(searchTerm);
  res.status(response[0]).send(response[1]);
})

app.listen(process.env.PORT || 3000, process.env.IP || "localhost", () => {
  console.log(`Process started in ${process.env.IP || "localhost"}:${process.env.PORT || 3000}`);
});
