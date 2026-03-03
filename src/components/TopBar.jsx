import React from "react";
import logo from "../assets/images/logo.svg";
import unitsIcon from "../assets/images/icon-units.svg";
import chooseIcon from "../assets/images/icon-dropdown.svg"

const TopBar = () => {
  return (
    <div className={'flex items-center justify-between '}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className={'flex items-center justify-around bg-grey p-2 rounded-[10px] w-28 cursor-pointer'}>
        <figure>
          <img src={unitsIcon} alt="logo" />
        </figure>
        <p>Units</p>
        <figure>
            <img src={chooseIcon} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default TopBar;
