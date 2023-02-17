import React from 'react';
import '../App.css';

import { IMG_CDN_URL } from '../Config';


const RestaurantCard = ({name, cuisines, lastMileTravel, cloudinaryImageId}) => {
    return (
        <div className='card'>
            <img src={IMG_CDN_URL + cloudinaryImageId}  />
            <h2>{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{Math.trunc(lastMileTravel)} km away from your home</h5>
        </div>
    )
}


export default RestaurantCard;


