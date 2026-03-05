import React from "react";
import sky from "../assets/images/bg-today-large.svg";
import sun from "../assets/images/icon-sunny.webp";

const Today = ({ className, weather, location }) => {
  const temp = Math.floor(weather?.current?.temperature_2m);
  const feels = Math.floor(weather?.current?.apparent_temperature);
  const humidity = Math.floor(weather?.current?.relative_humidity_2m);
  const wind = weather?.current?.wind_speed_10m;
  const windUnit = weather.current_units.wind_speed_10m;
  const precipitation = weather.current.precipitation;
  const date = new Date(weather.current.time);
  const formatted = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className={`${className} rounded-3xl`}>
        <div
          className="h-40 w-full bg-cover bg-center rounded-[10px] flex items-center justify-between pl-8 pr-10"
          style={{ backgroundImage: `url(${sky})` }}
        >
          <div>
            <h2 className="font-bold">
              {location.name}, {location.country}
            </h2>
            <p className="text-xs">{formatted}</p>
          </div>
          <div className="flex justify-center items-center">
            <figure>
              <img src={sun} alt="sun" className="w-20" />
            </figure>
            <h1 className="text-6xl italic font-semibold">{temp}°</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full pt-3 gap-3">
          <div className="flex flex-col justify-between h-18 bg-grey rounded-[10px] p-3">
            <p className="text-[10px]">Feels like</p>
            <div className="text-lg">{feels}°</div>
          </div>
          <div className="flex flex-col justify-between h-18 bg-grey rounded-[10px] p-3">
            <p className="text-[10px]">Humidity</p>
            <div className="text-lg">{humidity}%</div>
          </div>
          <div className="flex flex-col justify-between h-18 bg-grey rounded-[10px] p-3">
            <p className="text-[10px]">Wind</p>
            <div className="text-lg">
              {wind}{" "}
              <span className="text-xs">
                {windUnit === "km/h" ? "km/h" : "mph"}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between h-18 bg-grey rounded-[10px] p-3">
            <p className="text-[10px]">Precipitation</p>
            <div className="text-lg">{precipitation} in</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;
