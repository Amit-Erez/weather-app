import React, { useState } from "react";
import checkmark from "../assets/images/icon-checkmark.svg";

const Dropdown = ({ isOpen, setUnits }) => {
  const [selected, setSelected] = useState("celsius");

  return (
    <div
        className={`absolute top-10 right-0 w-40 bg-grey rounded-[10px] transition-all duration-300 ${isOpen ? "h-18 opacity-100" : "h-0 opacity-0"} overflow-hidden`}
    >
      <div
        className="flex items-center justify-between hover:bg-lightgrey text-sm p-2"
        onClick={() => {
          setSelected("celsius");
          setUnits("celsius");
        }}
      >
        <p>Celsius, km/h</p>
        {selected === "celsius" && <img src={checkmark} alt="" />}
      </div>
      <div
        className="flex items-center justify-between hover:bg-lightgrey text-sm p-2"
        onClick={() => {
          setSelected("fahrenheit");
          setUnits("fahrenheit");
        }}
      >
        <p>Fahrenheit, mph</p>
        {selected === "fahrenheit" && <img src={checkmark} alt="" />}
      </div>
    </div>
  );
};

export default Dropdown;
