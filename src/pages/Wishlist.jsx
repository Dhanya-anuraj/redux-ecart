import React from 'react'
import { faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {removeWishlistItem} from '../Redux/slice/wishlistSlice'
import { addToCart } from '../Redux/slice/cartSlice'
function Wishlist() {
  const wishlistArray = useSelector((state)=>state.WishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handleCart = (item)=>{
   dispatch(addToCart(item))
   dispatch(removeWishlistItem(item.id))
   
  }
  return (
    <>
      <h1 className='text-purple-900 text-center text-4xl' style={{paddingTop:"70px"}}>Wishlist</h1> 
      {/* items in wishlist */}
    {  wishlistArray?.length>0?<div className='md:grid grid-cols-4 md:p-10 p-5 mt-5 mb-5'>
      { wishlistArray.map((item, index)=>(
         <div key={index} className=' shadow-2xl rounded px-6 py-4 '>
          <img src={item?.thumbnail} alt="no-image" style={{ height: '300px', width: "100%" }} />
          <h4 className='text-center text-purple-800 font-bold'>{item?.title}</h4>
          <p className='text-justify'>{item?.description}</p>
          <p >Price :<span className='text-blue-700'>$ {item?.price}</span></p>
          <div className='flex justify-between mt-3'>
            <button onClick={()=>dispatch(removeWishlistItem(item.id))} className='bg-red-600 hover:bg-white hover:border hover:border-red-600 rounded px-2 py-1 hover:text-red-600 text-white'><FontAwesomeIcon icon={faTrash} className=' ' /></button>
            <button onClick={()=>handleCart(item)} className='bg-green-800 rounded px-2 py-1 hover:bg-white hover:border hover:border-green-800 hover:text-green-800 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
      ))}
      </div>

      :

      <div className='md:grid grid-cols-3 md:p-10 p-5'>
        <div></div>
         <div className='flex justify-center items-center flex-col'>
          <img src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="no-image" style={{width:"100%"}} />

         <Link to={'/'}> <button className='bg-green-800 text-white px-3 py-2 rounded hover:bg-white hover:text-green-800 hover:border hover:border-green-800 md:mt-0 mt-5'>Back Home</button></Link>
          </div>
          <div></div>
      </div>
}
    </>
  )
}

export default Wishlist
