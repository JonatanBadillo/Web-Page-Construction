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
          <li><a onClick={onHomeClick} >Home</a></li>
          <li><a onClick={onAboutClick} >About Us</a></li>
          <li><a onClick={onServicesClick}>Services</a></li>
          <li><a onClick={onContactClick}>Contact</a></li>
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
          <a href="#" className="social-icon">FB</a>
          <a href="#" className="social-icon">TW</a>
          <a href="#" className="social-icon">IG</a>
          <a href="#" className="social-icon">LN</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Sam Alexander Construction Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
