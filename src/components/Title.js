import React from 'react';
import '../App.css';

import Logo from '../assets/img/food-logo.webp'

const Title = () => {
  return (
    <a>
        <img 
            className= 'logo' 
            
            src={Logo}
            alt="Restaurant logo" 
        />
       
    </a>
  )
}

export default Title