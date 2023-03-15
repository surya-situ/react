import React,{useState, useEffect} from 'react';
import { restaurantList} from '../Config';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

import {Link} from 'react-router-dom';

import useOnline from '../utils/useOnline';

// importing it form utils to use it anywhere
import { filterData } from '../utils/Helper';


/** 
 * ? filtering data through search box:
* ? importing the whole function {⬇️} form utils to reuse anywhere.
function filterData(searchText, restaurantName) {
    const filteringData =  restaurantName.filter((restaurantName) => restaurantName?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));

    return filteringData;
} 

**/



const Body = () => {

    // all restaurant
    const [allRestaurant, setAllRestaurant] = useState([]);

    // filtered restaurant data list 
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        // API call
        getRestaurant();
    }, []);

    const getRestaurant = async () => {
    
        try {   
            const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&page_type=DESKTOP_WEB_LISTING`);

            const result = await data.json();

            // optional chancing
            // displaying all restaurants from api
            setAllRestaurant(result.data?.cards[2]?.data?.data?.cards);

            // 
            setFilteredRestaurant(result.data?.cards[2]?.data?.data?.cards);

        } catch(error) {
            console.log('error in fetching')
        }
       
    }

    // offline function
    // const isOnline = useOnline();
    // if(!isOnline) {
    //     return <h1>Offline, please check the internet connection</h1>
    // }


    // Early return
    if(!allRestaurant) return null;

    // for shimmer effect
    return allRestaurant.length === 0 ? (<Shimmer />) : (
        <>
            {/* search container */}
            <div className="bg-pink-100 ">
                <input 
                    type="text" 
                    className='mx-4 my-4' 
                    placeholder='search' 
                    value= {searchText}
                    onChange={(event) => {setSearchText(event.target.value)}}
                />
                <button 
                    className='bg-green-200 px-2 rounded-md hover:bg-green-400' 
                    onClick={() => 

                        {
                            // need to filter data
                           const data =  filterData(searchText, allRestaurant);

                           //setting the filtered value to setFilteredRestaurant to display the restaurants
                           setFilteredRestaurant(data)
                            
                            // setting input value to empty after button click
                            setSearchText('');

                        }
                    }  
                > search </button>
            </div>

            {/* body */}
            <div className='flex flex-wrap items-center content-center'>
                {

                    filteredRestaurant.map((swiggyData) => {
                        return(
                            <Link to={'/restaurant/' + swiggyData.data.id} key={swiggyData.data.id}>
                                <RestaurantCard {...swiggyData.data} />
                            </Link>
                          
                        )
                    })
                }
            </div>
        </>
        
    )
            
}

export default Body;