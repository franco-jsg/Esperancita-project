import { useEffect,useRef } from "react";
import { useEsperancitaContext } from "../../context/Context";
import Contact_form from "./Contact_form";
import Logo from "../../assets/svg/footer/footer1.svg";
import Separator from "../../assets/svg/footer/footer2.svg";
import Instagram from "../../assets/svg/socials/instagram.svg";
import Youtube2 from "../../assets/svg/socials/youtube2.svg";
import LinkedIn from "../../assets/svg/socials/linkedin.svg";

const Footer_home = () => {
  const { footerIsIntersecting, setFooterIsIntersecting} = useEsperancitaContext()

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setFooterIsIntersecting(entry.isIntersecting), { rootMargin: "-150px 0px 0px 0px" };
    });
    console.log(footerIsIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [footerIsIntersecting]);


  
  return (
    <footer className="footer footer_home" ref={ref}>
      <div className="section_footer" >
        <img className="footer_logo" src={Logo} alt="logo"  />
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
                <a href="https://instagram.com" target="_blank" className="social-link">
                  <img src={Instagram} alt="" />
                </a>
                <a href="https://www.youtube.com" target="_blank" className="social-link">
                  <img src={Youtube2} alt="" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" className="social-link">
                  <img src={LinkedIn} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer_home;
