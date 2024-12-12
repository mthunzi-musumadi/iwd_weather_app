import axios from 'axios';
import { WeatherData } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: city,
        days: 7,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};