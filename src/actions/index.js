
import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// axios only works for requests from web browser,
export const FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    //returned request is a promise
    const request = axios.get(url);
    console.log('Request', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

