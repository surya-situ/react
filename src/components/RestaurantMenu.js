import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {

    // id is from the App.js (dynamic routing)
    // dynamic URL params
    const { id } = useParams();

    // instead of using the useState using a custom hook
    const [restaurantDetails, setRestaurantDetails] = useState();
    const [restaurantMenu, setRestaurantMenu] = useState();

    // const restaurantDetails = useRestaurant(id);

    /**
     *  ? imported all {⬇️} the code form useRestaurant.js 
     **/
    useEffect(() => {
        getRestaurantInfo();
    },[]);

    let getRestaurantInfo = async () => {
        try{
            const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.322232&lng=78.085605&restaurantId=' + id);
            
            
            const result = await data.json();
            console.log(result.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

            setRestaurantDetails(result.data.cards[0].card?.card?.info)
            setRestaurantMenu(result.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        } catch(error) {
            console.log('error in fetching');
        }
    }

    
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
            { restaurantMenu.map((elm, index) => {
                 (elm.a) 
              })
            }



            <h1 className='font-bold'>menu</h1>
            <ul>
                {
                    // option chaining 
                    Object.values(restaurantMenu ?? {}).map((item, index) => ( <li key={index}>{item.name}</li> ))
                }
            </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu;