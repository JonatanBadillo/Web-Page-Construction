import './Footer.css'; 
import Sponsor1 from "../../assets/sponsor1.png";
import Sponsor2 from "../../assets/sponsor2.png";
import Sponsor3 from "../../assets/sponsor3.png";
import Sponsor4 from "../../assets/sponsor4.png";

const Footer = () => {
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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3 className="footer-subtitle">Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (234) 567-890</p>
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
