import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from "./Auth/Login";
import Registrasi from './Auth/Registrasi';
import DashboardUser from './User/DashboardUser';
import DiagnosaUser from './User/DiagnosaUser';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="registrasi" element={<Registrasi />} />
      <Route path="dashboarduser" element={<DashboardUser />} />
      <Route path="diagnosa" element={<DiagnosaUser />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
