import {useState, useEffect} from 'react'
import { FETCH_MENU_URL } from '../Config'

const useRestaurantMenu = (id) => {

    const [restaurantMenu, setRestaurantMenu] = useState();

    useEffect(() => {
        getRestaurantMenu()
    },[])

    let getRestaurantMenu = async () => {

        try {

            let data = await fetch(FETCH_MENU_URL + id);
            let result = await data.json();
            setRestaurantMenu(result.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        } catch (error) {
            console.log('Error in fetching');
        }
        
    }

    return restaurantMenu;
}

export default useRestaurantMenu;