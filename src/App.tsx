import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';



const App = () => {

  const images = [
    {
      original : 'https://picsum.photos/id/1018/1000/600/',
      thumbnail : 'https://picsum.photos/id/1018/250/150/', 
    },
    {
      original : 'https://picsum.photos/id/1015/1000/600/',
      thumbnail : 'https://picsum.photos/id/1015/250/150/', 
    },
    {
      original : 'https://picsum.photos/id/1019/1000/600/',
      thumbnail : 'https://picsum.photos/id/1019/250/150/', 
    },
    {
      original : 'https://picsum.photos/id/1016/1000/600/',
      thumbnail : 'https://picsum.photos/id/1016/250/150/',
    }
  ]

  const currentTheme = localStorage.getItem('currentTheme');

  const [theme, setTheme] = useState(currentTheme? currentTheme : 'light');

  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <center><h1>Our Work</h1></center>
      <div style={{width: "70vw", margin: "auto"}}>
        <ImageGallery items={images} 
        showBullets={true}
        />
      </div>
      
    </div>
  )
}

export default App