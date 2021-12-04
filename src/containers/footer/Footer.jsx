import React from 'react';
import './footer.css';
import whatbeanlogo from '../../assets/Group.svg';

const Footer=()=> {
    return (
        <div className="whatbean__footer section__padding">
            <div className="whatbean__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div> 
            <div className="whatbean__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="whatbean__footer-links">
                <div className="whatbean__footer-links_logo">
                    <img src={whatbeanlogo} alt="whatbean_logo" />
                    <p>Bogor Indonesia, <br /> All Rights Reserved</p>
                </div>
                <div className="whatbean__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="whatbean__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="whatbean__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Bogor Indonesia</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>

            <div className="whatbean__footer-copyright">
                <p>@2021 WhatTheBean. All rights reserved.</p>
            </div> 
        </div>
    )
}

export default Footer
