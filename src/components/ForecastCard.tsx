import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { WeatherIcon } from './weather/WeatherIcon';
import { WeatherCondition } from '../types/weather';
import { formatDate } from '../utils/date';
import { formatTemperature } from '../utils/temperature';

interface ForecastCardProps {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: WeatherCondition;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({
  date,
  maxTemp,
  minTemp,
  condition,
}) => {
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="subtitle1" gutterBottom>
          {formatDate(date)}
        </Typography>
        <Box sx={{ my: 2 }}>
          <WeatherIcon condition={condition} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {condition.text}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" component="span">
            {formatTemperature(maxTemp)}
          </Typography>
          <Typography variant="body2" component="span" color="text.secondary" sx={{ mx: 1 }}>
            /
          </Typography>
          <Typography variant="body2" component="span" color="text.secondary">
            {formatTemperature(minTemp)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};