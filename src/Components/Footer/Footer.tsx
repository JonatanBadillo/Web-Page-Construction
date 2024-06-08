
import './Footer.css'; 

const Footer = () => {
  const sponsors = [
    { src: 'src/assets/sponsor.png', alt: 'Enterprise 1' },
    { src: 'src/assets/sponsor.png', alt: 'Enterprise 2' },
    { src: 'src/assets/sponsor.png', alt: 'Enterprise 3' },
    { src: 'src/assets/sponsor.png', alt: 'Enterprise 4' },
    // Agrega más patrocinadores aquí
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