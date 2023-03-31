import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer : {
        cart: cartSlice
    },
})

export default store;



//creating store:
/***
 **! Create store
     - configureStore() - RTK{@reduxjs/toolkit} 

 *? Provide my store ato app
    - <Provide store = {store} > - import form react-redux

 *? Slice
    - RTK - createSlice({
        name: '',
        initialState: ,
        reducers: {
            addItem: (state, action) => {
                state = action.payload
            }
        }
    })

 **! export const {addItem, removeItem} = cartSlice.action; 
 *? export default cartSlice/reducer;

 *? Put Slice into Store
    {
        reducer : {
            cart: cartSlice,
            user: userSlice 
        }
    }

**/