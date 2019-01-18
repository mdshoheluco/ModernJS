class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewPoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(data) {
        this.location.innerHTML = data.display_location.full;
        this.desc.innerHTML = data.weather;
        this.string.innerHTML = data.temperature_string;
        this.icon.setAttribute('src', `${data.icon_url}`);
        this.humidity.innerHTML = `Relative humidity: ${data.relative_humidity}`;
        this.feelsLike.innerHTML = `Feels like: ${data.feelslike_string}`;
        this.dewPoint.innerHTML = `DewPoint: ${data.dewpoint_string}`;
        this.wind.innerHTML = `Wind: ${data.wind_string}`
    }
}