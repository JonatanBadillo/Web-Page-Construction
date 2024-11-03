import  { useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import CustomCard from "./Components/Cards/Card";
import Footer from "./Components/Footer/Footer";
import ContractSelector from './Components/ContractSelector';
import DynamicImageGallery from './Components/DynamicImageGallery';
import Banner from "./assets/vid1.mp4";
import Company1 from "./assets/company.jpg";
import Company2 from "./assets/company2.jpg";
import Company3 from "./assets/company3.jpg";
import WhoWeServe from "./Components/WhoWeServe";
import Form from "./Components/Form/Form";
import Comments from "./Components/Comments/Comments";

import "./index.css";

const App = () => {
  const [selectedContract, setSelectedContract] = useState("General");

  const generalContractImages = [
    { original: "https://picsum.photos/id/1018/1000/600/", thumbnail: "https://picsum.photos/id/1018/250/150/", description: "Overseeing the entire project" },
    { original: "https://picsum.photos/id/1015/1000/600/", thumbnail: "https://picsum.photos/id/1015/250/150/", description: "Managing resources and teams" },
    { original: "https://picsum.photos/id/1019/1000/600/", thumbnail: "https://picsum.photos/id/1019/250/150/" },
  ];

  const subContractImages = [
    { original: "https://picsum.photos/id/1021/1000/600/", thumbnail: "https://picsum.photos/id/1021/250/150/", description: "Specialized electrical work" },
    { original: "https://picsum.photos/id/1022/1000/600/", thumbnail: "https://picsum.photos/id/1022/250/150/", description: "Focused plumbing services" },
    { original: "https://picsum.photos/id/1023/1000/600/", thumbnail: "https://picsum.photos/id/1023/250/150/" },
  ];

  const imagesToDisplay = selectedContract === "General" ? generalContractImages : subContractImages;

  return (
    <div className="app-container">
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
      <br />

      <div className="card-container">
        <CustomCard
          imageSrc={Company1}
          imageAlt="Our Team"
          title="Our Team"
          description={
            <ul>
              <li>Head of Operations</li>
              <li>Construction Managers</li>
              <li>Project Managers</li>
              <li>Project Coordinators</li>
              <li>Foremen</li>
              <li>Estimators</li>
              <li>We work together to ensure the success of each project we undertake.</li>
              <li>We bring dreams to life through expert construction solutions.</li>
            </ul>
          }
          buttonText="LinkedIn"
        />

        <CustomCard
          imageSrc={Company2}
          imageAlt="Our History"
          title="Our History"
          description={
            <ul>
              <li>We have been in the construction business for over 24 years.</li>
              <li>We provide high-quality services to our clients.</li>
              <li>Our team has completed numerous projects, from small to large-scale constructions.</li>
              <li>We have built a solid reputation for delivering high-quality construction projects.</li>
            </ul>
          }
          buttonText="Learn More"
        />

        <CustomCard
          imageSrc={Company3}
          imageAlt="Our Services"
          title="Our Services"
          description={
            <ul>
              <li>Metal Framing</li>
              <li>Drywall & Taping</li>
              <li>Painting</li>
              <li>Wallpaper</li>
              <li>Acoustical Ceilings</li>
              <li>Insulation</li>
              <li>Blow-In Insulation</li>
              <li>Foam Insulation</li>
              <li>From Retail, Commercial, and Residential, we deliver exceptional results on every project.</li>
            </ul>
          }
          buttonText="Learn More"
        />
      </div>
      <br />
      
      <WhoWeServe />
      <br />

      <center>
        <h1 className="section-title">
          <span>Our Projects</span>
        </h1>
      </center>

      {/* Sección de selección de contrato y carrusel de imágenes */}
      <ContractSelector selectedContract={selectedContract} setSelectedContract={setSelectedContract} />
      <DynamicImageGallery images={imagesToDisplay} />

      <Form />
      <Comments />
      <Footer />
    </div>
  );
};

export default App;
