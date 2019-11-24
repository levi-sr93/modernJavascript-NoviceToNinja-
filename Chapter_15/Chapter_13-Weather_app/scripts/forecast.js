class Forecast {
    constructor() {
        this.key = 'Accu Weather key here';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key)

        return { cityDetails, weather }
    }

    //Get City Information
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0]
    }

    //Get Weather information
    async getWeather(cityId) {
        const query = `${cityId}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }
}


//Get City Information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]
}


