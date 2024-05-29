import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
                <div className='navbar'>
                        {/* TODO: CHANGE IMG TO THE LOGO */}
                        <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png' alt='Logo' />
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>See Our Work</li>
                            <li>Contact Us</li>
                        </ul>
                </div>
                
                <div className='search-box'>
                    <input type='text' placeholder='Search' />
                    <img src="" alt="" />
                </div>

                <img src="" alt="" className='toggle-icon'/>
        </div>
    )
}

export default Navbar