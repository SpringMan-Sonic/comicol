import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Shopcontextprovider from './context/Shop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Shopcontextprovider>
      <App />
    </Shopcontextprovider>
     </BrowserRouter>
  </React.StrictMode>,
);
