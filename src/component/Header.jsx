import { faCartShopping, faHeart , faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

  const [status , setStatus] = useState(false)
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
   const cartArray = useSelector((state)=>state.cartReducer)


  const handleStatus= ()=>{
    setStatus(!status)
  }
  return (
    <>
      <nav className='bg-purple-900  md:flex pb-2 '>

        <div className='flex items-center justify-between'>
          <Link to={'/'}><h2 className='py-6 px-5 text-3xl text-white'><FontAwesomeIcon icon={faCartShopping} className='me-3' />Ecart</h2></Link>

          <button onClick={handleStatus} className='btn border border-white text-white px-3 py-1 rounded md:hidden me-3'><FontAwesomeIcon icon={faBars} className='text-xl' /></button>
  
        </div>
        {/* small screen */}
        { status && <ul className='flex md:hidden ms-auto items-center '>
          <li>
            <Link to={'/wishlist'}><button className='btn border border-white rounded px-4 py-2 text-white ms-3 hover:text-purple-900 hover:bg-white'><FontAwesomeIcon icon={faHeart} className='me-3' style={{ color: "#f60410", }} />Wishlist <span className='bg-gray-300 rounded px-2 text-black ms-2'>{wishlistArray?.length}</span></button></Link>
          </li>

          <li className='ms-3'>
            <Link to={"/cart"}>
              <button className='btn border border-white rounded px-4 py-2 me-3 text-white  hover:text-purple-900 hover:bg-white'><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{ color: "#00c203", }} />Cart <span className='bg-gray-300 rounded px-2 text-black ms-2'>{cartArray.length}</span>
              </button>
            </Link>
          </li>
        </ul>}
        {/* big screen */}
        <ul className='md:flex hidden ms-auto items-center '>
          <li>
            <Link to={'/wishlist'}><button className='btn border border-white rounded px-4 py-2 text-white ms-3 hover:text-purple-900 hover:bg-white'><FontAwesomeIcon icon={faHeart} className='me-3' style={{ color: "#f60410", }} />Wishlist <span className='bg-gray-300 rounded px-2 text-black ms-2'>{wishlistArray?.length}</span></button></Link>
          </li>

          <li className='ms-3'>
            <Link to={'/cart'}>
              <button className='btn border border-white rounded px-4 py-2 me-3 text-white  hover:text-purple-900 hover:bg-white'><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{ color: "#00c203", }} />Cart <span className='bg-gray-300 rounded px-2 text-black ms-2'>{cartArray?.length}</span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
