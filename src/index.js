import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a theme
// const theme = createTheme();

// Wrap your component tree with ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <ThemeProvider theme={theme}>
    <App />
// </ThemeProvider>
  // </React.StrictMode>
);



