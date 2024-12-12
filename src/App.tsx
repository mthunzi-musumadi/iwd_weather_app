import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { Header } from './components/layout/Header';
import { SearchBar } from './components/SearchBar';
import { CurrentWeather } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';
import { ErrorMessage } from './components/layout/ErrorMessage';
import { useWeather } from './hooks/useWeather';
import { theme } from './theme';

function App() {
  const { data, error, loading, fetchWeather } = useWeather();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <SearchBar onSearch={fetchWeather} disabled={loading} />
          {error && <ErrorMessage message={error} />}
          {data && (
            <>
              <CurrentWeather data={data} />
              <Forecast data={data} />
            </>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;