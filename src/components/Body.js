import React,{useState, useEffect} from 'react';
import '../App.css';
import { restaurantList} from '../Config';
import RestaurantCard from './RestaurantCard';

// filtering data through search box:
function filterData(searchText, restaurant) {
    const filteringData =  restaurant.filter((restaurant) => restaurant.data.name.includes(searchText));

    return filteringData;
}



const Body = () => {

    // importing restaurant list data
    const [restaurant, setRestaurant] = useState(restaurantList);
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
            setRestaurant(result.data?.cards[2]?.data?.data?.cards);

        } catch(error) {
            console.log('error in fetching')
        }
       
    }

    return (
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
                           const data =  filterData(searchText, restaurant);

                           setRestaurant(data)

                            // update the state- restaurant
                            
                            // setting input value to empty after button click
                            setSearchText('');

                        }
                    }  
                > search </button>
            </div>

            {/* body */}
            <div className='body'>
                {

                    restaurant && restaurant.map((swiggyData) => {
                        return(
                            <RestaurantCard key={swiggyData.data.id} {...swiggyData.data} />
                          
                        )
                    })
                }
            </div>
        </>
        
    )
}

export default Body;