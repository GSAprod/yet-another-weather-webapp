import express from 'express';
import WeatherTestObject from './examples/weatherobjectexample.json' assert {type: "json"};

const app = express();

app.get("/get_weather", (req, res) => {
    res.send(WeatherTestObject);
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Process started in port ${process.env.PORT || 3000}`);
})