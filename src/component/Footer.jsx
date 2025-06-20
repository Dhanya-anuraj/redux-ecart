import { faXTwitter , faFacebook,  faInstagram ,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-purple-900 '>
        <div className='md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
          <div className='p-6 text-white'>
            <Link to={'/'}><h2 className=' text-2xl text-white'><FontAwesomeIcon icon={faCartShopping} className='me-3' />Ecart</h2></Link>
            <p className='mt-3 text-justify ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis necessitatibus ipsam corporis excepturi obcaecati, assumenda voluptate beatae dolore dolor commodi mollitia officiis quo aut debitis sit. Corporis incidunt nulla illo.</p>
          </div>
  
          <div className='p-6 text-white md:flex justify-center'>
            <div>
              <h2 className=' text-2xl'>Links</h2>
              <Link to={'/'}><p className='mt-3'>Home</p></Link>
              <Link to={'/wishlist'}><p>Wishlist</p></Link>
              <Link to={'/cart'}><p>Cart</p></Link>
            </div>
          </div>
  
          <div className='p-6 text-white md:flex justify-center'>
            <div>
              <h2 className=' text-2xl'>Guides</h2>
              <p className='mt-3'>Tailwind</p>
              <p>React</p>
              <p>Vite</p>
            </div>
          </div>
  
          <div className='p-6 text-white'>
            <h2 className=' text-2xl'>Contact Us</h2>
            <div className='flex mt-4  '>
              <input type="text" placeholder='EmailID' className=' bg-white mt-5 rounded p-3 placeholder-neutral-400 w-full ' />
  
              <button className=' bg-amber-600 rounded px-3 ms-3 mt-5 '>Subscribe</button>
            
            </div>
             <div  className='flex justify-between items-center mt-5'>
                  <FontAwesomeIcon icon={faXTwitter} className='fa-2x'/>
                  <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
                  <FontAwesomeIcon icon={faInstagram}className='fa-2x' />
                  <FontAwesomeIcon icon={faYoutube} className='fa-2x'/>
              </div>
  
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
