import sun from "../assets/images/icon-sunny.webp";
import partCloud from "../assets/images/icon-partly-cloudy.webp"
import overCast from "../assets/images/icon-overcast.webp"
import fog from "../assets/images/icon-fog.webp"
import drizzle from "../assets/images/icon-drizzle.webp"
import rainy from "../assets/images/icon-rain.webp"
import snow from "../assets/images/icon-snow.webp"
import storm from "../assets/images/icon-storm.webp"
 
 export function getWeatherIcon(code) {
    console.log(code)
  if (code === 0 || code === 1) return sun;
  if (code === 2) return partCloud;
  if (code === 3) return overCast;
  if (code === 45) return fog;
  if (51 <= code <= 57) return drizzle;
  if (61 <= code <= 67) return rainy;
  if (71 <= code <= 77) return snow;
  if (80 <= code <= 81 || code === 95) return storm;
}