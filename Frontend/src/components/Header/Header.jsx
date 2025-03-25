import React from 'react'
import './Header.css'
const Header = () => {
  console.log('Header is rendering');
  return (
    <div className='header'>
          <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Choose from diverse menu featuring a delectable array of dishes crafted with the finest ingridients and cutlinary expertise.our mission is to satisfy your cravings and elevate your dining experience meal at a time </p>
                <button>View Menu</button>
          </div>
    </div>
  )
}

export default Header