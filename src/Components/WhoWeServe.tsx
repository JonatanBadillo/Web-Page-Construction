import './WhoWeServe.css';
import { 
  MdApartment, // Para Multi Family
  MdStorefront, // Para Commercial
  MdBusinessCenter, // Para Property Management
  MdHotel, // Para Hospitality
  MdHandshake // Para Non Profit
} from "react-icons/md";

const WhoWeServe = () => {
  return (
    <div className="who-we-serve">
      <h2>Who We Serve</h2>
      <p>
        At Sam Alexander Construction Inc., we view every partnership as an opportunity to help
        builders and developers achieve their vision. Our services are designed to
        integrate seamlessly into your workflow, ensuring a hassle-free and productive collaboration.
      </p>
      <div className="service-icons">
        <div className="service-icon">
          <MdApartment />
          <h3>MULTI FAMILY</h3>
        </div>
        <div className="service-icon">
          <MdStorefront />
          <h3>COMMERCIAL</h3>
        </div>
        <div className="service-icon">
          <MdBusinessCenter />
          <h3>PROPERTY MANAGEMENT</h3>
        </div>
        <div className="service-icon">
          <MdHotel />
          <h3>HOSPITALITY</h3>
        </div>
        <div className="service-icon">
          <MdHandshake />
          <h3>NON PROFIT</h3>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
