// let weatherInfo = document.getElementById("weather-info");
// let btnSearch = document.getElementById("btn-search");
// let searchInput = document.getElementById("search-input");
// let country = "cairo";

// function fetchWeather(country) {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=eae3b612980b7423e2c96a3bd7345618`,
//   );
//   // .then((response) => response.json())
//   // .then((data) => {
//   //   console.log(data);
//   //   weatherInfo.innerHTML = `
//   //     <h2>Weather in: ${data.name}</h2>
//   //     <h1>${data.main.temp} °C</h1>
//   //     <p>${data.weather[0].description}</p>
//   //     <p>Humidity: ${data.main.humidity} %</p>
//   //     <p>Wind speed: ${data.wind.speed} Km/H</p>
//   // `;
//   // });
// }

// searchInput.onclick = function () {
//   searchInput.value = "";
// };

// btnSearch.addEventListener("click", function () {
//   if (searchInput.value !== "") {
//     fetchWeather(searchInput.value);
//   }
// });

// async function fetchWeather() {
//   let response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=eae3b612980b7423e2c96a3bd7345618`,
//   );

//   let result = await response.json();
//   console.log(result);
// }

// fetchWeather();


let weatherInfo = document.getElementById("weather-info");
let btnSearch = document.getElementById("btn-search");
let searchInput = document.getElementById("search-input");

// دالة جلب الطقس وتحديث الصفحة
async function fetchWeather(country) {
    try {
        let response = await fetch(https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=eae3b61298e...);
        let data = await response.json();

        // عرض البيانات في الصفحة
        weatherInfo.innerHTML = `
            <h2>Weather in: ${data.name}</h2>
            <h1>${data.main.temp} °C</h1>
            <p>${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind speed: ${data.wind.speed} Km/H</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = <p style="color:red;">المدينة غير موجودة أو حدث خطأ!</p>;
    }
}

// مسح حقل البحث عند الضغط عليه
searchInput.onclick = function () {
    searchInput.value = "";
};

// عند الضغط على زر البحث
btnSearch.addEventListener("click", function () {
    if (searchInput.value !== "") {
        fetchWeather(searchInput.value);
    }
});

// تشغيل الدالة لمدينة افتراضية عند فتح الصفحة لأول مرة
fetchWeather("cairo");
