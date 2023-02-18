import React,{useState} from 'react';
import '../App.css';
import { restaurantList} from '../Config';
import RestaurantCard from './RestaurantCard';


function filterData(searchText, restaurant) {
    const filteringData =  restaurant.filter((restaurant) => restaurant.data.name.includes(searchText));

    return filteringData;
}


const Body = () => {

    // importing restaurant list data
    const [restaurant, setRestaurant] = useState(restaurantList);

    const [searchText, setSearchText] = useState('');

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

                            // update the state- restaurant
                            setRestaurant(data);
                            // setting input value to empty after button click
                            setSearchText('');

                        }
                    }
                    
                    
                >search
                </button>
            </div>

            {/* body */}
            <div className='body'>
                {
                    restaurant.map((swiggyData) => {
                        return (
                            <RestaurantCard key={swiggyData.data.id} {...swiggyData.data} />
                        )
                    })
                }
            </div>
        </>
        
    )
}

export default Body;