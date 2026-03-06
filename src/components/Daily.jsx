import React from "react";
import { getWeatherIcon } from "../hooks/WeatherCode";

const Daily = ({ className, weather }) => {
  const days = weather.daily.time;

  function returnDay(index) {
    const date = new Date(`${days[index]}T00:00:00`);
    const formattedDay = date.toLocaleDateString("en-US", {
      weekday: "short",
    });
    return formattedDay;
  }

  return (
    <div className={`h-full ${className}`}>
      <div className="flex flex-col h-full w-full">
        <div>Daily forecast</div>
        <div className="grid grid-cols-3 min-[420px]:grid-cols-4 min-[420px]:grid-rows-2 sm:flex sm:justify-between sm:gap-3 gap-3 mt-1">
          {days.map((day, index) => (
            <div
              key={day}
              className="h-24 min-[640px]:w-14 min-[1000px]:w-20 bg-grey rounded-[10px] flex flex-col items-center justify-center pt-2 pb-2 text-sm"
            >
              <p>{returnDay(index)}</p>
              <img
                src={getWeatherIcon(weather.daily.weather_code[index])}
                alt="weather icon"
                className="w-10"
              />
              <div className="flex justify-around text-sm w-full">
                <p>{Math.floor(weather.daily.temperature_2m_max[index])}°</p>
                <p>{Math.floor(weather.daily.temperature_2m_min[index])}°</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Daily;
