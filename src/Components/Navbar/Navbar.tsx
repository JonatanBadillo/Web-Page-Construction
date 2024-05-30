import './Navbar.css'
// import logo_light from ''
// import logo_dark from ''
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'

const Navbar = ({theme,setTheme}) => {
    const toogle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    return (
        <div>
                <div className='navbar'>
                        {/* TODO: CHANGE IMG TO THE LOGO */}
                        {/*<img src={theme == 'light' ?  logo_light : logo_dark } alt='Logo' className='logo'/>*/}
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png" alt="logo" className='logo' />
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>See Our Work</li>
                            <li>Contact Us</li>
                        </ul>
                
                
                <div className='search-box'>
                    <input type='text' placeholder='Search' />
                    <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
                </div>

                <img onClick={()=>{toogle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toogle-icon'/>
                
                </div>
        </div>
    )
}

export default Navbar