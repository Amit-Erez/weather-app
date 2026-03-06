import { useEffect, useState, useRef } from "react";
import Results from "./components/Results";
import Search from "./components/Search";
import TopBar from "./components/TopBar";

function App() {
  const [tempUnits, setTempUnits] = useState("celsius");
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [city, setCity] = useState({ name: "", country: "" });
  const [weather, setWeather] = useState(null);
  const geoSetRef = useRef(false);

  function setLatLong(latValue, longValue) {
    setLat(latValue);
    setLong(longValue);
    geoSetRef.current = true; // Mark that user has set location
  }

  function setLocation(city, country) {
    setCity({ name: city, country: country });
  }

  useEffect(() => {
    if (
      !geoSetRef.current &&
      lat === null &&
      long === null &&
      "geolocation" in navigator
    ) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);

          // Reverse geocode to get city and country
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          );
          const data = await res.json();
          setLocation(
            data.address.city || data.address.town || "Unknown",
            data.address.country || "Unknown",
          );
          geoSetRef.current = true; // Mark that geolocation has set location
        },
        (error) => {
          console.error("Geolocation error:", error);
        },
      );
    }
  }, []);

  useEffect(() => {
    if (!lat || !long) return;

    async function getWeather(lat, long, tempUnits) {
      const apiLink = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m,apparent_temperature,precipitation,rain,snowfall,weather_code,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,precipitation&timezone=auto`;
      const apiLinkF = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m,apparent_temperature,precipitation,rain,snowfall,weather_code,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,precipitation&timezone=auto&temperature_unit=fahrenheit&wind_speed_unit=mph`;

      const res = await fetch(tempUnits === "celsius" ? apiLink : apiLinkF);
      const data = await res.json();
      console.log(data);
      setWeather(data);
    }

    getWeather(lat, long, tempUnits);
  }, [lat, long, tempUnits]);

  function setUnits(unit) {
    setTempUnits(unit);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-blue">
        <div className="w-full max-w-6xl pl-8 pr-8 sm:pl-16 sm:pr-16 pt-4 pb-4 flex flex-col flex-1 min-h-0 bg-blue">
          <TopBar setUnits={setUnits} />
          <Search setLatLong={setLatLong} setLocation={setLocation} />
          <Results className="flex-1 min-h-0" weather={weather} location={city} />
        </div>
      </div>
    </>
  );
}

export default App;
