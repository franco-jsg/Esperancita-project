import Contact_form from "./Contact_form";
import Logo from "../../assets/svg/footer/footer1.svg";
import Separator from "../../assets/svg/footer/footer2.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section_footer container">
        <img className="footer_logo" src={Logo} alt="logo" />
        <section className="footer__info">
          <ul className="footer__projects">
            <li>Work</li>
            <li>3D</li>
            <li>Simulacion</li>
            <li>Compo</li>
          </ul>

          <Contact_form />

          <div className="footer__social">
            <h4>Join us</h4>
            <img src={Separator} alt="separator" />
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
