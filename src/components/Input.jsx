import React from "react";
import { useWeather } from "../Context/Weather";

const Input = () => {
  const weather = useWeather();
  // console.log("weather ", weather);

  return (
    <input
      type="text"
      className="input-field"
      placeholder="Enter City"
      value={weather.searchcity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
