import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Routes } from './routes';
import { AuthProvider } from './hooks/auth';
import { SearchProvider } from './hooks/search';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <SearchProvider>
          <Routes />
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
