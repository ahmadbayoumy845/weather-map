let weatherInfo = document.getElementById("weather-info");
let btnSearch = document.getElementById("btn-search");
let searchInput = document.getElementById("search-input");

function fetchWeather(country) {
  fetch(
    https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=eae3b612980b7423e2c96a3bd7345618
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod === 200) {
        weatherInfo.innerHTML = `
          <h2>Weather in: ${data.name}</h2>
          <h1>${data.main.temp} °C</h1>
          <p>${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity} %</p>
          <p>Wind speed: ${data.wind.speed} Km/H</p>
        `;
      } else {
        weatherInfo.innerHTML = <p>City not found!</p>;
      }
    });
}

searchInput.onclick = function () {
  searchInput.value = "";
};

btnSearch.addEventListener("click", function () {
  if (searchInput.value !== "") {
    fetchWeather(searchInput.value);
  }
});