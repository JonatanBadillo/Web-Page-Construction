import './Footer.css'; 
import Sponsor from "../../assets/sponsor.png";

const Footer = () => {
  const sponsors = [
    { src: Sponsor, alt: 'Enterprise 1' },
    { src: Sponsor, alt: 'Enterprise 2' },
    { src: Sponsor, alt: 'Enterprise 3' },
    { src: Sponsor, alt: 'Enterprise 4' },

  ];

  return (
    <footer className="footer-container">
      <h2 className="footer-title">Proud members and our Sponsors</h2>
      <div className="sponsors-container">
        {sponsors.map((sponsor, index) => (
          <img key={index} src={sponsor.src} alt={sponsor.alt} className="sponsor-image" />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
