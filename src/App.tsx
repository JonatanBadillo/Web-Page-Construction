
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import CustomCard from './Components/Cards/Card';
import Form from './Components/Form/Form';

const App = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1016/1000/600/',
      thumbnail: 'https://picsum.photos/id/1016/250/150/',
    }
  ];

  const currentTheme = localStorage.getItem('currentTheme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <CustomCard
        imageSrc="/static/images/cards/contemplative-reptile.jpg"
        imageAlt="green iguana"
        title="Lizard"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        buttonText="Share"
      />

      <CustomCard
        imageSrc="/static/images/cards/another-image.jpg"
        imageAlt="another description"
        title="Another Card"
        description="This is another card with different content and an image."
        buttonText="Learn More"
      />

      <CustomCard
        imageSrc="/static/images/cards/another-image.jpg"
        imageAlt="another description"
        title="Another Card"
        description="This is another card with different content and an image."
        buttonText="Learn More"
      />

      <center><h1>Our Work</h1></center>
      <div>
        <ImageGallery items={images} showBullets={true} />
      </div>

      <Form />
    </div>
  );
};

export default App;
