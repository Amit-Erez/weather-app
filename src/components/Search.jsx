import React, { useEffect, useState } from "react";
import glass from "../assets/images/icon-search.svg";

const Search = ({ setLatLong, setLocation }) => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState(null);
  const [debouncedQuery, SetDebouncedQuery] = useState("");

  // Debouncing query
  useEffect(() => {
    const timerId = setTimeout(() => {
      SetDebouncedQuery(query.trim());
    }, 400);

    return () => clearTimeout(timerId);
  }, [query]);
  // Change of debouncedQuery state triggers API fetch of matching cities
  useEffect(() => {
    if (!debouncedQuery) return;

    async function getCityId(debouncedQuery) {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${debouncedQuery}`,
      );
      const citiesList = await res.json();
      setCities(citiesList);
    }

    getCityId(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div
      className={
        "flex flex-col items-center justify-around p-4 min-h-30 gap-8 mb-4"
      }
    >
      <h1 className={"font-bricolage text-3xl md:text-4xl font-semibold"}>
        How's the sky looking today?
      </h1>
      <div className="w-full max-w-sm min-w-50">
        <div className="relative flex items-center">
          <img
            src={glass}
            alt="glass"
            className="absolute w-4 h-4 top-2.5 left-3"
          />
          <input
            className="w-full bg-grey text-sm md:text-sm rounded-md pl-12 pr-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
            placeholder="Search for a place..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            className="rounded-md bg-lightblue py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
          >
            Search
          </button>
          {query && cities?.results && (
            <div className="absolute w-75 h-40 overflow-y-auto bg-grey top-10 rounded-[10px] p-1">
              {cities.results?.map((city) => (
                <div
                  key={city.id}
                  className="hover:bg-lightgrey cursor-pointer rounded-[5px] p-1"
                  // calling function in App.jsx to set lat & long states - which triggers API search for chosen city
                  onClick={() => {
                    setLatLong(city.latitude, city.longitude);
                    setLocation(city.name, city.country);
                    setQuery("")
                  }}
                >
                  {`${city.name}, `}
                  {city.country === "United States" && `${city.admin1}, `}
                  {city.country === "United States" ? "USA" : city.country}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
