import React from 'react';
import '../App.css';

import { IMG_CDN_URL } from '../Config';


const RestaurantCard = ({name, cuisines, lastMileTravel, cloudinaryImageId}) => {
    return (
        <div className='card'>
            <img src={IMG_CDN_URL + cloudinaryImageId}  />
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{Math.trunc(lastMileTravel)} km away from your home</p>
        </div>
    )
}


export default RestaurantCard;


