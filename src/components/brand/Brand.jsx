import React from 'react';
import './brand.css';
import google from '../../assets/google.png';
import reactjs from '../../assets/react.png';
import tensor from '../../assets/Tensor.png';
import ipfs from '../../assets/IPFS.png';
import amazon from '../../assets/amazon.png';

const Brand=()=> {
    return (
        <div className='whatbean__brand section__padding'>
            <div>
                <img src={google} alt="google" />
            </div>    
            <div>
                <img src={reactjs} alt="reactjs" />
            </div> 
            <div>
                <img src={tensor} alt="tensor" />
            </div>   
            <div>
                <img src={ipfs} alt="ipfs" />
            </div>
            <div>
                <img src={amazon} alt="amazon" />
            </div>        
        </div>
    )
}

export default Brand
