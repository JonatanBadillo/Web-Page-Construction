import { useState, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import CustomCard from "./Components/Cards/Card";
import Footer from "./Components/Footer/Footer";
import ContractSelector from "./Components/ContractSelector";
// import DynamicImageGallery from "./Components/DynamicImageGallery";
import Banner from "./assets/vid1.mp4";
import Company1 from "./assets/company.jpg";
import Company2 from "./assets/company2.jpg";
import Company3 from "./assets/company3.jpg";
import WhoWeServe from "./Components/WhoWeServe";
import Form from "./Components/Form/Form";
import "./index.css";

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
    title: "General Contracting Services",
    description: "Complete Solutions for Residential and Commercial Properties",
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
    title: "Subcontractor Services: Drywall and Insulation",
    description: "Expert Drywall and Insulation Services for Builders and Developers",
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
    ],
  };

  const contractInfo =
    selectedContract === "General" ? generalContractInfo : subContractInfo;


    

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

      {/* Contract Selector and Gallery */}
      <div ref={projectsRef}>
        <ContractSelector
          selectedContract={selectedContract}
          setSelectedContract={setSelectedContract}
        />
       {/* Aquí mostramos las tarjetas según el contrato seleccionado */}
       <div className="contract-info-cards">
          <h2>{contractInfo.title}</h2>
          <p>{contractInfo.description}</p>
          {contractInfo.content.map((section, index) => (
            <div key={index} className="contract-card">
              <h3>{section.title}</h3>
              <ul>
                {section.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
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
