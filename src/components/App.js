import React, { useState } from "react";
import logo from '../styles/star_wars_logo.png';
import '../styles/App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./Home";
import Details from "./Details";

const App = () => {

    return (
        <div className="background-app">
            <div className="background-logo-app">
                <img src={logo} alt="Star Wars API" />
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/details" element={<Details/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;