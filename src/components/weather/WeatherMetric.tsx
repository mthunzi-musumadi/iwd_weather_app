import React from 'react';
import { Box, Typography } from '@mui/material';

interface WeatherMetricProps {
  label: string;
  value: string;
}

export const WeatherMetric: React.FC<WeatherMetricProps> = ({ label, value }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {label}
      </Typography>
      <Typography variant="h6">
        {value}
      </Typography>
    </Box>
  );
};