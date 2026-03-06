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
      className={`${className} grid grid-cols-1 min-[920px]:grid-cols-[2fr_1fr] min-[920px]:grid-rows-[380px_1fr] gap-4 p-12`}
    >
      <Today
        className="min-[920px]:col-start-1"
        weather={weather}
        location={location}
      />
      <Daily className="min-[920px]:col-start-1" weather={weather} />
      <Hourly className="min-[920px]:col-start-2 min-[920px]:row-start-1 min-[920px]:row-span-2" weather={weather} />
    </div>
  );
};

export default Results;
