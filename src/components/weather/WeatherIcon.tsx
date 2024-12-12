import React from 'react';
import { Box } from '@mui/material';
import { WeatherCondition } from '../../types/weather';

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: 'small' | 'medium' | 'large';
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, size = 'medium' }) => {
  const sizes = {
    small: 32,
    medium: 64,
    large: 96,
  };

  return (
    <Box
      component="img"
      src={`https:${condition.icon}`}
      alt={condition.text}
      sx={{
        width: sizes[size],
        height: sizes[size],
      }}
    />
  );
};