import React from "react";
import Today from "./Today";
import Daily from "./Daily";
import Hourly from "./Hourly";
import loading from "../assets/images/icon-loading.svg";

const Results = ({ className, weather, location }) => {
  if (!weather)
    return (
      <div
        className={`${className} relative h-full w-full bg-grey rounded-2xl animate-pulse border-2`}
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
      className={`${className} grid grid-cols-1 min-[812px]:grid-cols-[2fr_1fr] gap-4 p-2`}
    >
      <Today
        className="md:col-start-1"
        weather={weather}
        location={location}
      />
      <Daily className="md:col-start-1" weather={weather} />
      <Hourly className="md:col-start-2 md:row-start-1 md:row-span-2" weather={weather} />
    </div>
  );
};

export default Results;
