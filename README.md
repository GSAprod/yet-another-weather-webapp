# Yet Another Weather Webapp

Yet Another Weather Webapp provides a clean User Interface that allows you to view the weather in a simple and intuitive way. It contains only the most relevant information related to the current forecasts, presented on top of a dynamic wallpaper, that changes depending on the weather condition.

![Main dashboard of Yet Another Weather Webapp, displaying Foggy weather forecast](./readme-img/weatherapp-foggy.png)

<p float="left">
  <img src="./readme-img/weatherapp-sunny.png" width="49.5%" alt="Main dashboard of Yet Another Weather Webapp, displaying Sunny weather forecast" />
  <img src="./readme-img/weatherapp-cloudy.png" width="49.5%" alt="Main dashboard of Yet Another Weather Webapp, displaying Cloudy weather forecast" />
</p>

## Main features

- Select your preferred location by typing the city and selecting from the list of results:
  ![Location selection using a list of search results](readme-img/weatherapp-location.png)

- Change the main units of temperature and speed:
  ![Seetings page showing options for setting the units of temperature and speed](readme-img/weatherapp-settings.png)

- Dynamically changing wallpaper depending on current weather status

## Configuration

Clone this project onto a folder of your choice using this command, then navigate into the newly created directory:

```
git clone https://github.com/GSAprod/yet-another-weather-webapp.git
cd yet-another-weather-webapp
```

### Back-end configuration

The steps below should be executed while in the [backend](./backend/) directory.

#### Environment Variables

Make a copy of the [`example.env`](./backend/example.env) file and name it `.env`. Then edit the copied file by filling in all required variables.

Here's a list of the most important variables in the `.env` file:

- The `IP` and `PORT` variables determine the default endpoint of the backend server. If omitted, the server is run on address `localhost:3000`.

- Access to the Unsplash API is required in order to fetch the images for the background of the weather app. To do this, [sign up for a new Unsplash account](https://unsplash.com/join) if you don't already have one, then [register a new application](https://unsplash.com/oauth/applications) in order to get the needed credentials to access the API. Then copy the access key onto the `UNSPLASH_ACCESS_KEY` environment variable.

#### Installing dependencies

Install all dependencies for the back-end server by running the command below:

```
npm install
```

### Front-end configuration

The steps below must be executed while in the [frontend](./frontend/) directory.

#### Environment variables

Similarly to the back-end configuration, the front-end folder contains an `example.env` template file. Make a new copy of this file and name it `.env`, then fill all required fields. Some important variables in this file are:

- The `VITE_BACKEND_IP` and `VITE_BACKEND_PORT` variables - these should have the same value compared to the `IP` and `PORT` variables in the [back-end's env file](#environment-variables), respectively.

#### Installing dependencies

Use `npm` to install all dependencies needed for the front-env server:

```
npm install
```

## Running the project

Open a terminal and navigate to the [backend](./backend/) directory. Then start the back-end server by running the following command:

```
npm run dev
```

Then, using a second terminal, run the front-end server by navigating to the [frontend](./frontend/) directory and executing the same command:

```
npm run dev
```

Congratulations! You should see the weather app running after opening a browser and navigating to [localhost:8000](http://localhost:8000/)!

## License

[GNU GPLv3](./LICENSE.txt)
