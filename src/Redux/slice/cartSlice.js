import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
   name:"cartslice",
   initialState:[],
   reducers:{
    //to add items to cart
    addToCart:(state, action)=>{
        if(state.find((item)=>item.id==action.payload.id)){
            alert('already in cart')
        }else{
          state.push(action.payload)
        }
    }
   }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer