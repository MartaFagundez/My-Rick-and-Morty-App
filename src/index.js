import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import About from "./components/About";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<div><h1>Login</h1></div>} />
      <Route path='/app' element={<Layout />} >
        <Route index element={<Cards /> } />
        <Route path=':charId' element={<Detail />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Navigate replace to="/home" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
