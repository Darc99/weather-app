import React, { useState, useEffect } from "react";
import Result from "./Result";

import axios from "axios";

const Weather = () => {
  // const [weather, setWeather] = useState([]);
  const [feelsLike, setFeelsLike] = useState("");
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState("");
  const [iconID, setIconID] = useState("");

  const APIKEY = process.env.REACT_APP_API_KEY;
  const [location, setLocation] = useState("Lagos");
  const [country, setCountry] = useState("Nigeria");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFeelsLike(data.main.feels_like);
        setMainTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setMain(data.weather[0].main);
        setIconID(data.weather[0].icon);
        setLocation(data.name);
        setCountry(data.sys.country);
      });
  }, [location, country]);

  return (
    <div>
      {/* <Result setFeelsLike={setFeelsLike} /> */}
      <h1>{setMain}</h1>
    </div>
  );
};

export default Weather;
