import WeatherTestObject from "../examples/weatherobjectexample_json.js";

export default class ExampleAPI {
    get_weather() {
        return [200, WeatherTestObject];
    }
}