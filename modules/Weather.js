  import { MiniReact } from "./react.js";
  import { Component } from "./component.js";
  import { type_check } from "./fonctions.js";

  import { config } from "../config.js";

  export class Weather extends Component {
      constructor(props) {
          super(props);
          const { city } = props;

          if (!type_check(city, "string")) {
            throw new Error("Invalid prop: 'city' must be a string.");
          }

          this.state = {
            city: city || "Paris",
            weatherData: [],
          };
          
          this.fetchWeatherData = this.fetchWeatherData.bind(this);
          this.fetchWeatherData();
      }


        fetchWeatherData() {
          console.log("test");
          const { city } = this.state;
          const apiKey = config.WEATHER_API_KEY;
      
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=FR`
          )
            .then((response) => response.json())
            .then((data) => {
              this.setState({
                weatherData: data,
              });
              console.log(this.state.weatherData);
            })
            .catch((error) => {
              console.error("Error fetching weather data:", error);
            });
        }

      render() {
          const { weatherData } = this.state;

          if (weatherData.length === 0) {
              return MiniReact.createElement(
                  "div",
                  null,
                  MiniReact.createElement("div", { id: "header" }, ""),
                  MiniReact.createElement("h2", null, "Weather Information"),
              );
          }

          const { name, sys, main, weather } = weatherData;
          const temperatureInCelsius = Math.round(main.temp - 273.15);

          const weatherInfo = `${name}, ${sys.country}: ${temperatureInCelsius}°C, ${weather[0].description}`;

      
          return MiniReact.createElement(
              "div",
              null,
              MiniReact.createElement("div", { id: "header" }, ""),
              MiniReact.createElement("h2", null, "Weather Information"),
              MiniReact.createElement("p", null, weatherInfo)
          );
      }
  }  