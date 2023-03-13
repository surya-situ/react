import React,{useState, useEffect} from 'react';
import '../App.css';
import { restaurantList} from '../Config';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

import {Link} from 'react-router-dom';

// filtering data through search box:
function filterData(searchText, restaurantName) {
    const filteringData =  restaurantName.filter((restaurantName) => restaurantName?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));

    return filteringData;
}



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

    // Early return
    if(!allRestaurant) return null;

    // if no restaurant is found
    // if(filteredRestaurant.length === 0) return <p>no data found</p>



    // for shimmer effect
    return allRestaurant.length === 0 ? (<Shimmer />) : (
        <>
            {/* search container */}
            <div className="search-container">
                <input 
                    type="text" 
                    className='search-input' 
                    placeholder='search' 
                    value= {searchText}
                    onChange={(event) => {setSearchText(event.target.value)}}
                />
                <button 
                    className='search-btn' 
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
            <div className='body'>
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