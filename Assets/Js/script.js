
var ApiKey = '6ccefdb6dca275a254442e1392a36775'
var searchCity = document.querySelector('#city-search');
var currentWeather = document.querySelector('#currentweather');
var searchBtn = document.querySelector('search-button');
var clearBtn = document.querySelector('clear-button');
var currentCity = document.querySelector('current-city');
var currentTemp = document.querySelector('current-temp');
var currentHumid = document.querySelector('current-humidity');
var currentWindSpeed = document.querySelector('current-wind');
// var currentIcon = ;
var dayjs = dayjs();

function searchCity(event) {
    event.preventDefault()
    fetch("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=6ccefdb6dca275a254442e1392a36775")
    var cityWeather = search.value
    weatherSearch(cityWeather);
}

function weatherSearch(city) {


    .then(function(response) {
        return response.json();
    })

    .then(function(data) {

        currentCity.textContent = data.name
        
    })
}

$('date-1').textContent = dayjs.format('dddd')
$('temp-1').textContent = 
$('humidity-1').textContent = 
$('wind-1').textContent 
