const btn = document.querySelector('#btn')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const city = document.querySelector('#city')
const country = document.querySelector('#country')
const localTime = document.querySelector('#localTime')
const temperature = document.querySelector('#temperature')
const windSpeed = document.querySelector('#windSpeed')
const wind2 = document.querySelector('#wind2')
const humidity = document.querySelector('#humidity')
const weather = document.querySelector('#weather')
let nevStr
let arr = {}
function showData(data) {
  city.innerText = data.location.name
  country.innerText = data.location.country
  localTime.innerText = data.location.localtime
  temperature.innerText = `${data.current.temperature} \u2103`
  windSpeed.innerText = `${data.current.wind_speed} km/h`
  wind2.innerText = data.current.wind_dir
  humidity.innerText = `${data.current.humidity} %`
  weather.src = `${data.current.weather_icons}`
}
async function getData() {
  const res = await fetch(`http://api.weatherstack.com/current?access_key=5e0116c7252bfda72d7268b4c6065adb&query=query=${nevStr}`)
  const data = await res.json()
  arr = data
  showData(arr)
}
function validation(str, str2) {
  const val1 = str[0].toUpperCase() + str.slice(1).toLowerCase()
  const val2 = str2[0].toUpperCase() + str2.slice(1).toLowerCase()
  nevStr = `${val1}, ${val2}`
  getData()
}
function getItem() {
  validation(input1.value, input2.value)
}

btn.addEventListener('click', getItem)
input2.addEventListener('change', getItem)
input1.addEventListener('change', getItem)
