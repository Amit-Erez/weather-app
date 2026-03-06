import React from "react";

const DayDropdown = ({ isDayOpen, returnDay, setSelectedDay, days, handleDayClick }) => {
  return (
    <div
      className={`absolute top-10 right-0 w-28 bg-grey rounded-[10px] p-2 drop-shadow-2xl border-lightgrey  transition-all duration-300 ${isDayOpen ? "h-68 opacity-100" : "h-0 opacity-0"} overflow-hidden`}
    >
      {Array.from({length: 7}, (_, index) => (
      <div key={index} className=" flex items-center justify-between hover:bg-lightgrey text-sm p-2 rounded-[5px]"
      onClick={() => {setSelectedDay(days[index]);
        handleDayClick();
      }}>
        <p>{returnDay(index)}</p>
      </div>
      ))}

    </div>
  );
};

export default DayDropdown;
