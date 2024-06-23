import './WhoWeServe.css';
//import multifamilyIcon from '../../assets/multifamily.png';  
//import commercialIcon from '../../assets/commercial.png';
//import architectsIcon from '../../assets/architects.png';
import { FaBuilding } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";



const WhoWeServe = () => {
  return (
    <div className="who-we-serve">
      <h2>WHO WE SERVE</h2>
      <p>
        Mike Rovner Construction has grown into one of California’s premier renovation general contractors anchored by strong leadership. We are committed to delivering projects on-time and on-budget.
      </p>
      <div className="service-icons">
        <div className="service-icon">
        <FaBuilding />
          {/* <img src={multifamilyIcon} alt="Multi Family" /> */}
          

          <h3>MULTI FAMILY</h3>
        </div>
        <div className="service-icon">
        <BsFillBuildingsFill />
          {/* <img src={commercialIcon} alt="Commercial" /> */}
          <h3>COMMERCIAL</h3>
        </div>
        <div className="service-icon">
        <HiBuildingOffice2 />
          {/* <img src={architectsIcon} alt="Architects + Engineers" /> */}
          <h3>ARCHITECTS + ENGINEERS</h3>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
