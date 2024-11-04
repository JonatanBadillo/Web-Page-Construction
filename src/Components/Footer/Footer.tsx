import './Footer.css'; 
import Sponsor1 from "../../assets/sponsor1.png";
import Sponsor2 from "../../assets/sponsor2.png";
import Sponsor3 from "../../assets/sponsor3.png";
import Sponsor4 from "../../assets/sponsor4.png";

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
        <p>Email: admin@samalexanderconstruction.com</p>
        <p>Phone: (408) 668-3162</p>
      </div>
      <div className="footer-social">
        <h3 className="footer-subtitle">Follow Us</h3>
        <div className="social-icons">
          <span className="social-icon">FB</span>
          <span className="social-icon">TW</span>
          <span className="social-icon">IG</span>
          <span className="social-icon">LN</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Sam Alexander Construction Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
