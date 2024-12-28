import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "./context/ThemeContext";
import { LoaderWrapper } from "./context/LoaderContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoaderWrapper>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LoaderWrapper>
  </React.StrictMode>
);


