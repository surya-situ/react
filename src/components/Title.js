import React from 'react';

import Logo from '../assets/img/food-logo.webp'

const Title = () => {
  return (
    <a>
        <img 
            className = 'h-20 px-2'
            
            src={Logo}
            alt="Restaurant logo" 
        />
       
    </a>
  )
}

export default Title