import React, { useState } from "react";
import DayDropdown from "./DayDropdown";
import chooseIcon from "../assets/images/icon-dropdown.svg";
import partCloud from "../assets/images/icon-partly-cloudy.webp"

const Hourly = ({ className, weather }) => {
  const [isDayOpen, setIsDayOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState(weather.daily.time[0]);

  const days = weather.daily.time;

  function returnDay(index) {
    const date = new Date(`${days[index]}T00:00:00`);
    const formattedDay = date.toLocaleDateString("en-US", {
      weekday: "long",
    });
    return formattedDay;
  }

  function handleDayClick() {
    setIsDayOpen(prev => !prev)
  }


  return (
    <div className={`bg-grey rounded-[10px] p-2 flex flex-col justify-between ${className}`}>
      <div className="flex justify-between items-center p-2 rounded-[10px]">
        <div className="font-semibold mr-2">Hourly</div>
        <div
          className={
            "relative flex items-center justify-around bg-lightgrey p-1 sm:p-2 rounded-[10px] w-28 h-9 cursor-pointer"
          }
        >
          <div className="text-sm mr-2">{new Date(`${selectedDay}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
  })}</div>
          <figure onClick={() => setIsDayOpen(prev => !prev)}
            className={`${isDayOpen && 'rotate-180'} transition-transform duration-300`}>
            <img src={chooseIcon} alt="choose day" />
          </figure>
          <DayDropdown isDayOpen={isDayOpen} returnDay={returnDay} setSelectedDay={setSelectedDay} days={days} handleDayClick={handleDayClick}/>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center">

      {Array.from({length: 8}, (_, i) => (
        <div key={i} className="flex items-center w-full h-9 bg-lightgrey rounded-[10px] pl-2 pr-2 mt-1">
          <img src={partCloud} alt="" className="w-7" />
        </div>  
      )
      )}
      </div>
    </div>
  );
};

export default Hourly;
