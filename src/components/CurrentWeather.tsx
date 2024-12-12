import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { WeatherMetric } from './weather/WeatherMetric';
import { WeatherIcon } from './weather/WeatherIcon';
import { WeatherData } from '../types/weather';
import { formatTemperature } from '../utils/temperature';

interface CurrentWeatherProps {
  data: WeatherData;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  const { current, location } = data;

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            {location.name}, {location.country}
          </Typography>
          <WeatherIcon condition={current.condition} size="large" />
          <Typography variant="h2" sx={{ mt: 2 }}>
            {formatTemperature(current.temp_c)}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {current.condition.text}
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6} sm={3}>
            <WeatherMetric
              label="Feels Like"
              value={formatTemperature(current.feelslike_c)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <WeatherMetric
              label="Humidity"
              value={`${current.humidity}%`}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <WeatherMetric
              label="Wind Speed"
              value={`${current.wind_kph} km/h`}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};