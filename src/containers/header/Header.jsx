import React from 'react';
import './header.css';
import people from '../../assets/Group 81.png';
import ai from '../../assets/kopibro.png';

const Header=()=> {
    return (
        <div className="whatbean__header section__padding" id="home">
            <div className="whatbean__header-content">
              <h1 className="gradient__text">Find out your coffee bean type just from photos</h1>
              <p>WhatTheBean is a deep learning based tool that allows you to identify the type of coffee beans you have just from a photo. Join us to try this tool for FREE</p>
              <div className="whatbean__header-content__input">
                  <input type="email" placeholder="Your Email Address"></input>    
                  <button type="button">Get Started</button>
              </div>

              <div className="whatbean__header-content__people">
                  <img src={people} alt="people"/>
                  <p>1,600 people requested access a visit in last 24 hours</p>
              </div>
            </div>    
            <div className="whatbean__header-image">
                <img src={ai} alt="ai"/>
            </div> 
        </div>
    )
}

export default Header
