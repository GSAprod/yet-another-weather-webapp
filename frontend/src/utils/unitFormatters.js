export function formatTemperatureUnit(input) {
    const temperatureUnits = {
        C: "º C",
        F: "º F",
        K: " K"
    }
    return temperatureUnits[input];
}

export function formatSpeedUnit(input) {
    const speedUnits = {
        kmh: "km/h",
        mph: "mph",
        kn: "knots",
    }
    return speedUnits[input];
}