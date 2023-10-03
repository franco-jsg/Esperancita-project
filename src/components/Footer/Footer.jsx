import img from "../../assets/png/planet-earth_1598431.png";
import Contact_form from "./Contact_form";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={img} alt="" />
        <section className="footer__info">
          <div className="footer__projects">
            <p>Work</p>
            <p>3D</p>
            <p>Simulacion</p>
            <p>Compo</p>
          </div>

          <Contact_form />

          <div className="footer__social">
            <p>Join us</p>
            <div>----------------</div>
            <div className="social__links">
              <p>Follow us:</p>
              <div className="social__icons">
                <a href="https://instagram.com" className="social-link">
                  <i class="bx bxl-instagram bx-sm"></i>
                </a>
                <a href="https://www.youtube.com" className="social-link">
                  <i class="bx bxl-youtube bx-sm"></i>
                </a>
                <a href="https://www.linkedin.com" className="social-link">
                  <i class="bx bxl-linkedin bx-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
