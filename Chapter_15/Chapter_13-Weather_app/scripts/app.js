const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();


const updateUI = data => {

    console.log(data)
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;


    //Destructure properties
    const { cityDetails, weather } = data

    //Updated details template
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
    </div>
    `

    //update the night/day & icon imgs

    const iconSource = `./icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSource);


    let timeSource = weather.IsDayTime ? './img/day.svg' : './img/night.svg';
    // if(weather.IsDayTime){
    //     timeSource = './img/day.svg';
    // } else {
    //     timeSource = './img/night.svg'
    // }

    time.setAttribute('src', timeSource)

    //Remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault()


    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with new city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))

    //set local storage
    localStorage.setItem('city', city);
})

if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}