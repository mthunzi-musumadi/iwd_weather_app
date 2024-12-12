import { useState } from 'react';
import { WeatherData } from '../types/weather';
import { getWeather } from '../services/weatherApi';

export const useWeather = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const weatherData = await getWeather(city);
      setData(weatherData);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchWeather };
};