import { faHeart ,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import  {addWishlist}  from '../Redux/slice/wishlistSlice'

function Home() {

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  const dispatch = useDispatch()
  
  return (
    <>
    <div className='md:grid grid-cols-4 md:p-10 p-5 mt-5 mb-5'>

      {
        data.length>0?
        data?.map((item , index)=>(
          <div key={index} className=' shadow-2xl rounded px-6 py-4 md:mt-0 mt-10 '>
          <img src={item?.thumbnail} alt="no-image" style={{height:'300px', width:"100%"}}/>
          <h4 className='text-center text-purple-900 font-bold'>{item?.title}</h4>
          <p className='text-justify mt-2'>{item?.description}</p>
          <p >Price :<span className='text-purple-900'>{item?.price}</span></p>
          <div className='flex justify-between mt-3'>
            <button onClick={()=>dispatch(addWishlist((item)))} className='bg-red-600 hover:bg-white hover:border hover:border-red-600 rounded px-2 py-1 hover:text-red-600 text-white'><FontAwesomeIcon icon={faHeart} className=' '/></button>
            <button className='bg-green-800 rounded px-2 py-1 hover:bg-white hover:border hover:border-green-800 hover:text-green-800 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>

        ))
           :
           <p className='text-3xl text-center text-purple-800'>Loading....</p>

      }
    </div>
    
    </>
  )
}

export default Home
