import './WhoWeServe.css';
//import multifamilyIcon from '../../assets/multifamily.png';  
//import commercialIcon from '../../assets/commercial.png';
//import architectsIcon from '../../assets/architects.png';
import { FaBuilding } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbBuildingEstate } from "react-icons/tb";
import { RiBuilding2Line } from "react-icons/ri";





const WhoWeServe = () => {
  return (
    <div className="who-we-serve">
      <h2>WHO WE SERVE</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt unde, nam odit, necessitatibus error labore quo fugit consequuntur modi tempore minima. Dolores sequi quisquam ut quaerat, beatae minima vel!
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
          <h3>PROPERTY MANAGMENT</h3>
        </div>

        <div className="service-icon">
        <TbBuildingEstate />

          {/* <img src={multifamilyIcon} alt="Multi Family" /> */}
          

          <h3>HOSPITALITY</h3>
        </div>

        <div className="service-icon">
        <RiBuilding2Line />
          {/* <img src={multifamilyIcon} alt="Multi Family" /> */}
          

          <h3>NON PROFIT</h3>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
