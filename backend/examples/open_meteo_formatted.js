const a = {
    location: 'Lisbon, Portugal',
    current: { epoch_sec: 1706264100, temp: 12.1, condition: 'cloudy' },
    details: {
      humidity: 83,
      wind_speed: 5.9,
      wind_direction: 'NE',
      chance_of_rain: 0,
      uv_index: 3.2,
      temp_max: 17.7,
      temp_min: 9.6
    },
    alerts: {},
    forecast: [
      {
        epoch_sec: 1706313600,
        condition: 'cloudy',
        temp_max: 18.5,
        temp_min: 9
      },
      {
        epoch_sec: 1706400000,
        condition: 'cloudy',
        temp_max: 16.5,
        temp_min: 11.9
      },
      {
        epoch_sec: 1706486400,
        condition: 'drizzle',
        temp_max: 17.3,
        temp_min: 10.3
      },
      {
        epoch_sec: 1706572800,
        condition: 'foggy',
        temp_max: 17.3,
        temp_min: 12.6
      },
      {
        epoch_sec: 1706659200,
        condition: 'cloudy',
        temp_max: 18.4,
        temp_min: 13.3
      },
      {
        epoch_sec: 1706745600,
        condition: 'partly-cloudy',
        temp_max: 18.6,
        temp_min: 12.4
      }
    ],
    api_name: 'Open-Meteo API',
    api_url: 'https://open-meteo.com/'
  }