import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
