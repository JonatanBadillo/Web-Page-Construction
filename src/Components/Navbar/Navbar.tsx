import React from 'react'
import './Navbar.css'
// import logo_light from ''
// import logo_dark from ''
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'

const Navbar = () => {
    return (
        <div>
                <div className='navbar'>
                        {/* TODO: CHANGE IMG TO THE LOGO */}
                        <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png' alt='Logo' className='logo'/>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>See Our Work</li>
                            <li>Contact Us</li>
                        </ul>
                
                
                <div className='search-box'>
                    <input type='text' placeholder='Search' />
                    <img src={search_icon_light} alt="" />
                </div>

                <img src={toogle_light} alt="" className='toogle-icon'/>
                
                </div>
        </div>
    )
}

export default Navbar