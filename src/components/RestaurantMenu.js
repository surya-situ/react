import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

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

    //dispatch items using useDispatch hook
    const dispatch = useDispatch();

    //handling items:
    // const handleAddItems = () => {
        //addItem from utils.cartSlice
    //     dispatch(addItem('grapes'))
    // }

    //add food item
    const addFoodItem = (items) => {
        dispatch(addItem(items))
    }

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
            {/* <button onClick={handleAddItems}>addItems</button> */}
        </div>
        <div>
            <h1 className='font-bold'>menu</h1>
            <ul>
                {
                    // option chaining 
                    Object.values(restaurantMenu ?? {}).map((foodItem, index) => 
                        {

                            const itemName = foodItem.card.info.name;
                            const itemPrice = foodItem.card.info.price;
                            const itemImage = foodItem.card.info.imageId;
                            
                            return ( 
                                
                                <li className='py-3' key={index} >
                                    {itemName} - {itemPrice /100} rupees - 
                                        <button 
                                            className='p-2 text-[15px] border border-black bg-green-400' 
                                            onClick={() => addFoodItem(foodItem)}
                                        >add to cart
                                    </button> 
                                </li> 
                            )
                        }
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu;