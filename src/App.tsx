import './App.css';
import Navbar from './components/navbar/navbar';

import React, { useState } from 'react';

import logo from './assets/logo.png';
import Box from '@mui/material/Box';
import Banner from './components/banner/banner';
import Welcome from './components/welcome/welcome';
import Categories from './components/categories/categories';

function App() {
    return (
        <div className="App">
            {/* <header className="App-header"> */}
            <div className="body">
                <Navbar></Navbar>
                <Banner></Banner>
                <Welcome></Welcome>
                <Categories></Categories>
            </div>
            {/* </header> */}
        </div>
    );
}

export default App;
