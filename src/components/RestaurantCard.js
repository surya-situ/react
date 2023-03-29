import React,{useContext} from 'react';
import { IMG_CDN_URL } from '../Config';
import UserContext from '../utils/UserContext';



const RestaurantCard = ({name, cuisines, lastMileTravel, cloudinaryImageId}) => {

    const {user} = useContext(UserContext);
    return (
        <div className='w-[200px] p-2 m-2 shadow-lg bg-red-100'>
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h3 className='font-bold text-l'>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{Math.trunc(lastMileTravel)} km away from your home</p>
            <span>{user.name}</span>
        </div>
    )
}


export default RestaurantCard;


