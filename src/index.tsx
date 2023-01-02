import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import GlobalStyles from './ui/styles/GlobalStyle';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './ui/styles/index';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme as unknown as DefaultTheme}>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

