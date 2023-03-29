import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    // id is from the App.js (dynamic routing)
    // dynamic URL params
    const { id } = useParams();

    // instead of using the useState using a custom hook
    // const [restaurantDetails, setRestaurantDetails] = useState();
    // const [restaurantMenu, setRestaurantMenu] = useState();

    //for restaurant details
    const restaurantDetails = useRestaurant(id);
    //for all the menu and prices 
    const restaurantMenu= useRestaurantMenu(id);

    /**
     *  ? imported all {⬇️} the code form useRestaurant.js 
     **/
    // useEffect(() => {
    //     getRestaurantInfo();
    // },[]);

    // let getRestaurantInfo = async () => {
    //     try{
    //         const data = await fetch(FETCH_MENU_URL + id);
            
            
    //         const result = await data.json();

    //         setRestaurantMenu(result.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    //         setRestaurantDetails(result.data.cards[0].card?.card?.info)
    //     } catch(error) {
    //         console.log('error in fetching');
    //     }
    // }
    /**
     *  ? imported all {⬆️} the code form useRestaurant.js 
     **/

  return !restaurantDetails ? (<Shimmer />) : (
    <div className='menu'>
        <p>Restaurant id: {id}</p>
        <p>{restaurantDetails?.areaName}</p>
        <p>{restaurantDetails?.name}</p>
        <p>{restaurantDetails?.avgRating}</p>
        <p>{restaurantDetails?.totalRatingsString}</p>
        <img src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId} alt=""  className='menu-img'/>
        <p>{restaurantDetails.area}</p>
        <p>{restaurantDetails.city}</p>
        <p>{restaurantDetails.costForTwoMsg}</p>
        <p>{restaurantDetails.avgRating}</p>
        <div>

            <h1 className='font-bold'>menu</h1>
            <ul>
                {
                    // option chaining 
                    Object.values(restaurantMenu ?? {}).map((item, index) => 
                        ( <li key={index}>{item.card.info.name} : {item.card.info.price /100} rupees</li> )
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu;