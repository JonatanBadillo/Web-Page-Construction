import Navbar from "./Components/Navbar/Navbar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CustomCard from "./Components/Cards/Card";
import Footer from "./Components/Footer/Footer";

import Form from "./Components/Form/Form";

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
    <div>
      <Navbar />

      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          marginTop: "0px",
        }}
      >
        {/* Modificar el overlay para usar un gradiente en lugar de un color sólido */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%)", // Gradiente oscuro
            zIndex: "1",
          }}
        ></div>
        <img
          src="src/assets/banner.webp"
          alt="Banner"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {/* Aumentar la sombra del texto para mejorar la visibilidad */}
          <h1 style={{ textShadow: "3px 3px 6px #000000" }}>
            Building Dreams Together
          </h1>
          <p style={{ textShadow: "3px 3px 6px #000000" }}>
            Creating our ideal space with top-notch construction.
          </p>
          {/* Estilos adicionales para el botón */}
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#ffdb58",
              color: "black",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.3s ease", // Transición suave
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#f0c040")
            } // Cambio de color al pasar el mouse
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffdb58")
            } // Volver al color original
          >
            Request consultation
          </button>
        </div>
      </div>

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

      <center>
        <h1>Our Work</h1>
      </center>
      <div>
        <ImageGallery items={images} showBullets={true} />
      </div>

      <Form />
      <Footer />
    </div>
  );
};

export default App;
