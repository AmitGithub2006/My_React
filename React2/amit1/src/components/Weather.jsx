import React, { useState } from "react";
import { useEffect } from "react";
const axios = require("axios").default;

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  async function getWeatherData(cityName) {
    try {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/current.json",
        {
          params: {
            key: "aa2efebe1c7b459a96e173040222809",
            q: `${cityName}`,
          },
        }
      );
      console.log(response);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    getWeatherData(city);
  };

  return (
    <>
      <input
        placeholder="City Name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleClick}>Fetch</button>
      {weatherData.location ? (
        <>
          <p>
            Temp : {weatherData.current.temp_c} <sup>o</sup>C
          </p>
          <p>Latitude : {weatherData.location.lat}</p>
        </>
      ) : (
        <p>Please enter city name.</p>
      )}
    </>
  );
};

// export default Weather;
