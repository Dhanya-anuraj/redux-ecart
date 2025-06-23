import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../Redux/slice/cartSlice'

function Cart() {

  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch() 
  const navigate = useNavigate()
  const handleCheckout = ()=>{
    alert('your order placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }
  
  return (
    <>

      <h1 className='text-purple-900 text-center mt-10 text-4xl'>Cart</h1>
      {/* items in cart */}

      {
        cartArray?.length>0?
         <div className='md:grid grid-cols-[2fr_1fr] md:p-10 mt-5'>
        <div className='px-10 overflow-x-auto'>
          <table className='border border-gray-500 w-full shadow-2xl ' >
            <thead>
              <tr>
                <th className='border border-gray-500 bg-gray-500 p-4'>#</th>
                <th className='border border-gray-500 bg-gray-500 p-4'>Title</th>
                <th className='border border-gray-500 bg-gray-500 p-4'>Image</th>
                <th className='border border-gray-500 bg-gray-500 p-4'>Price</th>
                <th className='border border-gray-500 bg-gray-500 p-4'>Action</th>
              </tr>
            </thead>
             <tbody>
            {
              cartArray.map((item,index)=>(
                           
              <tr key={index}>
                <td className='text-center border border-gray-500'>{index+1}</td>
                <td className='text-center border border-gray-500'>{item?.title}</td>
                <td className=' border border-gray-500 flex justify-center'><img src={item?.thumbnail} alt="no-image" style={{ width: "150px", height: "150px" }} /></td>
                <td className='text-center border border-gray-500'>$ {item?.price}</td>
                <td className='text-center border border-gray-500'><button onClick={()=>dispatch(removeCartItem(item?.id))} className='bg-red-800 text-white px-3 py-2 rounded hover:text-red-800 hover:bg-white hover:border hover:border-red-800'><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
           

              ))
            }
             </tbody>
          </table>

          <div className='flex justify-center items-center mt-5'>
            <button onClick={()=>dispatch(emptyCart())} className=' px-3 py-2 bg-red-700 text-white rounded hover:border hover:border-red-700 hover:text-red-700 hover:bg-white hover:font-bold '>Empty cart</button>
          </div>
        </div>
        <div className='px-10 mt-5'>
          <div className='shadow-2xl rounded px-5 pb-5'>
            <h1 className='text-center text-2xl font-medium pt-5'>Cart Summary</h1>
            <p className='mt-5'>Total number of Products :{cartArray.length}</p>
            <p>Grand Total:${cartArray?.map((item)=>item.price).reduce((p1,p2)=>p1+p2)}</p>
            <button onClick={handleCheckout} className='bg-green-800 text-white px-3 py-2 w-full mt-4'>Check Out</button>

          </div>
        </div>
      </div>
      :
            <div className='md:grid grid-cols-3 md:p-10 p-5'>
        <div></div>
        <div className='flex justify-center items-center flex-col'>
          <img src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png" alt="no-image" style={{ width: "100%" }} />

          <Link to={'/'}> <button className='bg-green-800 text-white px-3 py-2 rounded hover:bg-white hover:text-green-800 hover:border hover:border-green-800 md:mt-0 mt-5'>Back Home</button></Link>
        </div>
        <div></div>
      </div>

      
      }

     






    </>
  )
}

export default Cart
