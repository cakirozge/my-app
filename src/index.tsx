import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <App></App>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Link çalışmıyordu. Linkler react-router-dom özelliği bu nedenle BrowserRoute'u index.tsx içine alarak tüm uygulamayı sarmallayacak şekilde kullanabiliriz.
//BrowserRoute index.tsx içine alındıktan sonra Routes içindeki tüm sayfalar browserroute altında çalışmaya devam eder.
