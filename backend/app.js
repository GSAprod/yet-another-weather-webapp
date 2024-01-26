import express from "express";
import cors from "cors";
import ExampleAPI from "./services/example_api.js";
import OpenMeteoAPI from "./services/open_weather_api.js";

const app = express();

app.use(cors());

app.get("/get_weather", async (req, res) => {
  let service = new OpenMeteoAPI();

  const response = await service.get_weather();
  res.send(response[1]);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Process started in port ${process.env.PORT || 3000}`);
});
