import './Footer.css'; 
import Sponsor1 from "../../assets/sponsor1.png";
import Sponsor2 from "../../assets/sponsor2.png";
import Sponsor3 from "../../assets/sponsor3.png";
import Sponsor4 from "../../assets/sponsor4.png";
import { FaLinkedin } from "react-icons/fa";

interface FooterProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
}

const Footer = ({ onHomeClick, onAboutClick, onServicesClick, onContactClick }: FooterProps) => {
  const sponsors = [
    { src: Sponsor1, alt: 'Enterprise 1' },
    { src: Sponsor2, alt: 'Enterprise 2' },
    { src: Sponsor3, alt: 'Enterprise 3' },
    { src: Sponsor4, alt: 'Enterprise 4' },
  ];

  return (
    <footer className="footer-container">
      <h2 className="footer-title">Proud members and our Sponsors</h2>
      <div className="sponsors-container">
        {sponsors.map((sponsor, index) => (
          <img key={index} src={sponsor.src} alt={sponsor.alt} className="sponsor-image" />
        ))}
      </div>
      <div className="footer-links">
        <h3 className="footer-subtitle">Quick Links</h3>
        <ul>
          <li><button onClick={onHomeClick} className="footer-link">Home</button></li>
          <li><button onClick={onAboutClick} className="footer-link">About Us</button></li>
          <li><button onClick={onServicesClick} className="footer-link">Services</button></li>
          <li><button onClick={onContactClick} className="footer-link">Contact</button></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3 className="footer-subtitle">Contact Us</h3>

<p>
3031 Tisch Way      
110 Plaza Oeste San José, CA 95128


</p>
<p>11 W 9th St #323, Los Angeles, CA 90015</p>


        <p>admin@samalexanderconstruction.com</p>
        
        <p>(408) 668-3162</p>
        
      </div>
      <div className="footer-social">
        <h3 className="footer-subtitle">Follow Us</h3>
        <div className="social-icons">
          {/* <a href="https://www.facebook.com/samalexanderconstruction" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/samalexanderinc" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/samalexanderconstruction" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a> */}
          <a href="https://www.linkedin.com/company/sam-alexander-construction-inc/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Sam Alexander Construction Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
