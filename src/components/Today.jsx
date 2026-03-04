import React from "react";
import sky from "../assets/images/bg-today-large.svg";
import sun from "../assets/images/icon-sunny.webp";

const Today = ({ className }) => {
  return (
    <>
      <div className={`${className} rounded-3xl`}>
        <div
          className="h-40 w-full bg-cover bg-center rounded-[10px] flex items-center justify-between pl-8 pr-10"
          style={{ backgroundImage: `url(${sky})` }}
        >
          <div>
            <h2 className="font-bold">Berlin, Germany</h2>
            <p className="text-xs">Tuesday, Aug 8, 2025</p>
          </div>
          <div className="flex justify-center items-center">
            <figure>
              <img src={sun} alt="sun" className="w-20" />
            </figure>
            <h1 className="text-6xl italic font-semibold">68°</h1>
          </div>
        </div>
        <div className="flex w-full pt-3 gap-3">
          <div className="flex flex-col justify-between w-1/4 h-18 bg-grey rounded-[10px] p-3">
            <p className="text-[10px]">Feels like</p>
            <div className="text-lg">68°</div>
          </div>
          <div className="flex flex-col justify-between w-1/4 h-18 bg-grey rounded-[10px] p-3">
            <p className="text-[10px]">Humidity</p>
            <div className="text-lg">46%</div>
          </div>
          <div className="flex flex-col justify-between w-1/4 h-18 bg-grey rounded-[10px] p-3">
            <p className="text-[10px]">Wind</p>
            <div className="text-lg">9 mph</div>
          </div>
          <div className="flex flex-col justify-between w-1/4 h-18 bg-grey rounded-[10px] p-3">
            <p className="text-[10px]">Precipitation</p>
            <div className="text-lg">0 in</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;
