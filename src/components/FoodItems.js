import React from 'react'
import { IMG_CDN_URL } from '../Config'

const FoodItems = ({itemName,itemPrice, itemImageId }) => {
  return (
    <div className='w-56 p-2 shadow-lg bg-pink-50'>
        <img src={IMG_CDN_URL + itemImageId} alt="item image" />
        <h2>{itemName}</h2>
        <h2>{itemPrice / 100} ₹</h2>
        {/* <p>{description}</p> */}
    </div>
  )
}

export default FoodItems