const btn=document.getElementById("show-weather")
const zip=document.getElementById('zipcode')
let name=document.getElementById('city-name')
let latitude=document.getElementById('lat')
let longitude=document.getElementById('lon')
let weatherMain=document.getElementById('weather-main')
let weatherDesc=document.getElementById('weather-desc')
let windSpeed=document.getElementById('wind-speed')
let windDegree=document.getElementById('wind-degree')
let current=document.getElementById('temp-current')
let minimum=document.getElementById('temp-min')
let maxium=document.getElementById('temp-max')
let humid=document.getElementById('humidity')


btn.addEventListener('click', () => generateWeather())
function generateWeather(){

const zipcode =zip.value
console.log(zipcode)
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=a863ac5125dd750825033cb4370f9856`)
  .then ((res)=>res.json())
  .then ((data) =>
  { console.log(data)
    name.innerHTML=data.name
    latitude.innerHTML=data.coord.lat
    longitude.innerHTML=data.coord.lon
    weatherMain.innerHTML=data.weather[0].main
    weatherDesc.innerHTML=data.weather[0].description
    current.innerHTML=data.main.temp
    minimum.innerHTML=data.main.temp_min
    maxium.innerHTML=data.main.temp_max
    humid.innerHTML=data.main.humidity
    windSpeed.innerHTML=data.wind.speed
    windDegree.innerHTML=data.wind.deg

  } )
}
