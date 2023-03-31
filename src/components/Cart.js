import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '../utils/cartSlice';
import FoodItems from './FoodItems';

const Cart = () => {

    // ?store is form store, cart is from store.js and items is from cartSlice {items.array}
    const cartFoods = useSelector(store => store.cart.items)

    //clearing cart
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div>
        <h1 className='font-bold text-3xl'>cart items {cartFoods.length}</h1>
        <button className='bg-green-100 p-2 m-2' onClick={()=> handleClearCart()}>clear cart</button>
        <div>
            {
                cartFoods.map((item) => 
                    {
                        const name = item.card.info.name
                        const price = item.card.info.price
                        const image = item.card.info.imageId
                        const key = item.card.info.id 

                        return( <FoodItems key={key} itemName={name} itemImageId={image} itemPrice={price} />)
                    }

                )
            }
        </div>
    </div>
  )
} 

export default Cart