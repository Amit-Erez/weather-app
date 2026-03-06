import React, { useState } from "react";
import DayDropdown from "./DayDropdown";
import chooseIcon from "../assets/images/icon-dropdown.svg";
import { getWeatherIcon } from "../hooks/WeatherCode";

const Hourly = ({ className, weather }) => {
  const [isDayOpen, setIsDayOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(weather.daily.time[0]);

  if (!weather?.hourly) return null;
  const days = weather.daily.time;

  function returnDay(index) {
    const date = new Date(`${days[index]}T00:00:00`);
    const formattedDay = date.toLocaleDateString("en-US", {
      weekday: "long",
    });
    return formattedDay;
  }

  function handleDayClick() {
    setIsDayOpen((prev) => !prev);
  }

  const filteredTimes = weather.hourly.time.filter((time) =>
    time.startsWith(selectedDay),
  );
  const hourlyData = filteredTimes.map((time) => {
    const index = weather.hourly.time.indexOf(time);
    const temp = weather.hourly.temperature_2m[index];
    const code = weather.hourly.weather_code[index];
    return { time, temp, code };
  });

  function formatHour(time) {
    const date = new Date(time);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
  }

  return (
    <div
      className={`bg-grey rounded-[10px] p-2 flex flex-col justify-between h-97 overflow-hidden ${className}`}
    >
      <div className="flex flex-1 min-h-0 flex-col">
        <div className="flex justify-between items-center p-2 rounded-[10px]">
          <div className="font-semibold mr-2">Hourly</div>
          <div
            className={
              "relative flex items-center justify-around bg-lightgrey p-1 sm:p-2 rounded-[10px] w-28 h-9 cursor-pointer"
            }
          >
            <div className="text-sm mr-2">
              {new Date(`${selectedDay}T00:00:00`).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </div>
            <figure
              onClick={() => setIsDayOpen((prev) => !prev)}
              className={`${isDayOpen && "rotate-180"} transition-transform duration-300`}
            >
              <img src={chooseIcon} alt="choose day" />
            </figure>
            <DayDropdown
              {...{
                isDayOpen,
                returnDay,
                setSelectedDay,
                days,
                handleDayClick,
              }}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center overflow-hidden">
          <div className="w-full min-h-0 pl-1.5 pr-2 overflow-y-scroll">
            {hourlyData.map((hour) => (
              <div
                key={hour.time}
                className="flex items-center justify-between w-full h-9 bg-lightgrey rounded-[10px] pl-2 pr-4 mt-1 "
              >
                <div className="flex items-center justify-center">
                  <img
                    src={getWeatherIcon(hour.code)}
                    alt=""
                    className="w-7 mr-5"
                  />
                  <div className="mr-5 min-w-10.75">
                    {formatHour(hour.time)}
                  </div>
                </div>
                <div>{Math.floor(hour.temp)}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hourly;
