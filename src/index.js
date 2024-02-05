import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Registerform from './component/registerform';
// import reportWebVitals from './reportWebVitals';
import ManairWater from './component/Manairwater';
// import Header from './component/manairheder';
// import Footer from './component/footer';
// import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Registerform/> */}
    <ManairWater/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ManairWater();