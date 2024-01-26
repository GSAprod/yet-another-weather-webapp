import WeatherTestObject from "../examples/weatherobjectexample.json" assert { type: "json" };

export default class ExampleAPI {
    get_weather() {
        return [200, WeatherTestObject];
    }
}