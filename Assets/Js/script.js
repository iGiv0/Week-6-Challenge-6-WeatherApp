
var ApiKey = '6ccefdb6dca275a254442e1392a36775'
var searchCity = document.querySelector('#search-city');
var currentWeather = document.querySelector('#currentweather');
var searchBtn = document.querySelector('#search-button');
var form = document.querySelector('#form');
var clearBtn = document.querySelector('#clear-button');
var currentCity = document.querySelector('#current-city');
var currentTemp = document.querySelector('#current-temp');
var currentHumid = document.querySelector('#current-humidity');
var currentWindSpeed = document.querySelector('#current-wind');
var unorderList = document.querySelector('#group-lists');
// var currentIcon = ;
var dayjs = dayjs();
console.log(searchBtn);
function searchCity(event) {
    console.log(event);
    event.preventDefault()
    console.log('hello');
    var cityWeather = searchCity.value
    console.log(cityWeather);
    weatherSearch(cityWeather);
}

function weatherSearch(city) { 
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ApiKey}`)    
    
    .then(function(response) {
        return response.json();
    })
    
    .then(function(data) {
        console.log(data);
        
        fetch("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=6ccefdb6dca275a254442e1392a36775")
        // currentCity.textContent = data.name
        
    })
}
searchBtn.addEventListener('click', searchCity);

