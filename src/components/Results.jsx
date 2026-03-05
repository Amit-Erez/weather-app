import React from "react";
import Today from "./Today";
import Daily from "./Daily";
import Hourly from "./Hourly";
import loading from "../assets/images/icon-loading.svg";

const Results = ({ className, weather, location }) => {
  if (!weather)
    return (
      <div
        className={`${className} relative grid grid-cols-[2fr_1fr] grid-rows-[2fr_1fr] gap-4 p-2 bg-grey rounded-2xl animate-pulse`}
      >
        <img
          src={loading}
          alt="loading"
          className="absolute w-10 h-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-spin"
        />
      </div>
    );

  return (
    <div
      className={`${className} grid md:grid-cols-[2fr_1fr] md:grid-rows-[2fr_1fr] grid-cols-1 grid-rows-3 gap-4 p-2`}
    >
      <Today
        className="md:col-1 md:row-1"
        weather={weather}
        location={location}
      />
      <Daily className="md:col-1 md:row-2" weather={weather} />
      <Hourly className="md:col-2 md:row-span-2" weather={weather} />
    </div>
  );
};

export default Results;
