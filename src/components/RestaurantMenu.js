import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Config';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    // id is from the App.js (dynamic routing)
    // dynamic URL params
    const { id } = useParams();

    const [restaurantDetails, setRestaurantDetails] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    let getRestaurantInfo = async () => {
        try{
            const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=20.2960587&lng=85.8245398&menuId=' + id);
            
            const result = await data.json();
            console.log(result.data);
            setRestaurantDetails(result.data)
        } catch(error) {
            console.log('error in fetching');
        }
    }

  return (!restaurantDetails) ? (<Shimmer />) : (
    <div className='menu'>
        <p>Restaurant id: {id}</p>
        <p>{restaurantDetails.name}</p>
        <img src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} alt=""  className='menu-img'/>
        <p>{restaurantDetails.area}</p>
        <p>{restaurantDetails.city}</p>
        <p>{restaurantDetails.costForTwoMsg}</p>
        <p>{restaurantDetails.avgRating}</p>
        <div>
            {console.log(Object.values(restaurantDetails.menu?.items ?? {}))}

            <h1>menu</h1>
            <ul>
                {
                    // option chaining 
                    Object.values(restaurantDetails?.menu?.items ?? {}).map((item) => ( <li key={item.id}>{item.name}</li> ))
                }
            </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu;