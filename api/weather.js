import axios from "axios";
 
const apiKey = "ca4a829c9f3c4ec699983927240204";

const forecastEndpoint = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationEndpoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;


const api = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint
    }

    try {
        const response = await axios.request(options)
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const fetchForecast = params => {
    let weatherUrl = forecastEndpoint(params)
    return api(weatherUrl)
}

export const fetchSearch = params => {
    let searchUrl = locationEndpoint(params)
    return api(searchUrl)
}