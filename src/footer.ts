let userLatitude: string;
let userLongitude: string;

const footerText = document.querySelector(".footer") as HTMLDivElement;

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

let hour: string = hours < 10 ? `0${hours}` : `${hours}`;
let minute: string = minutes < 10 ? `0${minutes}` : `${minutes}`;

async function getWeatherInfo() {
  const response = await fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${userLatitude}&lon=${userLongitude}&units=metric`
  );
  const weather = await response.json();
  footerText.innerHTML = `Location: ${weather.name} | Temperature: ${weather.main.temp} °C; | Time: ${hour}:${minute}`;
}

export const getPosition = (position: GeolocationPosition) => {
  userLatitude = parseFloat(position.coords.latitude.toString()).toFixed(2);
  userLongitude = parseFloat(position.coords.longitude.toString()).toFixed(2);
  getWeatherInfo();
};

export const errorPositionFetch = (error: GeolocationPositionError) => {
  footerText.innerHTML = `${error.message} | Time: ${hour}:${minute}`;
};
