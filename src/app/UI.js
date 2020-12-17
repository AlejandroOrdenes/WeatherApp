export class UI {

    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
        this.windSpeed = document.getElementById('weather-wind-speed');
        this.maps = document.getElementById('visual-maps')
    }

    render(weather) {
        this.location.textContent = weather.name + '/' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.string.textContent = weather.main.temp + ' °C';
        this.humidity.textContent = 'Humidity:  ' + weather.main.humidity + '%';
        this.wind.textContent = 'Wind Degree:  ' + weather.wind.deg + '°';
        this.windSpeed.textContent = 'Wind Speed:  ' + weather.wind.speed + ' m/s';

    }
};