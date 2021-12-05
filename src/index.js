import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from "react-intl";

import messages_en_us from "./translations/en-us.json";
import messages_es_mx from "./translations/es-mx.json";
import './bootstrap';
import App from './App';
import reportWebVitals from './reportWebVitals';

const langLocale = navigator.language;

const messages = {
  'en-US': messages_en_us,
  'es-MX': messages_es_mx,
}
const messagesToUse = messages[langLocale] || messages['en-US']; // en-US fallback if unsupported

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={langLocale} messages={messagesToUse}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
