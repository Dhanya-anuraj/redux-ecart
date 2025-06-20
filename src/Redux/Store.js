import { configureStore } from "@reduxjs/toolkit";
import  wishlistSlice  from "./slice/wishlistSlice";

const store = configureStore({
    reducer:{
        WishlistReducer:wishlistSlice
    }
})

export default store