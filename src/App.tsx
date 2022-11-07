import './App.css';
import Navbar from './components/navbar/navbar';

import React, { useState } from 'react';

import logo from './assets/logo.png';
import Box from '@mui/material/Box';
import Banner from './pages/shopping/components/banner';
import Categories from './components/categories/categories';

function App() {
    return (
        <div className="App">
            {/* <header className="App-header"> */}
            <div className="body">
                <Navbar></Navbar>
                <Banner></Banner>
                <Categories></Categories>
            </div>
            {/* </header> */}
        </div>
    );
}

export default App;
