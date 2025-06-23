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
        },
        removeCartItem:(state, action)=>{
        return state.filter((item)=>item.id!=action.payload)
        },

        emptyCart:(state)=>{
          return state = []
        }
    
   }
})

export const {addToCart, removeCartItem , emptyCart} = cartSlice.actions

export default cartSlice.reducer