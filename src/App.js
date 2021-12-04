import React from 'react';
import {Footer, Blog, Possibility, Features, WhatBean, Header} from './containers';
import {Brand, Navbar} from './components';
import './App.css';


function App() {

    return (
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Brand />
          <WhatBean/>
          <Footer />
        </div>
    )
}

export default App
