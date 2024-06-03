
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





  return (
    <div >
      <Navbar/>

      <div className="card-container">
        <CustomCard
          imageSrc="src/assets/company3.jpg"
          imageAlt="green iguana"
          title="Our Team"
          description="Meet the talented individuals who make up our company."
          buttonText="LinkedIn"
        />

        <CustomCard
          imageSrc="src/assets/company2.jpg"
          imageAlt="another description"
          title="Our History"
          description="Discover the story behind our company's founding and growth."
          buttonText="Learn More"
        />

        <CustomCard
          imageSrc="src/assets/company.jpg"
          imageAlt="another description"
          title="Our Services"
          description="Explore the wide range of services we offer to our clients."
          buttonText="Learn More"
        />
      </div>

      <center><h1>Our Work</h1></center>
      <div>
        <ImageGallery items={images} showBullets={true} />
      </div>

      <Form />
    </div>
  );
};

export default App;
