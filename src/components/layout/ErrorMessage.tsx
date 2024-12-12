import React from 'react';
import { Alert } from '@mui/material';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Alert severity="error" sx={{ mb: 4 }}>
      {message}
    </Alert>
  );
};