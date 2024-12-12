import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Cloud } from '@mui/icons-material';

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Cloud sx={{ mr: 2 }} />
        <Typography variant="h6" component="div">
          Weather Forecast
        </Typography>
      </Toolbar>
    </AppBar>
  );
};