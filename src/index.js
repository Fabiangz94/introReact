import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let htmlElement = (
  <div style={{border:"3px solid red"}}>
    <h2>Hola, este es un elemento JSX</h2>
    <p>Hola este es el cuerpo</p>
    <div onClick={()=>{alert("se ha dado click")}}>
      <h4>Este es el footer, dar click para ver mensaje</h4>
    </div>
  </div>
);

let h2Element = React.createElement ("h2",{},"Hola, este es un elemento JS");
let pElement = React.createElement ("p",{},"Hola este es el cuerpo");
let divLast = React.createElement ("div", {onClick:()=>{alert("se ha dado click");},}, React.createElement ("h4",{},"Este es el footer, dar click para ver mensaje"));

let mainDiv = React.createElement(
  "div",
  {style:{border:"3px solid blue"}},
  [h2Element, pElement, divLast]
);

root.render(
<div>
  <div>
    {htmlElement}
    {mainDiv}
  </div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</div>)(

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
