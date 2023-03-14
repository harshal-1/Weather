const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "83cb94468bmshccd509f4ab67257p12f512jsn6c882e1c6b63",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
    
    cityName.innerHTML=city
    
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city, options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            
            // cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
mb.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather("Mumbai")
})
pn.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Pune")
})
kk.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Kolkata")
})
bn.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Bangalore")
})
home.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Delhi")
})
home1.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Delhi")
})

fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai", options)
    .then((response) => response.json())
    .then((response) => {
        temp_mumbai.innerHTML = response.temp;
        humidity_mumbai.innerHTML = response.humidity;
        wind_speed_mumbai.innerHTML = response.wind_speed;
        wind_degrees_mumbai.innerHTML = response.wind_degrees;
})
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune", options)
    .then((response) => response.json())
    .then((response) => {
        temp_pune.innerHTML = response.temp;
        humidity_pune.innerHTML = response.humidity;
        wind_speed_pune.innerHTML = response.wind_speed;
        wind_degrees_pune.innerHTML = response.wind_degrees;
})
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata", options)
    .then((response) => response.json())
    .then((response) => {
        temp_kolkata.innerHTML = response.temp;
        humidity_kolkata.innerHTML = response.humidity;
        wind_speed_kolkata.innerHTML = response.wind_speed;
        wind_degrees_kolkata.innerHTML = response.wind_degrees;
})
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore", options)
    .then((response) => response.json())
    .then((response) => {
        temp_bangalore.innerHTML = response.temp;
        humidity_bangalore.innerHTML = response.humidity;
        wind_speed_bangalore.innerHTML = response.wind_speed;
        wind_degrees_bangalore.innerHTML = response.wind_degrees;
})

getWeather("Delhi")