import React,{useState} from 'react';
import '../App.css';
import { restaurantList} from '../Config';
import RestaurantCard from './RestaurantCard';


const Body = () => {

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
                <button className='search-btn'>search</button>
            </div>

            {/* body */}
            <div className='body'>
                {
                    restaurantList.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                        )
                    })
                }
            </div>
        </>
        
    )
}

export default Body;