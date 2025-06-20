import { createSlice } from "@reduxjs/toolkit";


export const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addWishlist:(state,action)=>{
            if(state.find((item)=>item.id==action.payload.id)){
                alert('Item already in your wishlist')
            }
            else{
                state.push(action.payload)
            }
        },
        removeWishlistItem:(state, action)=>{
        return state.filter((item)=>item.id!=action.payload)
        }

    }

})

export const {addWishlist,removeWishlistItem} = wishlistSlice.actions

export default wishlistSlice.reducer