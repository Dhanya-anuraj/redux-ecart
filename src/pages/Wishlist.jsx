import React from 'react'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.WishlistReducer)
  console.log(wishlistArray);
  
  return (
    <>
      <h1 className='text-purple-900 text-center mt-10 text-4xl'>Wishlist</h1> 
      {/* items in wishlist */}
    {  wishlistArray?.length>0?<div className='md:grid grid-cols-4 md:p-10 p-5 mt-5 mb-5'>
      { wishlistArray.map((item, index)=>(
         <div className=' shadow-2xl rounded px-6 py-4 '>
          <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1140728/GlXRwuZtst-1140728_1.jpg" alt="no-image" style={{ height: '300px', width: "100%" }} />
          <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas odit quia delectus, commodi maxime impedit ratione voluptatibus vel quasi mollitia, consectetur autem ab fuga saepe natus dolorum, itaque nulla.</p>
          <p >Price :<span className='text-blue-700'> $9.9</span></p>
          <div className='flex justify-between mt-3'>
            <button className='bg-red-600 hover:bg-white hover:border hover:border-red-600 rounded px-2 py-1 hover:text-red-600 text-white'><FontAwesomeIcon icon={faHeart} className=' ' /></button>
            <button className='bg-green-800 rounded px-2 py-1 hover:bg-white hover:border hover:border-green-800 hover:text-green-800 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
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
