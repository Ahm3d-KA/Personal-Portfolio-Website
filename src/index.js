import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<HashRouter>*/}
        <App />
      {/*</HashRouter>*/}
  </React.StrictMode>
);

// import * as React from "react";
// import { createRoot } from 'react-dom/client';
// import App from "./App";
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// const handleOnMouseMove = e => {
//     const { currentTarget: target } = e;
//    
//     const rect = target.getBoundingClientRect(),
//         x = e.clientX - rect.left,
//         y = e.clientY - rect.top;
//     document.documentElement.style.cssText(`--mouse-x: ${x}px`);
//     document.documentElement.style.setProperty("--mouse-y", `${y}px`);
// }
//
// document.addEventListener('mousemove', (e) => {
//     document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
//     document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
// // });
//
// for (const card of document.querySelectorAll(".card")) {
//     card.onmousemove = e => handleOnMouseMove(e);
// }