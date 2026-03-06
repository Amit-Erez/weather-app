import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import unitsIcon from "../assets/images/icon-units.svg";
import chooseIcon from "../assets/images/icon-dropdown.svg"
import Dropdown from "./Dropdown";

const TopBar = ({setUnits}) => {
  const [isOpen, setIsOpen] = useState(false)

  function openClose() {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={'flex items-center justify-between mb-16 mt-4'}>
      <figure>
        <img src={logo} alt="logo" className="w-30 sm:w-40"/>
      </figure>
      <div className={'relative flex items-center justify-around bg-grey p-1 sm:p-2 rounded-[10px] w-16 sm:w-28 h-9 cursor-pointer'}
      >
        <figure>
          <img src={unitsIcon} alt="settings" />
        </figure>
        <p className="hidden sm:block">Units</p>
        <figure>
            <img src={chooseIcon} alt="" onClick={() => openClose()} className={`${isOpen && 'rotate-180'} transition-transform duration-300`}/>
        </figure>
        <Dropdown isOpen={isOpen} setUnits={setUnits}/>
      </div>
    </div>
  );
};

export default TopBar;
