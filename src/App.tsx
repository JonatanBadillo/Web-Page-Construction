import Navbar from "./Components/Navbar/Navbar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CustomCard from "./Components/Cards/Card";
import Footer from "./Components/Footer/Footer";
import Banner from "./assets/vid1.mp4";
import Company1 from "./assets/company.jpg";
import Company2 from "./assets/company2.jpg";
import Company3 from "./assets/company3.jpg";
import WhoWeServe from "./Components/WhoWeServe";
import Form from "./Components/Form/Form";
import Comments from "./Components/Comments/Comments";

import "./index.css";

const App = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1016/1000/600/",
      thumbnail: "https://picsum.photos/id/1016/250/150/",
    },
  ];

  return (
    <div className="app-container">
      {" "}
      {/* Añadimos la clase 'app-container' */}
      <Navbar />
      <div className="banner-container">
        <div className="banner-overlay"></div>
        <video src={Banner} autoPlay loop muted />
        <div className="banner-text">
          <h1>Building Dreams Together:</h1>
          <p>Creating our ideal space with top-notch construction.</p>
          <button className="banner-button">Request consultation</button>
        </div>
      </div>
      <br></br>
      <div className="card-container">
        <CustomCard
          imageSrc={Company1}
          imageAlt="green iguana"
          title="Our Team"
          // description="Meet the talented individuals who make up our company."
          description="Our team consists of experienced and skilled professionals. 

Head of Operations

Contruction Managers

Project Managers

Project Coordinators

Foremen

Estimators

We work together to ensure the success of each project we undertake.

We bring dreams to life through expert construction solutions"
          buttonText="LinkedIn"
        />
        <CustomCard
          imageSrc={Company2}
          imageAlt="another description"
          title="Our History"
          // description="Discover the story behind our company's founding and growth."
          description="We have been in the construction business for over 24 years, providing high-quality services to our clients. Our team has completed numerous projects, ranging from small  to large-scale constructions.

With years of experience in the industry, we have built a solid reputation for delivering high-quality construction projects."
          buttonText="Learn More"
        />
        <CustomCard
          imageSrc={Company3}
          imageAlt="another description"
          title="Our Services"
          // description="Explore the wide range of services we offer to our clients."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus. lore
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus."
          buttonText="Learn More"
        />
      </div>
      <br></br>
      <WhoWeServe />
      <br></br>
      <center>
        <h1 className="section-title">
          <span>Our Work</span>
        </h1>
      </center>
      <div className="image-gallery">
        <ImageGallery items={images} showBullets={true} showThumbnails={true} />
      </div>
      <Form />
      <Comments />
      <Footer />
    </div>
  );
};

export default App;
