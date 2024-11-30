import { useState, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import CustomCard from "./Components/Cards/Card";
import Footer from "./Components/Footer/Footer";
import ContractSelector from "./Components/ContractSelector";
import DynamicImageGallery from "./Components/DynamicImageGallery";
import Banner from "./assets/vid1.mp4";
import Company1 from "./assets/company.jpg";
import Company2 from "./assets/company2.jpg";
import Company3 from "./assets/company3.jpg";
import WhoWeServe from "./Components/WhoWeServe";
import Form from "./Components/Form/Form";
import "./index.css";
import { FaHammer, FaTools } from "react-icons/fa";
import Img1 from "./assets/img1.jpg";
import Img2 from "./assets/img2.jpg";
import Img3 from "./assets/img3.jpg";
import Img4 from "./assets/img4.jpg";
import Img5 from "./assets/img5.jpg";
import Img6 from "./assets/img6.jpg";
import Img7 from "./assets/img7.jpg";
import Img8 from "./assets/img8.jpg";
import Img9 from "./assets/img9.jpg";
import Img10 from "./assets/img10.jpg";
import Img11 from "./assets/img11.jpg";
import Img12 from "./assets/img12.jpg";
import Img13 from "./assets/img13.jpg";
import Img14 from "./assets/img14.jpg";
import Img15 from "./assets/img15.jpg";
import Img16 from "./assets/img16.jpg";
import Img17 from "./assets/img17.jpg";
import Img18 from "./assets/img18.jpg";
import Img19 from "./assets/img19.jpg";
import Img20 from "./assets/img20.jpg";
import Img21 from "./assets/img21.jpg";
import Img22 from "./assets/img22.jpg";
import Img23 from "./assets/img23.jpg";
import Img24 from "./assets/img24.jpg";
import Img25 from "./assets/img25.jpg";
import Img26 from "./assets/img26.jpg";
import Img27 from "./assets/img27.jpg";
import Img28 from "./assets/img28.jpg";
import Img29 from "./assets/img29.jpg";
import Img30 from "./assets/img30.jpg";
import Img31 from "./assets/img31.jpg";
import Img32 from "./assets/img32.jpg";
import Img33 from "./assets/img33.jpg";
import Img34 from "./assets/img34.jpg";
import Img35 from "./assets/img35.jpg";




const App = () => {
  const [selectedContract, setSelectedContract] = useState("General");

  // Crear refs para cada sección
  const bannerRef = useRef(null);
  const aboutUsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Función para desplazarse a una sección específica
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const generalContractInfo = {
    content: [
      {
        title: "Renovations and Remodeling",
        details: [
          "Interior renovations (kitchen, bathroom, flooring, painting, etc.)",
          "Exterior upgrades (siding replacement, roofing, windows, and doors)",
          "Tenant improvement projects to customize units for new occupants",
        ],
      },
      {
        title: "Maintenance and Repairs",
        details: [
          "Plumbing repairs (leaks, fixture replacements, water heater installation)",
          "Electrical repairs (wiring, lighting, circuit breakers)",
        ],
      },
      {
        title: "Property Turnover Services",
        details: [
          "Complete unit turnover preparation (painting, flooring, appliance replacement)",
          "Deep cleaning services",
          "Addressing tenant damage and restoring units to rentable condition",
        ],
      },
      {
        title: "Code Compliance and Safety Upgrades",
        details: [
          "ADA compliance modifications",
          "Replace and Install Fire doors",
          "Structural repairs to ensure building safety",
        ],
      },
      {
        title: "Preventative Maintenance Programs",
        details: [
          "Scheduled inspections and upkeep to prevent costly repairs",
          "Regular servicing of plumbing, and electrical systems",
        ],
      },
    ],
  };

  const subContractInfo = {
    content: [
      {
        title: "Drywall Services",
        details: [
          "Installation and taping",
          "Texture application and finishing",
          "Patching and repairs",
        ],
      },
      {
        title: "Insulation Services",
        details: [
          "Thermal and soundproofing insulation",
          "Blown-in, batt, and spray foam installation",
          "Retrofitting for energy efficiency",
        ],
      },
      // Carta 1: Expert Craftsmanship
      {
        title: "Expert Craftsmanship",
        details: [
          "Our skilled professionals excel in drywall installation, finishing, and insulation placement, ensuring seamless results that meet or exceed industry standards.",
        ],
      },
      // Carta 2: Timely Execution
      {
        title: "Timely Execution",
        details: [
          "We understand the importance of sticking to schedules, and we work diligently to keep your projects on track.",
        ],
      },
      // Carta 3: Scalable Solutions
      {
        title: "Scalable Solutions",
        details: [
          "Whether you’re building single-family homes, multifamily developments, or large-scale projects, we have the capacity and expertise to handle jobs of any size.",
        ],
      },
      // Carta 4: Attention to Detail
      {
        title: "Attention to Detail",
        details: [
          "From smooth drywall finishes to energy-efficient insulation installation, we take pride in delivering work that enhances both the aesthetics and functionality of your builds.",
        ],
      },
    ],
  };

  const contractInfo =
    selectedContract === "General" ? generalContractInfo : subContractInfo;




  const projectImages = [
    {
      original: Img1, // Ruta de la imagen
      thumbnail: Img1, // Ruta del thumbnail
      description: "Completed Project in San Pedro, CA (Los Angeles) 34-Unit Mixed Use Apartment Building",
    },
    {
      original: Img2,
      thumbnail: Img2,
      description: "Completed Project in Gardena, CA 15-Unit Mixed Use Apartment Building, Under Construction,"
    },
    {
      original: Img3,
      thumbnail: Img3,
      description: "Completed Project Okland,CA Blossom House 36-Town House",
    },
    {
      original: Img4,
      thumbnail: Img4,
      description: "Current Project in Cherry Blossom Row Richmond,CA  100-Town House Under Construction"
    },
    {
      original: Img5,
      thumbnail: Img5,
      description: "Current Project Round Barn Santa Rosa,CA  245-Town House Under Construction"
    },
    {
      original: Img6,
      thumbnail: Img6,
      description: "Current Project Pinnacle Milpitas,CA  56-Town House Under Construction"
    },
    {
      original: Img7,
      thumbnail: Img7,
      description: "Completed Project Novato,CA Ascend at Hamilton Field 75-Town House"
    },
    {
      original: Img8,
      thumbnail: Img8,
      description: "Completed Project Commerce, CA Rosewood Village  31-townhomes"
    },
    {
      original: Img9,
      thumbnail: Img9,
      description: "Completed Project San Rafael,CA the Strand at Loch Lomond Marina—a luxury coastal community 37-Houses"
    },
    {
      original: Img10,
      thumbnail: Img10,
      description: "Current Project Concord CA Penny Lane 70-townhomes"
    },
    {
      original: Img11,
      thumbnail: Img11,
      description: "Completed Project in Santa Clara,CA Villa Bella 56-Unit Mixed Use Apartment Building"
    },
    {
      original: Img12,
      thumbnail: Img12,
      description: "Current Project in Bonnei Brae St,CA Los Angeles  45-Unit Mixed Use Apartment Building"
    },
    {
      original: Img13,
      thumbnail: Img13,
      description: "Completed Project in Santa Clara,CA 12-townhomes"
    },
    {
      original: Img14,
      thumbnail: Img14,
      description: "Completed Project in Porter Ranch,CA HAMPTON INN & SUITES 100 Rooms"
    },
    {
      original: Img15,
      thumbnail: Img15,
      description: "Completed Project in MonteBello,CA 64-Unit Mixed Use Apartment Building"
    },
    {
      original: Img16,
      thumbnail: Img16,
      description: "Completed Project in Palo Alto,CA office building"
    },
    {
      original: Img17,
      thumbnail: Img17,
      description: "Completed Project in San Francisco ,CA 109-Unit remodeling Apartment Building"
    },/////////////////
    {
      original: Img18,
      thumbnail: Img18,
      description: "Completed turnover unit in Los Angeles"
    },
    {
      original: Img19,
      thumbnail: Img19,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img20,
      thumbnail: Img20,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img21,
      thumbnail: Img21,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img22,
      thumbnail: Img22,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img23,
      thumbnail: Img23,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img24,
      thumbnail: Img24,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img25,
      thumbnail: Img25,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img26,
      thumbnail: Img26,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img27,
      thumbnail: Img27,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img28,
      thumbnail: Img28,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img29,
      thumbnail: Img29,
      description: "Completed unit new construction in Santa Clara, CA"
    },
    {
      original: Img30,
      thumbnail: Img30,
      description: "Home Depot bathroom renovation"
    },
    {
      original: Img31,
      thumbnail: Img31,
      description: "Home Depot bathroom renovation"
    },
    {
      original: Img32,
      thumbnail: Img32,
      description: "Home Depot bathroom renovation"
    },
    {
      original: Img33,
      thumbnail: Img33,
      description: "Home Depot bathroom renovation"
    },
    {
      original: Img34,
      thumbnail: Img34,
      description: "Home Depot bathroom renovation"
    },
    {
      original: Img35,
      thumbnail: Img35,
      description: "Home Depot bathroom renovation"
    },
    {
      original: Img1,
      thumbnail: Img1,
      description: ""
    },
    {
      original: Img1,
      thumbnail: Img1,
      description: ""
    },
  ];

  return (
    <div className="app-container">
      {/* Navbar with scroll handlers */}
      <Navbar
        onHomeClick={() => scrollToSection(bannerRef)}
        onAboutClick={() => scrollToSection(aboutUsRef)}
        onOurWorkClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Banner Section */}
      <div ref={bannerRef} className="banner-container">
        <div className="banner-overlay"></div>
        <video src={Banner} autoPlay loop muted />
        <div className="banner-text">
          <h1>Building Dreams Together:</h1>
          <p>Creating our ideal space with top-notch construction.</p>
          <button
            className="banner-button"
            onClick={() => scrollToSection(contactRef)}
          >
            Request consultation
          </button>
        </div>
      </div>
      <br />

      {/* About Us Section (Cards) */}
      <div ref={aboutUsRef} className="card-container">
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
              <li>
                We work together to ensure the success of each project we
                undertake.
              </li>
              <li>
                We bring dreams to life through expert construction solutions.
              </li>
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
              <li>
                We have been in the construction business for over 24 years.
              </li>
              <li>We provide high-quality services to our clients.</li>
              <li>
                Our team has completed numerous projects, from small to
                large-scale constructions.
              </li>
              <li>
                We have built a solid reputation for delivering high-quality
                construction projects.
              </li>
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
              <li>
                From Retail, Commercial, and Residential, we deliver exceptional
                results on every project.
              </li>
            </ul>
          }
          buttonText="Learn More"
        />
      </div>
      <br />

      {/* Who We Serve Section */}
      <WhoWeServe />
      <br />

      {/* Projects Section */}
      <center>
        <h1 className="section-title">
          <span>Our Projects</span>
        </h1>
      </center>

      <DynamicImageGallery images={projectImages} />

      {/* Contract Selector*/}
      <div ref={projectsRef}>
        <ContractSelector
          selectedContract={selectedContract}
          setSelectedContract={setSelectedContract}
        />
        {/* Aquí mostramos las tarjetas según el contrato seleccionado */}
        <div className="contract-info-cards">
          {contractInfo.content.map((section, index) => (
            <div key={index} className="contract-card">
              <div className="card-header">
                <FaTools
                  style={{
                    fontSize: "2rem",
                    color: "#ffd00e",
                    marginRight: "10px",
                  }}
                />
                <h3>{section.title}</h3>
              </div>
              <ul>
                {section.details.map((item, idx) => (
                  <li key={idx}>
                    <FaHammer
                      style={{ marginRight: "8px", color: "#ffd00e" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div ref={contactRef}>
        <Form />
      </div>

      {/* Footer */}
      <Footer
        onHomeClick={() => scrollToSection(bannerRef)}
        onAboutClick={() => scrollToSection(aboutUsRef)}
        onServicesClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
    </div>
  );
};

export default App;
