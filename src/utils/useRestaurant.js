import {useState, useEffect} from 'react';
import { FETCH_MENU_URL } from '../Config';

/** 
  * ? (id ) is form components {RestaurantMenu} 
**/
const useRestaurant = (id) => {

    //restaurants
    const[restaurantDetails, setRestaurantDetails] = useState(null);

    //Get data form api
    useEffect(() => {
        getRestaurantInfo();
    },[]);

    let getRestaurantInfo = async () => {

        try {
            let data = await fetch( FETCH_MENU_URL + id)
            
            let result = await data.json();
            //restaurants
            setRestaurantDetails(result.data.cards[0].card?.card?.info)
        } catch(error) {
            console.log('error in fetching');
        }
    }

    // return data
    return restaurantDetails;
}

export default useRestaurant;