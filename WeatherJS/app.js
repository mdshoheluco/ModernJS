const store = new Storage();
const weatherLocation = store.getLocationData();

// init Weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

function getWeather() {
    weather.getWeather().then((data) => {
        ui.paint(data);
    });
}

document.addEventListener('DOMContentLoaded', getWeather);

document.querySelector('#w-change-btn').addEventListener('click', () => {
    let city = document.querySelector('#city').value;
    let state = document.querySelector('#state').value;

    weather.changeLocation(city, state);

    store.setLocationData(city, state);

    getWeather();

    // close the modal
    $('#locModal').modal('hide');
});