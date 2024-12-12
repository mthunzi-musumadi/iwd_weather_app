import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ForecastCard } from './ForecastCard';
import { WeatherData } from '../types/weather';

interface ForecastProps {
  data: WeatherData;
}

export const Forecast: React.FC<ForecastProps> = ({ data }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        7-Day Forecast
      </Typography>
      <Grid container spacing={2}>
        {data.forecast.forecastday.map((day) => (
          <Grid item xs={12} sm={6} md={3} key={day.date}>
            <ForecastCard
              date={day.date}
              maxTemp={day.day.maxtemp_c}
              minTemp={day.day.mintemp_c}
              condition={day.day.condition}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};