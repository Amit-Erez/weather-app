import React from "react";
import glass from "../assets/images/icon-search.svg";

const Search = () => {
  return (
    <div className={"flex flex-col items-center justify-around p-4 min-h-40 gap-4"}>
      <h1 className={"font-bricolage text-3xl md:text-4xl"}>
        How's the sky looking today?
      </h1>
      <div class="w-full max-w-sm min-w-50">
        <div class="relative flex items-center">
            <img src={glass} alt="glass" class="absolute w-4 h-4 top-2.5 left-3"/>
          <input
            class="w-full bg-grey text-sm md:text-sm rounded-md pl-12 pr-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
            placeholder="Search for a place..."
          />

          <button
            class="rounded-md bg-lightblue py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
