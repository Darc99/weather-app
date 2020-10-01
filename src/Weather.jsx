import React, { useState, useEffect } from "react";

import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const APIKEY = "1149e8a5ca9b315971e3230a20cdddf9";

  //   const api_call = async () => {
  //     const url = `https://api.openweathermap.org/data/2.5/weather?q={London}&appid=${APIKEY}`;
  //     const req = axios.get(url);
  //     const res = await req;
  //     console.log(res);
  //   };

  //   useEffect(() => {
  //     api_call();
  //   }, []);

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const apiUrl = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);
    if (city && country) {
      setWeather({
        data: apiUrl,
        city: apiUrl.city,
        // country: apiUrl.sys.country,
        description: apiUrl.weather[0].description,
        temperature: apiUrl.main.temp,
        error: "",
      });
    } else {
      setWeather({
        data: "",
        city: "",
        country: "",
        description: "",
        temperature: "",
        error: "Please Type A City And Country",
      });
    }
    console.log(apiUrl);
  }

  return <div> </div>;
};

export default Weather;
