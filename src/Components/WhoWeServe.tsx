import './WhoWeServe.css';
import { 
  FaBuilding,      // Para Property Management
  FaHome,          // Para Residential and Commercial Property Owners
  FaCity,          // Para Real Estate Developers
  FaBriefcase,     // Para Local Businesses
  FaDraftingCompass // Para Architects and Engineers
} from "react-icons/fa";
const WhoWeServe = () => {
  return (
    <div className="who-we-serve">
      <h2>Who We Serve</h2>
      <p>
      At Sam Alexander Construction Inc., we see every partnership as an opportunity to deliver exceptional value and expertise. We proudly serve:
      </p>
      <div className="service-icons">
        <div className="service-icon">
        <FaBuilding />
          <h3>Property Management Companies</h3>
          <p>Delivering renovations, repairs, maintenance, and tenant improvements to enhance property functionality and long-term value.</p>
        </div>
        <div className="service-icon">
        <FaHome />
          <h3>Residential and Commercial Property Owners</h3>
          <p>Offering comprehensive contracting services for remodeling, restoration, and custom projects tailored to unique needs.</p>
        </div>
        <div className="service-icon">
        <FaCity />
          <h3>Real Estate Developers</h3>
          <p>Providing expert construction and project management for multifamily and mixed-use development projects.</p>
        </div>
        <div className="service-icon">
        <FaBriefcase />
          <h3>Local Businesses</h3>
          <p>Crafting tenant improvements and facility upgrades to create functional, customized spaces that support business success.</p>
        </div>
        <div className="service-icon">
        <FaDraftingCompass />
          <h3>Architects and Engineers</h3>
          <p>Collaborating closely to transform design visions into reality with precision and attention to detail.</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
