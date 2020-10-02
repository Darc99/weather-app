import React, { useState, useEffect } from "react";

import axios from "axios";

const Weather = () => {
  // const [weather, setWeather] = useState([]);
  const [feelsLike, setFeelsLike] = useState("");
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState("");
  const [iconID, setIconID] = useState("");

  const APIKEY = "1149e8a5ca9b315971e3230a20cdddf9";
  const [location, setLocation] = useState("London");
  const [country, setCountry] = useState("uk");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeelsLike(data.main.feels_like);
        setMainTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setMain(data.weather[0].main);
        setIconID(data.weather[0].icon);
        setLocation(data.name);
      });
  }, [location, country]);

  return <div> </div>;
};

export default Weather;
