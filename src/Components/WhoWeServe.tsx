
import './WhoWeServe.css';
import { FaBuilding } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbBuildingEstate } from "react-icons/tb";
import { RiBuilding2Line } from "react-icons/ri";

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
          <FaBuilding />
          <h3>MULTI FAMILY</h3>
        </div>
        <div className="service-icon">
          <BsFillBuildingsFill />
          <h3>COMMERCIAL</h3>
        </div>
        <div className="service-icon">
          <HiBuildingOffice2 />
          <h3>PROPERTY MANAGEMENT</h3>
        </div>
        <div className="service-icon">
          <TbBuildingEstate />
          <h3>HOSPITALITY</h3>
        </div>
        <div className="service-icon">
          <RiBuilding2Line />
          <h3>NON PROFIT</h3>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
